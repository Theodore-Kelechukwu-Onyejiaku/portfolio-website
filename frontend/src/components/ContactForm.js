import React,{useState} from "react";
import M from 'materialize-css/dist/js/materialize.min.js'


const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleEmailInput = (e)=>{
        setEmail(e.target.value)
    }

    const handleNameInput = (e) =>{
        setName(e.target.value);
    }

    const handleMessage = (e) =>{
        setMessage(e.target.value)
    }


    const submit =(e)=>{
        setIsSending(true)
        setSuccess("");
        setError("")
        e.preventDefault();
        fetch("/contact", {
            method: "POST",
            body: JSON.stringify({
                email,name,message
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response =>{
            return response.json()
        })
        .then(result =>{
            console.log("The sttus is "+result.status)
            if(result.status === "fail"){
                M.toast({ html: result.message, classes: "red white-text" })
                setIsSending(false)

            }else{
                M.toast({ html: result.message, classes: "green white-text" })
                setSuccess(result.message);
                setIsSending(false)

            }
        })
        .catch(error =>{
            M.toast({ html: error.message, classes: "red white-text" })
            setError(error.message);
            setIsSending(false)
        })
    }
    return (
        <form onSubmit={submit}>
            <h6 className="red-text">{error}</h6>
            <h6 className="green-text">{success}</h6>

            <div className="row">
                <div className="input-field col s12">
                    <input id="icon_prefix" type="email" className="validate" required value={email} onChange={handleEmailInput}/>
                    <label htmlFor="icon_prefix">Email</label>
                </div>
                <div className="input-field col s12">
                    <input id="icon_prefix" type="text" className="validate" required value={name} onChange={handleNameInput}/>
                    <label htmlFor="icon_prefix">Full Name</label>
                </div>
                <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" required value={message} onChange={handleMessage}></textarea>
                    <label for="textarea1">Message</label>
                </div>
                {
                    isSending ? <button className="btn disabled">Sending...</button>
                    :
                    <button type="submit" className="btn" >Send</button>

                }
            </div>
        </form>
    )
}
export default ContactForm;