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
        const emailContent = `Hi ${req.body.name}, you have just contacted Theodore. Below is the link to your response \n`;
    
        const msg = {
            to: newContact.email,
            from: "theodore.onyejiaku.g20@gmail.com", // Use the email address or domain you verified above
            subject: "Resume Response",
            text: "Resume Response",
            html: `<body>
                      <h1  style='font-family:Tangerine, cursive'>Message from Theodore 🖐😎</h1>
                          <p>${emailContent}</p>
                          <p></p>
                          <button style="background-color:#ee6e73;border:none;outline:none;color:white;padding:2%;cursor:pointer"><a href="${link}">Verify Account</a></button>
                      <footer></footer>
                  </body>
                  `
          };
          sgMail.send(msg).then(
            async (resp) => {
              console.log("Sent Successfully")
              console.log(link);
              return res.status(200).json({status: "ok", message: "Sent successfully!", contact: newContact});
            },
            (error) => {
              console.error(error.message);
              return res.status(500).json({status: "fail", message:"Something went wrong"})
            }
          );
    }
    catch(error){
        res.status(500).json({status: "fail", message: error.message})
    }
}

exports.getContactResponse = async(req, res, next)=>{
    const contactId = req.params.contactId;
    try {
        const contact = await Contact.findById(contactId);
        if(!contact){
            res.status(404).json({status: "fail", message:"Could not find response"});
        }
        res.status(200).json({status: "ok", message: "response found", contact})
    } catch (error) {
        res.status(500).json({status: "fail", message: error.message})
    }
}