# [Ez Survey](https://morning-shelf-83495.herokuapp.com) 

Ez Survey is online tools to create Email survey. It is created using React/Redux as frontend, Express/Mongo/Passport as backend. For a live demo, click [here](https://morning-shelf-83495.herokuapp.com).
The document is divided into several sections:
* [Preparation](#preparation)
* [Setup](#setup)
* [Installation](#installation)
* [Usage](#usage)
* [Deployment](#deployment)
* [LICENSE](#license)
## Preparation
* [Setup Google client ID and secret](https://developers.google.com/adwords/api/docs/guides/authentication)
	* Under Google APIs console, create a new project
	* Once a project is created, click Credentials -\> OAuth consent screen, give it a name
	* Click ‘Create credentials’ -\> OAuth client ID
	* Click Web application, under Authorized Javascript origins, paste in ’http://localhost:5000’
	* Under Authorized redirect URIs, paste in ‘http://localhost:5000/auth/google/callback' and ‘http://localhost:3000/auth/callback'
	* Save the project
* [Setup mLab and mongoDB address](https://docs.mlab.com/)
* [Create stripe account and keys](https://stripe.com/docs/keys)
* [Create SendGrid keys](https://sendgrid.com/docs/ui/account-and-settings/api-keys/)

## Setup

* Clone the project
* Under config folder, create a new file named dev.js
* Copy the following content to dev.js
```js
//devjs - don't commit this, make sure dev.js is in .gitignore, otherwise, you may leak your secret key

module.exports = {
    googleClientID:<your_googleClientID>,
    googleClientSecret:<your_googleClientSecret>,
    mongoURI: <your_MongoDB_Address>,
    cookieKey:<a random string consists of letter and number>,
    stripePublishableKey:<stripePublishableKey>,
    stripeSecretKey:<stripeSecretKey>,
    sendGridKey:<SendGridKey>,
    redirectDomain:'http://localhost:3000'
};
```

## Installation
* In your cloned folder root, run the following command
```js
npm install
npm i --save concurrently
cd client && npm install
cd ..
npm run dev
```

## Usage
* Login in into admin dashboard to create new Email survey
* To add credits, use 4242 4242 4242 4242 as card number. This is for demo purpose, please don’t use any actual credit card number.
* Once you receive Email, you can click yes/no to finish the survey.
* To alter the email template, go to services-\>emailTemplates-\>surveyTemplates.js

## Deployment
* This is app is designed to deplopy to [Heroku]((https://devcenter.heroku.com/articles/git))
* Once your create your project, go to project’s settings and create according environment variables one by one.
* Do the same process as Setting up Google Id and secret, just change the web address from localhost:3000, hocalhost:5000 to \<your-app-address\>and \<your-app-address\>/auth/google/callback

## LICENSE
  Licensed under the [MIT](./LICENSE) License.
