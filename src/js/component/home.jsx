import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState(["lavar el carro", "ir al cine"])

	const handleInput = (e) => {
		let texto = e.target.value
		if (e.keyCode == 13) {
			setTarea(texto)
			//Una primera aproximación para agregar a la lista es usando una variable auxiliar
			//let tempArr = lista.slice() //copia de arreglo por valor
			//tempArr.push(texto)
			//setLista(tempArr)

			//Una segunda aproximación es usando el operador spread ...
			setLista([...lista, texto])
		}
	}

	const deleteTask = (index) => {
		let tempArr = lista.slice() //copiar el estado lista en una variable auxiliar
		tempArr = tempArr.filter((item, index2) => { return index2 != index })
		setLista(tempArr)
	}

	return (
		<>  <h1>Todos</h1>
			<div className="paper "> 
					<ul>
						<input className="texto no-border"style={{width: "50rem"}} placeholder="What needs to be done"
								onKeyUp={
									(e) => { handleInput(e) }
								} />
						{
							lista && lista.length > 0 ?
								<>{
									lista.map((item, index) => {
										return <li className="d-flex bd-highlight" key={index}>

											<p className="p-2 w-100 bd-highlight">{item}</p> 
											
											<button className="boton p-2 flex-shrink-1 bd-highlight no-border" type="button" onClick={e => { deleteTask(index) }}>
											X
											</button>
										</li>
									})
								}</>
								: "0 Task"
						}
					</ul>
				</div >
		</>
	);
};

export default Home;
