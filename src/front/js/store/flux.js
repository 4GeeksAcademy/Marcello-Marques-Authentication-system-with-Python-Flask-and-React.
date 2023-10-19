const getState = ({ getStore, getActions, setStore }) => {
	let backend=process.env.BACKEND_URL
	return {
		store: {
			message: null,
					token:[],
						user:[],			
		},
		actions: {

			signUp:(name,email,password) => {
				fetch(backend+"api/signup",{ 
					method:'POST',
					headers:{'Content-Type':'application/json'},
					body:JSON.stringify({name:name,email:email,password:password})
				}).then((resp)=>resp.json())
			},
			logout:()=>{
				sessionStorage.removeItem("token")
				setStore ({token:null})

			},

			updateStoreFromStorage:()=>{
				const token=sessionStorage.getItem("token")
				const user=sessionStorage.getItem("user")
				let userObject=JSON.parse(user)
				if(token && token != "" && token != "undefined" ){
					setStore({token:token})
					setStore({user:userObject})
				}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			login:(email,password) => {
				fetch(backend+"api/login",{
					method:'POST',
					headers:{'Content-Type':'application/json'},
					body:JSON.stringify({email:email,password:password})
				}).then((resp)=>resp.json())
				  .then((data)=>{
					sessionStorage.setItem("token",data.token)
				  setStore({token:data.token})
					}
				) 
			},

			getUser:()=> {
				const store = getStore();
				fetch(backend+"api/getuser",{
					method:'GET',
					headers:{
						'Content-Type':'application/json',
						Authorization:"Bearer " + store.token
					},

				}				
			)
				.then((resp)=>resp.json())
				.then((data)=>{
					let sessionDataString = JSON.stringify(data)
					sessionStorage.setItem ("user",sessionDataString)
					setStore({user:data})
				})
			}

		}
	};
};

export default getState;
