const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app =>{
		
   app.post('/api/stripe', requireLogin, async (req,res)=>{

		 const charge = await stripe.charges.create({
			 amount:500,
			 currency:'cad',
			 description:'Charge for the survey',
			 source:req.body.id
		 });
		 req.user.credits += 5;
		 const user = await req.user.save();
		 
		 res.send(user);

	 });
	 app.get('/api/test',(req,res)=>{
		 res.send({test:'test'})
	 })
    
};

