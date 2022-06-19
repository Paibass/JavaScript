class Alumno {
    constructor(nombre, edad, dni, adeuda) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
        this.dni = dni;
        this.adeuda = adeuda;
    }
}

class Notas {
	constructor(nota1, nota2, nota3){
		this.nota1 = nota1;
		this.nota2 = nota2;
		this.nota3 = nota3;
		this.prom;
	}
	promediar(){
		this.prom = Number((this.nota1 + this.nota2 + this.nota3) / 3);
		return "El promedio es de " + this.prom
	}
}

function nuevoAlumno() {
    let nombre = prompt("Ingrese el Nombre del Alumno");
    let edad = prompt("Ingrese la edad del alumno");
    let dni = prompt("Ingrese el dni del alumno");
    let adeuda = prompt("Adeuda materias? SI/NO:").toUpperCase();

    if (adeuda == "SI") {
        adeuda = true;
    } else {
        adeuda = false;
    }

    return new Alumno(nombre, edad, dni, adeuda);
}
let alumno1,alumno2,alumno3,alumno4,alumno5;
console.log("Bienvenido al sistema escolar:");
let i = prompt("Cuantos alumnos desea agregar? Maximo 5.");

switch (i) {
	case "1":
		alumno1 = console.log(nuevoAlumno());
		break;
	case "2":
		alumno1 = console.log(nuevoAlumno());
		alumno2 = console.log(nuevoAlumno());
		break;
	case "3":
		alumno1 = console.log(nuevoAlumno());
	    alumno2 = console.log(nuevoAlumno());
		alumno3	= console.log(nuevoAlumno());
		break;
	case "4":
		alumno1 = console.log(nuevoAlumno());
		alumno2 = console.log(nuevoAlumno());
		alumno3	= console.log(nuevoAlumno());
		alumno4 = console.log(nuevoAlumno());
		break;
	case "5":
		alumno1 = console.log(nuevoAlumno());
		alumno2 = console.log(nuevoAlumno());
		alumno3	= console.log(nuevoAlumno());
		alumno4 = console.log(nuevoAlumno());
		alumno5 = console.log(nuevoAlumno());
		break;
	default:
		console.log("Porfavor Maximo 5");			
}
let notas = '';
let cargarNotas = prompt("Desea cargar notas?").toUpperCase();
if(cargarNotas == "SI"){
	let nota = new Notas(Number(prompt("Nota 1")),Number(prompt("Nota 2")),Number(prompt("Nota 3")));
	notas = "Nota 1: "+nota.nota1+" "+"Nota 2: "+nota.nota2+" "+"Nota 3: "+nota.nota3;
	console.log(notas);
	let preguntar = prompt("Desear promediar las notas?").toUpperCase();
	if (preguntar == "SI"){
		console.log(nota.promediar());
	}
	}
else if(cargarNotas == "NO"){
	console.log("saliendo...");
	}
console.log("saliendo...");	

