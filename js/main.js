class Alumno{
	constructor(nombre,apellido,dni){
		this.nombre = nombre.toUpperCase();
		this.apellido = apellido;
		this.dni = dni;
	}
}

function agregarAlumno(){
	let cantidad = prompt("Cuantos desea cargar?");
		while(cantidad != 0){
			let alumnoNuevo = new Alumno(prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el DNI"));
			alumnos.push(alumnoNuevo);
			cantidad--;
			}
}

function mostrarAlumnos(){
	for (const estudiante of alumnos){
				console.log(estudiante.apellido);
				console.log(estudiante.nombre);
				console.log(estudiante.dni);
				console.log("--------------");
			}
}

function buscarAlumno(){
		for (const estudiante of alumnos){
				console.log(estudiante.nombre);
			}	
	let busca = prompt("Ingrese el nombre del alumno").toUpperCase();
	const busqueda = alumnos.find((el) => el.nombre === busca);
	console.log(busqueda);
}

function borrarAlumno(){
	for (const estudiante of alumnos){
			console.log(estudiante.nombre);
		}
	const nombres = alumnos.map((el) => el.nombre)	
	let borrar = prompt("A que alumno desea borrar").toUpperCase();
	let index = nombres.indexOf(borrar)
		if (index != -1) {
			alumnos.splice(index,1)
			console.log("Alumno Borrado");
		}
		else{
			console.log("No existe el alumno");
		}	
}

const alumnos = [];
let start = "1";
let login = true;
while (start == "1") {
	console.log("Bienvenido. Por Favor Identifiquese.")
	let usuario = prompt("Sos Alumno o Profesor").toUpperCase();
	if(usuario == "ALUMNO"){
		login = true;
		console.log("Bienvenido Alumno");
		while(login){
		let seleccion = prompt("Ingrese un valor \n1)Ver tus notas \n2)Salir");
		if (seleccion == "nota1") {
			let nota1 = Math.ceil(Math.random() * 9 + 1);
			let nota2 = Math.ceil(Math.random() * 9 + 1);
			let nota3 = Math.ceil(Math.random() * 9 + 1);
			let promedio = ((nota1 + nota2 + nota3) / 3);   
			console.log("Tus notas son:\nNota 1:",nota1 +"\n"+"Nota 2:",nota2 +"\n"+"Nota 3:",nota3 +"\n"+"Promedio:",promedio);
		}
		else if (seleccion == "2") {
			login = false;
			console.log("Saliendo...");
		}
	}
	}
	else if (usuario == "PROFESOR"){
		login = true;
		console.log("Bienvenido Profesor");
		while (login) {
			let seleccion = prompt("Ingrese un Valor \n1)Agregar Alumno \n2)Borrar Alumno \n3)Buscar Alumno \n4)Mostar todos los Alumnos \n5)Salir");
			if (seleccion == "1") {
				agregarAlumno();
			}
			else if (seleccion == "2") {
				borrarAlumno();
			}
			else if (seleccion == "3") {
				buscarAlumno();
			}
			else if (seleccion == "4"){
				mostrarAlumnos();
			}
			else if (seleccion == "5") {
				login = false;
				console.log("Saliendo...");
			}
			else{
				console.log("Ingrese un valor correcto");
			}
		}
	}
	else{
		alert("USUARIO INVALIDO");
		console.log("Saliendo...");
	}

}