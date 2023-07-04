const User = require("../Model/User")

exports.register = async(req,res) => {
    try {
        const {firstname , name , email , password } = req.body;
        const foundUser = await User.findOne({email})
    if (foundUser) {
      return res.status(400).send({errors : [{ msg : "email deja utilisé..."}]});
}
   const newUser = new User ({...req.body})
   await newUser.save()

   res.status(200).send({success : [{msg : "inscription avec succes..."}] , user : newUser})

} catch (error) {
     res.status(400).send({errors : [{msg : "try again"}]})
    }
}