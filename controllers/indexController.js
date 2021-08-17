const Contact =  require("../models/Contact");
let sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

exports.getHomePage = (req,res,next)=>{
    res.end("welcome to resume app");
}

exports.contactMe = async(req, res, next)=>{
    const contactInfo =  req.body;
    console.log(contactInfo)
    if(contactInfo == null){
        console.log("nothing in request body");
        res.status(400).json({status: "fail", message: "bad request!"});
    }
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
    })
    try{
        const newContact = await contact.save();

        const protocol = req.protocol;
        const host = req.get("host");
        const link = `${protocol}://${host}/contact/${newContact._id}`;
        const emailContent = `Hi ${name}, you have just contacted Theodre. And here is the link to your response`;
    
    }
    catch(error){

    }
    

    
}