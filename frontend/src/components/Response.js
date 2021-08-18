import React, { useEffect,useState } from 'react';
import {Link} from "react-router-dom"
import M from 'materialize-css/dist/js/materialize.min.js';


const Error = () => {
    const [userResponse, setResponse] = useState({name:"", email:"", message:""});
    const [error, setError] = useState("");

    useEffect(() => {
        const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
        fetch("/contact/" + id)
            .then(response => {
                return response.json();
            })
            .then(result => {
                if (result.status === "fail") {
                    M.toast({ html: result.message, classes: "red white-text" })
                    setError(result.message)
                    
                } else {
                    M.toast({ html: result.message, classes: "green white-text" })
                    setResponse(result.contact)
                }
            })
    }, [userResponse])
    if (error) {
        return(
            <p className="red-text">{error}</p>
        )
    } else {
        return (
            <div className="center-align">
                <h1>Hi! 😎</h1>
                <p>Thanks for contacting Theodore. Below is your response</p>
                <div className="section white">
                    <div className="row container">
                        <form>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="icon_prefix" type="email" className="validate" disabled value={userResponse.email} />
                                </div>
                                <div className="input-field col s12">
                                    <input id="icon_prefix" type="text" className="validate" disabled value={userResponse.name}/>
                                </div>
                                <div className="input-field col s12">
                                    <textarea id="textarea1" className="materialize-textarea" disabled value={userResponse.message}></textarea>
                                </div>
                            
                            </div>
                        </form>
                        <Link to="/" className="btn grey">Home<i className="fa fa-home"></i></Link> 
                    </div>
                </div>

            </div>
        )
    }
}

export default Error;