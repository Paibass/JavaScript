class Alumno{
	constructor(nombre,apellido,dni){
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
	}
}

let tipoUsuario;
let nombreUsuario;

document.getElementById("formLogin").addEventListener("submit", comprobarLogin);

function comprobarLogin(e){
	e.preventDefault();
	tipoUsuario = document.getElementById("user").value.toUpperCase();

	tipoUsuario == "PROFESOR" ? LoginProfesor() : alert("Escribalo Correctamente")
}

function LoginProfesor(){
	const contenedorFormularios = document.getElementById("contenedor");

	contenedorFormularios.innerHTML =
		`<h3>Identificate Profesor</h3>
		<form id="formulario-profesor">
			<input type="text" id="nombre" placeholder="Apellido">
			<button type="submit">Ingresar</button>
		</form>`;

		
	document.getElementById("formulario-profesor").addEventListener("submit", panelProfesor);
}

function panelProfesor(){
	nombreUsuario = document.getElementById("nombre").value;

	let bienvenida = document.getElementById("titulo");
	const avatar = document.createElement("p");
	const botonAgregarAlumno = document.createElement("button");
	botonAgregarAlumno.innerText = "Agregar Alumno";
	botonAgregarAlumno.addEventListener("click", agregarAlumno);
	avatar.innerHTML=`Hola, ${nombreUsuario}`;
	bienvenida.appendChild(avatar);
	bienvenida.appendChild(botonAgregarAlumno);

	let listadoAlumnos = document.getElementById("contenedor");
	const alumnos = JSON.parse(localStorage.getItem(nombreUsuario));

	alumnos == null ? listadoAlumnos.innerHTML = "<h3>No tienes alumnos en tu camada. Por Favor cárgalos</h3>" : mostrarAlumnos(alumnos); 

}

function mostrarAlumnos(alumnos){
	let listadoAlumnos = document.getElementById("contenedor");
	listadoAlumnos.innerHTML = "";
	let ul = document.createElement("ul");
	listadoAlumnos.appendChild(ul);

	alumnos.forEach(alumno => {
		let li = document.createElement("li")
		li.innerHTML = `${alumno.nombre} ${alumno.apellido} - ${alumno.dni}`
		const botonBorrar = document.createElement("button");
		botonBorrar.innerText = "Borrar";
		botonBorrar.addEventListener("click", () => {
			borrarAlumno(alumno);
		})
		li.appendChild(botonBorrar);
		ul.appendChild(li);
	})
}

function agregarAlumno(){
	const contenedorFormularios = document.getElementById("contenedor");

	contenedorFormularios.innerHTML = 
		`<h3>Agregar Alumno</h3>
		<form id="formAgregarAlumno">
			<input type="text" id="nombre" placeholder="Nombre">
			<input type="text" id="apellido" placeholder="Apellido">
			<input type="text" id="dni" placeholder="DNI">
			<button type="submit">Agregar Alumno</button>
		</form>
		`
	document.getElementById("contenedor").addEventListener("submit", pushAlumno);	
}

function pushAlumno(e){
	e.preventDefault();
	const nombre = document.getElementById("nombre").value;
	const apellido = document.getElementById("apellido").value;
	const dni = document.getElementById("dni").value;

	const alumno = new Alumno(nombre, apellido, dni);

	const alumnosEnLS = JSON.parse(localStorage.getItem(nombreUsuario));

	 if (alumnosEnLS == null){
	 	localStorage.setItem(nombreUsuario, JSON.stringify([alumno]));
	 	mostrarAlumnos([alumno]);
	 }
	 else{
	 	alumnosEnLS.push(alumno);
	 	localStorage.setItem(nombreUsuario, JSON.stringify(alumnosEnLS));
	 	mostrarAlumnos(alumnosEnLS);
	 }	
	 e.target.reset();
}

function borrarAlumno(alumno){
	const alumnosEnLS = JSON.parse(localStorage.getItem(nombreUsuario));
	const borrado = alumnosEnLS.filter(pupilo  => pupilo.nombre != alumno.nombre);
	localStorage.setItem(nombreUsuario, JSON.stringify(borrado));
	mostrarAlumnos(borrado);
}