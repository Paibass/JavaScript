class Alumno{
	constructor(nombre,apellido,dni){
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
	}
}

const alumnos = [
	{ nombre : "Joaquin", apellido: "Paiva", dni: "45478554"}
];

console.log("Bienvenido al sistema EscolAR");
let start = "1";
while (start == "1") {
	let decision = prompt("Si desea cargar a un alumno, Ingrese 1. Si visualizar los alumnos cargados ingrese 2. Si desea salir ingrese 3.");
		if (decision == "1") {
			let cantidad = prompt("Cuantos desea cargar?");
				while(cantidad != 0){
					let alumnoNuevo = new Alumno(prompt("Ingrese el nombre"), prompt("Ingrese el apellido"), prompt("Ingrese el DNI"));
					alumnos.push(alumnoNuevo);
					cantidad--;
				}
		}
		else if( decision == "2"){
			for (const estudiante of alumnos){
				console.log(estudiante.apellido);
				console.log(estudiante.nombre);
				console.log(estudiante.dni);
				console.log("--------------");
			}
		}
		else if( decision == "3"){
			start = "0";
		}
		else {
			alert("Porfavor Ingrese un valor correcto");
		}
}
console.log("Saliendo");	