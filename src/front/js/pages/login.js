import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { navigate } from "@reach/router";

export const Login = () => {
    const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
    const { store, actions } = useContext(Context);

    useEffect(()=>{
		if(store.token &&	store.token != "" && store.token != "undefined" && store?.token.length > 0){
			actions.getUser()
			navigate("/private")			
		}
	},[store.token])

	return (		
		<div className="text-center mt-5">
			<h2>Enter your email and password...</h2>
            <input
				type="text"
				placeholder="Email:"
				value={email}
				onChange={(e)=> setEmail(e.target.value)}
			/>
            <input
                type="password"
                placeholder="Password:"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
			<button 
				className="btn-btn"
				onClick={()=>{
				actions.login(email, password)						
				}
			}
				>Login
			</button>						
		</div>
	);
};