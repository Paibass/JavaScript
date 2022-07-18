class Alumno{
	constructor(nombre,apellido,dni){
		this.nombre = nombre.toUpperCase();
		this.apellido = apellido;
		this.dni = dni;
	}
}

class Materia{
	constructor(nombre,nota1,nota2,nota3){
		this.nombre = nombre;
		this.nota1 = Number(nota1);
		this.nota2 = Number(nota2);
		this.nota3 = Number(nota3);
	}
}

function login(){
	const titulo = document.getElementById("titulo");
	titulo.innerHTML = `<h1>Sistema Escolar</h1>`;
	const login = document.getElementById("contenedor");
	const divLogin = document.createElement("div");
	divLogin.classList.add("login");
	divLogin.innerHTML = `
		<h2>Sistema Escolar</h2>
		<p>Alumno o Profesor</p>
		<input id ="usuario" type="text">
	`;
	const botonLogin = document.createElement("button");
	botonLogin.innerHTML = "Ingresar";
	botonLogin.classList.add("ingreso");
	botonLogin.addEventListener("click", () => {
		comprobarLogin();
	})
	login.appendChild(divLogin);
	divLogin.appendChild(botonLogin);	
}

function comprobarLogin(){
	let input = document.getElementById("usuario").value;
	input = input.toUpperCase();
	if (input == "ALUMNO"){
		loginAlumno();
		Toastify({
        text: "Acceso Concedido",
        duration: 1000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();

	}
	else if(input == "PROFESOR"){
		loginProfesor();
		Toastify({
        text: "Acceso Concedido",
        duration: 1000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
	}
	else{
			Swal.fire({
		  text: "Usuario Incorrecto",
		  icon: "error",
		  buttons: false,
		  timer: 1000,
		});
	}	
}

function logout(){
	const botonLogout = document.createElement("button");
	botonLogout.innerHTML = "Salir";
	botonLogout.addEventListener("click", () =>{
		let borrar = document.getElementById("contenedor");
		borrar.innerHTML = "";
		login();
	})
	titulo.appendChild(botonLogout);	
}

function loginAlumno(){
	logout();
	let loginAlumno = document.getElementById("contenedor");
	loginAlumno.innerHTML = "";
	if(materias.length > 0){
		const materiaContenedor = document.createElement("div");
		materiaContenedor.classList.add("materiaContenedor");
		loginAlumno.appendChild(materiaContenedor);
		materias.forEach(materia => {
			const divMateria = document.createElement("div");
			divMateria.classList.add("materia");
			divMateria.innerHTML = `
				<h3>${materia.nombre}</h3>
				<div>
				<p>${materia.nota1}</p>
				<p>${materia.nota2}</p>
				<p>${materia.nota3}</p>
				</div>
			`;
		materiaContenedor.appendChild(divMateria);
		})
	}
	else{
		const materiaContenedor = document.createElement("div");
		materiaContenedor.classList.add("error");
		materiaContenedor.innerHTML = "<h3>ERROR! Tus notas no estan cargadas</h3>"
		loginAlumno.appendChild(materiaContenedor);
	}
	}

function loginProfesor(){
	let loginProfesor = document.getElementById("contenedor");
	loginProfesor.innerHTML = "";
	const botonAgregarAlumno = document.createElement("button");
	botonAgregarAlumno.innerHTML = "Agregar Alumno";
	botonAgregarAlumno.addEventListener("click", () => {
		agregarAlumno();
	})
	const botonAgregarNotas = document.createElement("button");
	botonAgregarNotas.innerHTML = "Agregar Notas";
	botonAgregarNotas.addEventListener("click", () => {
		agregarNotas();
	})
	titulo.appendChild(botonAgregarNotas)
	titulo.appendChild(botonAgregarAlumno);
	logout();
}

function agregarAlumno(){
	let cantidad = prompt("Cuantos desea cargar?");
		while(cantidad != 0){
			let alumnoNuevo = new Alumno(prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el DNI"));
			alumnos.push(alumnoNuevo);
			Toastify({
        text: "Alumno Agregado",
        duration: 1000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
			cantidad--;
			}
	const contenedorDeAlumnos = document.getElementById("contenedor");
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

function agregarNotas(){
	let cantidad = prompt("Cuantas materias va a cargar");
		while (cantidad != 0) {
			let materiaNueva = new Materia(prompt("Ingrese el Nombre de la Materia"), prompt("Ingrese la primera nota"), prompt("Ingrese la segunda nota"), prompt("Ingrese la tercera Nota"));
			materias.push(materiaNueva);
			Toastify({
        text: "Materia Agregada",
        duration: 1000,
        gravity: 'top',
        position: 'right',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
			cantidad--;
		}
}	
const alumnos = [];
const materias = [];


login();