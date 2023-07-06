const {check , validateResult, validationResult} = require ("express-validator")

exports.registerValidator = () => [
check("firstname" , "veuillez inséerer votre prénom!").not().isEmpty() , 
check("name" , "veuillez insérer votre nom!").not().isEmpty(),
check("email", "veuillez insérer un email valide!").isEmail(),
check("password" , "veuillez insérer votre password!").isLength({min : 6})


]

exports.loginValidator = () => [
    check("email", "veuillez insérer votre email").isEmail(),
    check("password" , "veuillez insérer votre password!").isLength({min : 6})  
]

exports.validation = (req,res,next) => {
const errors = validationResult(req)
if(!errors.isEmpty()) {
    return res.status(400).json({errors : errors.array()})
}
next()
}