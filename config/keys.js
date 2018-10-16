// keys.js - choose what set of credentials to return

if(process.env.NODE_ENV==='production'){
    //production mode, return prodctuion keys
    module.exports = require('./prod');
} else {
    //devlopment mode, return development keys
    module.exports = require('./dev');
}