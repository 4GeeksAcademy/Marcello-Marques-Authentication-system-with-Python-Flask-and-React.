import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link, useHistory } from "react-router-dom";
import "../../styles/home.css";
import { navigate } from "@reach/router";



export const Home = () => {
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const { store, actions } = useContext(Context);
	console.log("STORE***",store)
	useEffect(()=>{
		if(store.token &&	store.token != "" && store.token != "undefined" && store?.token.length > 0){
			actions.getUser()
			//navigate("/demo")			
		}
	},[store.token])
	return (
		<div className="text-center mt-5">
			{store.token &&	store.token != "" && store.token != "undefined" && store?.token.length > 0 ?
			<div>
				<p>Hello {store.user.name} !</p>
			</div>
			:
			"Login"
			}
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
		</div>
	);
};
