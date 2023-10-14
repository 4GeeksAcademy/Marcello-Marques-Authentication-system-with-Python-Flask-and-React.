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
			navigate("/privite")			
		}
	},[store.token])

	return (
		
		<div>
			<p>Hello {store.user.name} !!!</p>
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
            {store.token &&	store.token != "" && store.token != "undefined" && store?.token.length > 0 ? 
					<button onClick={()=> {
						actions.logout()
						setName("")
						setEmail("")
						setPassword("")
						}
					}
					>Logout
					</button>
					:
					<button
						onClick={()=>{
							actions.login(email, password)						

							}}
					>Login
					</button>
				}			
		</div>
	);
};