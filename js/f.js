class Alumno{
	constructor(nombre,apellido,dni){
		this.nombre = nombre.toUpperCase();
		this.apellido = apellido;
		this.dni = dni;
	}
}

function start(){
	const titulo = document.getElementById("titulo");
titulo.innerHTML = `<h1>Sistema Escolar</h1>`;
const botonAgregarAlumno = document.createElement("button");
botonAgregarAlumno.innerHTML = "Agregar Alumno";
botonAgregarAlumno.addEventListener("click", () => {
	agregarAlumno();
})
titulo.appendChild(botonAgregarAlumno);
}

function agregarAlumno(){
	let cantidad = prompt("Cuantos desea cargar?");
		while(cantidad != 0){
			let alumnoNuevo = new Alumno(prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el DNI"));
			alumnos.push(alumnoNuevo);
			cantidad--;
			}
	const contenedorDeAlumnos = document.getElementById("principal");
	alumnos.forEach(alumno => {
		const divAlumno = document.createElement("div");
		divAlumno.classList.add("alumno");
		divAlumno.innerHTML =  `
			<img src="../img/alumno.jpg" alt="Alumno">
			<h3>${alumno.nombre}</h3>
			<h4>${alumno.apellido}</h4>
			<p>${alumno.dni}</p>
		`;
		contenedorDeAlumnos.appendChild(divAlumno);
		
	})
	alumnos.splice(0, alumnos.length);				
}
const alumnos = [];

start();