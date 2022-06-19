let init = 1;
let i = 0;
console.log('Bienvenido al Sistema EscolAR');
while (init === 1) {
	init = parseInt(prompt('Ingrese 1 si desea cargar alumno, sino ingrese 0 para salir'));
	if (init === 1) {
			console.log('Total de Alumnos:', i);
			console.log('Ingresando Nuevo Alumno...');
			let nombre = prompt('Ingrese el Nombre del Alumno');
			let apellido = prompt('Ingrese el Apellido del Alumno');
			let dni = prompt('Ingrese el DNI del Alumno');
			i = i + 1;
			console.log('Alumno Ingresado')
			console.log('Alumno N°: ',i);
			console.log('Nombre: ', nombre);
			console.log('Apellido: ', apellido);
			console.log('DNI: ', dni);
	}
	else if(init === 0){
		console.log('Procesando...');
	}
	else{
		console.log('Porfavor ingrese un valor correcto');
		init = 1;
	}
}
console.log('Saliendo...');
