import React from "react";
import './styles.css';
export default function Login(){
    return(
        <div className="form-container">
            <form className="form-login">
                        <h1>Login</h1>
                        <div>
                            <input typeof="text" placeholder="Username" name="user" className="input-form"></input>    
                        </div>
                        <div>
                            <input type="password" placeholder="Password" name="password"  className="input-form">
                            </input>
                        </div>
                        <div>
                            <button className="form-button">
                                Submit
                            </button>
                        </div>
                    </form>
        </div>
        
    );
}