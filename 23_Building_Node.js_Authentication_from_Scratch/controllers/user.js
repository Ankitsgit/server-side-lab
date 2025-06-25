const User =require("../models/user");

const { v4: uuidv4 } = require('uuid');
const{setUser} =require("../service/auth");



async function handleUserSignup(req,res){
    const{name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/");
}


async function handleUserLogin(req ,res){
    const { email , password} = req.body;

    const user = await User.findOne({email , password});
    if(!user) return res.render("login" , {
        error:"Invalid Username or Password",
    });

    // if all is correct create session id for user 
    const sessionId =uuidv4();//this will create session id 

    // story session id to with user object to find sessionId belong to which user
    // for this we make ../service /auth.js

    setUser(sessionId,user);

    res.cookie("uuid",sessionId); 


    return res.redirect("/");
    
}

module.exports = {
    handleUserSignup,
    handleUserLogin,

};
