const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done)=>{
    // console.log('seri id is ',user)
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    // console.log('id is ',id);
    User.findById(id)
     .then(user=>{
         done(null,user);
     });
});


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL:'/auth/google/callback',
    proxy: true
    }, 
    async (accessToken,refreshToken,profile,done)=>{
        const existingUser = await User.findOne({email:profile.emails[0].value})
            // console.log("the profile is ",profile)
            if(existingUser){
                //already have a record
                done(null,existingUser);
            } else {
                //user not existed
                // console.log('profile is',profile);
                const user = await new User({email:profile.emails[0].value,userName:profile.displayName}).save();
                done(null,user);
            }
 
        
    }
));

passport.use(new FacebookStrategy({
    clientID: keys.facebookClientID,
    clientSecret:keys.facebookClientSecret,
    callbackURL:'/auth/facebook/callback',
    profileFields:['id','email','name','picture'],
    proxy:true
},
    async (accessToken,refreshToken,profile,done)=>{
        
        const existingUser = await User.findOne({email:profile.emails[0].value})
        
            if(existingUser){
                //already have a record
                done(null,existingUser);
            } else {
                //user not existed
                let theUserName = 'New User';
                if(profile.displayName) theUserName = profile.displayName;
                const user = await new User({
                    email:profile.emails[0].value,
                    userName:theUserName,
                }).save();
                done(null,user);
            }

        
    }
))
