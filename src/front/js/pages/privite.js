import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Router, Link } from "@reach/router";


export const Privite = () => {
    const [name,setName] = useState("")

    const { store, actions } = useContext(Context);
    
	return (
        <div className="text-center mt-5">
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
        )
    }