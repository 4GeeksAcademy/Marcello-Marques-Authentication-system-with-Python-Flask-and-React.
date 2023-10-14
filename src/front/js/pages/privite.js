import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Router, Link } from "@reach/router";


export const Privite = () => {
    const [name,setName] = useState("")

    const { store, actions } = useContext(Context);
    
	return (
        <div>
            <p>Hello {store.user.name} !!!</p>
            <Link to="/">
            <button onClick={()=> {
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