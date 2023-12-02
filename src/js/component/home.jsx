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

useEffect(()=>{
	actualizarListaTareas()
},[lista])



const crearUsuario=async()=>{
	const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/freddy",{
		method:"POST",
		body:JSON.stringify([]),
		headers:{"Content-Type":"application/json"}
	})
	const data= await response.json()
	console.log(data)
}

	const actualizarListaTareas=async()=>{

		try {
				
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/freddy",{
		method:"PUT",
		body:JSON.stringify(lista),
		headers:{"Content-Type":"application/json"}
	})
		const data= await response.json()
		console.log(data)

		} catch (error) {
			
			console.log(error)

		}


	}




	const obtenerListaTareas=async()=>{

		try{
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/freddy")
			const data= await response.json()
			console.log(data)
			setLista(data)
		}catch(error){
			console.log(error)
		}
	}

	function lista_de_tareas(e){

		e.preventDefault()

		setLista([...lista,{"label":tarea,"done":false}])

		setTarea("")

	}


	function eliminar(id){

		let arrayNew=[]

		arrayNew=lista.filter((item,index)=>{

			if(index!=id){

				return item
			}
		})
	
	setLista(arrayNew)

	}



	return (
		<div className="text-center container">
			<br />

			<input type="text" className="form-control" value={tarea} onChange={(e)=> setTarea(e.target.value)} />

			<button className="btn btn-dark" onClick={(e)=> lista_de_tareas(e) }>
				Tarea
			</button>
			<br />

			<div>
				<ul className="list-group">

					{lista.map((item,id)=>(
						<li className="list-group-item" key={id}>

							{item.label}
							<button className="btn btn-danger float-end" onClick={()=>eliminar(id)}>
								X
							</button>

						</li>
					))}

				</ul>
			</div>

			<p>
				tareas pendientes: {lista.length}
			</p>
		</div>
	);
};

export default Home;
