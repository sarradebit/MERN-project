const express = require('express') ;
const Contact = require ("../Model/Contact")
const cloudinary = require("../Middlewares/cloudinary");
const upload = require("../Middlewares/multer");
const router = express.Router ();

// router.get("/test",(req,res)=>{
//     res.send("api is running")
// })

router.post('/add-contact',upload.single("image") , async(req,res) => {
try {
    const result = await cloudinary.uploader.upload(req.file.path);
    let newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone : req.body.phone,
        profile_img : result.secure_url,
        cloudinary_id: result.public_id,
    });
    await newContact.save();
    res.status(200).send({msg : "contact added successfully !" , newContact})
} 
catch (error) { 
    res.status(400).send({msg : "can not add this contact" , error})
}
}) 
router.get('/all-user' , async (req, res) => {
   
try {
    const listContacts = await Contact.find()
    res.status(200).send({msg : " contact list " , listContacts})
} catch (error) {
    res.status(400).send({msg : "can not get list "})
}
})

router.delete("/:_id", async (req , res) => {
    try {
       
        let contact = await Contact.findById(req.params._id);
        await cloudinary.uploader.destroy(contact.cloudinary_id);
        await contact.deleteOne();

        res.status(200).send({msg : "contact is deleted"})
    } catch (error) {
        res.status(400).send({msg : "can not delete this post" , error})
    }
})

router.put("/:_id" ,upload.single("image"), async (req, res) => {
    try {
        let contact = await Contact.findById(req.params._id);
        await cloudinary.uploader.destroy(contact.cloudinary_id);
        const result = await cloudinary.uploader.upload(req.file.path);

        const data = {
            name: req.body.name||  contact.name,
            email: req.body.email || contact.email,
            phone: req.body.phone || contact.phone,
            profile_img: result.secure_url || contact.profile_img,
            cloudinary_id: result.public_id || contact.cloudinary_id,
          };
          updatedContact = await Contact.findByIdAndUpdate(req.params._id, data, {
            new: true
          });
        res.status(200).send({msg : "contact updated" , updatedContact})
    } catch (error) {
        res.status(400).send({msg : "can not update this contact" , error})

    }
} )

router.get ("/:_id" , async (req, res) => {
    try {
        const contactToGet = await Contact.findOne({_id : req.params._id})
        res.status(200).send({msg : "contact to get " , contactToGet})
    } catch (error) {
        res.status(400).send({msg: "can not get this contact" , error})  
    }
})

module.exports = router ;