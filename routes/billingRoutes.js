const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app =>{

   app.post('/api/stripe',async (req,res)=>{
		 const charge = await stripe.charges.create({
			 amount:500,
			 currency:'usd',
			 description:'Charge for the survey',
			 source:req.body.id
		 });

		 console.log(charge);

	 });
	 app.get('/api/test',(req,res)=>{
		 res.send({test:'test'})
	 })
    
};

