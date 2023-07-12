const User = require("../Model/User")
const bcrypt = require ("bcrypt")
const jwt = require ("jsonwebtoken")

exports.register = async(req,res) => {

    try {
        const {firstname , name , email , password } = req.body;
        const foundUser = await User.findOne({email});
    if (foundUser) {
      return res.status(400).send({errors : [{ msg : "email deja utilisé..."}]});
}
   const saltRounds = 10 ;
   const hashPassword = await bcrypt.hash(password , saltRounds);
   
   const newUser = new User ({...req.body});
   newUser.password = hashPassword;
   
   await newUser.save()

   const token = jwt.sign({
    id : newUser._id
   } , process.env.SCRT_KEY , {expiresIn : "48h"})

   res.status(200).send({success : [{msg : "inscription avec succes..."}] , user : newUser , token})

} catch (error) {
     res.status(400).send({errors : [{msg : "try again"}]})
    }
}
exports.login = async (req,res) => {
    try {
      const {email, password } = req.body;
      const foundUser = await User.findOne ({email})
      if (!foundUser) {
        return res.status(400).send({errors : [{msg : "utilisateur non trouvé" }]})
      }
      const checkPassword = await bcrypt.compare(password , foundUser.password)
      if(!checkPassword) {
        return res.status(400).send({errors : [{msg : "veuillez verifier votre mot de passe "}]})
      }
      const token = jwt.sign({
        id : foundUser._id
      },process.env.SCRT_KEY , { expiresIn : "48h"})
      res.status(200).send({success : [{msg : "welcome back"}] , user : foundUser , token})
      
    } catch (error) {
        return res.status(400).send({errors: [{msg : "utilisateur verifier vos informations"}]})
        
    }
}

exports.updateUserPassword = async (req,res) => {
  const { oldPassword , password , confirmpassword} = req.body;
  const {_id}= req.params;
  try {
    // get user
    const user = await User.findById(req.params);
    if (!user) {
      return res.status(400).send("user is not found")}
    //validate old password
    const isValidPassword = await bcrypt.compare(oldPassword , user.password )

    if (!isValidPassword) {
      return res.status(400).send({errors : [{msg : "veuillez verifier votre ancien mot de passe"}]});
    }
   if (password !== confirmpassword)
   {
    return res.status(400).send({errors : [{msg : "veuillez verfifer votre nouveau mot de passe "}]});
   }
   //hash new password
   const hashedPassword = await bcrypt.hash(password, 10);
   
   //update user's password

    user.password = hashedPassword;
    const updatedUserPassword =await user.save();

    return res.json({success : [{msg :"votre mot de passe a eté modifié avec succes"}] , user : updatedUserPassword})
    
  
  
  } catch (error) {
    return res.status(400).send({errors : [{msg : "veuillez verifier ultérieurement"}]})
  }
};