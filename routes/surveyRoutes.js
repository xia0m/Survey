const _ = require('lodash');
const Path = require('path-parser').default;
const {URL} = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {

    app.get('/api/surveys',requireLogin, async (req,res)=>{
       const surveys = await Survey.find({_user:req.user.id})
        .select({recipients:false});
        //don't include recipients
       res.send(surveys);
    });

    app.get('/api/surveys/:surveyId/:choice',(req,res)=>{
        res.send('thanks for voting');
    });

    app.get('/api/templates',requireLogin, (req,res)=>{
        const survey={body:'This is just a sample, the final email sent out will be your actual email body',id:'theSurveyId'};
        res.send(surveyTemplate(survey));
    })

    app.post('/api/surveys/webhooks',(req,res)=>{

        const p = new Path('/api/surveys/:surveyId/:choice');

        const events = _.chain(req.body).map(event=>{
            const pathname = new URL(event.url).pathname; 
            const match = p.test(pathname);
            if(match){
                return {email:event.email,surveyId:match.surveyId,choice:match.choice};
            }
        })
        .compact()
        .uniqBy('email','surveyId')
        .each(({surveyId,email,choice})=>{
            Survey.updateOne({
                _id:surveyId,
                recipients:{
                    $elemMatch:{email:email,responded:false}
                }
            },{
                $inc:{[choice]:1},
                $set:{'recipients.$.responded':true}
            }).exec();
        })
        .value();
        
        //remove the duplicate email response
        res.send({});

    });

    app.post('/api/surveys',requireLogin, requireCredits, async (req,res)=>{
        const {title,subject,body,recipients} = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients:recipients.split(',').map(email=>({email:email.trim()})),
            _user: req.user.id,
            dateSent:Date.now(),
            lastResponded: new Date()
        })

        const mailer = new Mailer(survey,surveyTemplate(survey));
        try {
        await mailer.send();
        await survey.save();
        req.user.credits -=1;
        req.user.emailCount +=1;
        const user = await req.user.save();

        res.send(user);
        } catch (err){
            res.status(422).send(err);
        }
    });
};