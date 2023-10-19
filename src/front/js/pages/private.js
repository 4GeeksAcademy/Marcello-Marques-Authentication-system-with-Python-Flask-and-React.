import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Router, Link } from "@reach/router";


export const Private = () => {
    const [name,setName] = useState("")

    const { store, actions } = useContext(Context);
    
	return (
        <div className="text-center mt-5">
            {store.user.name?
            <div>
                <h2 className="smile"> {'Hello '+store.user.name+', welc😊me !!!'}</h2>
                <Link to="/">
                    <button 
                        className="signup-button" 
                        onClick={()=> {
                        actions.logout()
                        setName("")
                        setEmail("")
                        setPassword("")
                        }
                    }
                    >Logout
                    </button>
                </Link>
            </div>
            :
            <div>
                <h2 className="smile"> 🙁 Undefined user!!!</h2>
                <Link to="/signup">
					<button	className="signup-button">SignUp</button>
				</Link>
                <Link to="/login">
					<button className="login-button">Login</button>
				</Link>	
            </div>
        }           
        </div>
        )
    }