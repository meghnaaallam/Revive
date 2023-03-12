//initializing mongoose connection
const mongoose = require('mongoose');

//initializing bcryptjs & jsonwebtoken to encrypt the password feild
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

//creating schema for drafts
const userSchema = new mongoose.Schema({
  //col:1 name -> it is a required feild with maxLength of 32 characters
   name: {
       type: String,
       trim: true,
       required : [true, 'Please add a Name'],
       maxlength: 32
   },
  //col:2 email -> it is a required feild which should match certain sequence characters
   email: {
       type: String,
       trim: true,
       required : [true, 'Please add a E-mail'],
       unique: true,
       match: [
           /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
           'Please add a valid E-mail'
       ]

   },
 //col:3 password -> it is a required feild with minLength of 6 characters
    //should match certain sequence of characters
   password: {
       type: String,
       trim: true,
       required : [true, 'Please add a Password'],
       minlength: [6, 'password must have at least six(6) characters'],
       match: [
           /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
           'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters'
       ]
   },
},
        //adding timestamps to the schema
 {timestamps: true},
        //adding collection
 {collection: 'User'}
 );

// encrypting password before saving
userSchema.pre('save', async function(next){
    //saving the encryted password to the database
   if(!this.isModified('password')){
       next()
   }
   this.password = await bcrypt.hash(this.password, 10);
});

//to compare and verify password 
userSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
}

// get the token and put to the cookies with expiration time of 3600 seconds
userSchema.methods.jwtGenerateToken = function(){
    return jwt.sign({id: this.id}, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}

//exporting the user schema
module.exports = mongoose.model("User", userSchema);