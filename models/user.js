const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    email:String,
    userName:String,
    credits:{type:Number, default:0}
});

mongoose.model('users',userSchema);