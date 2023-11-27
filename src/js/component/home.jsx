import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [tarea, setTarea]= useState("")

const [ lista, setLista]=useState([])

useEffect(()=>{
	// crearUsuario()
	obtenerListaTareas()
},[])

const crearUsuario=async()=>{
	const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/freddy",{
		method:"POST",
		body:JSON.stringify([]),
		headers:{"Content-Type":"application/json"}
	})
	const data= await response.json()
	console.log(data)
}

	const obtenerListaTareas=async()=>{

		try{
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/freddy")
			const data= await response.json()
			console.log(data)
			setTarea(data)
		}catch(error){
			console.log(error)
		}
	}

	return (
		<div className="text-center container">
			<input className="form-control" type="text" value={tarea} onChange={(e)=>setTarea(e.target.value)} />
			<button className="btn btn-success">
				Agregar tarea
			</button>
		</div>
	);
};

export default Home;
