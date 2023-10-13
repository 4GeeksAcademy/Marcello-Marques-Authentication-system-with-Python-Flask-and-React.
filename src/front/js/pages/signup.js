import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
    const { store, actions } = useContext(Context);

	return (
		<div> 
				<input
					type="text"
					placeholder="Name:" 
					value={name} 
					onChange={(e)=> setName(e.target.value)}
				/>
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
					onClick={()=> {
					actions.signUp(name, email, password)
					}
				}
				>SignUp
				</button>
		</div>
	);
};