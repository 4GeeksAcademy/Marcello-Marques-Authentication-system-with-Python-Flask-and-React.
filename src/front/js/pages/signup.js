import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Router, Link } from "@reach/router";
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
                <Link to="/login">
					<button
						onClick={()=> {
						actions.signUp(name, email, password)
						}
					}
					>SignUp
					</button>
				</Link>
		</div>
	);
};