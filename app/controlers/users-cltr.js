const User = require('../models/user-model')
const userCltr ={}

userCltr.register =(req,res) =>{
res.send('user register');
}

userCltr.login =() =>{

}

module.exports =userCltr