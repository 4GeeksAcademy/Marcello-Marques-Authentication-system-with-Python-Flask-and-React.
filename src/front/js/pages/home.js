import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Router, Link } from "@reach/router";
import "../../styles/home.css";
import { navigate } from "@reach/router";



export const Home = () => {
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const { store, actions } = useContext(Context);
	useEffect(()=>{
		if(store.token &&	store.token != "" && store.token != "undefined" && store?.token.length > 0){
			actions.getUser()			
		}
	},[store.token])
	return (
		<div className="text-center mt-5">
			<div>
			<h2>Welc😊me, press <strong>"signup"</strong> or <strong>"login"</strong>...</h2>
			</div>		
			<div>				
				<Link to="/signup">
					<button	className="signup-button">SignUp</button>
				</Link>
				<Link to="/login">
					<button className="login-button">Login</button>
				</Link>				
			</div>
		</div>
	);
};
