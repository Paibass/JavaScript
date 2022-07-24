const URL = '../json/profes.json'

function renderProfesores( profe ) {
	profe.forEach( prof => {
		document.write(`<li>${prof.nombre} - DNI: ${prof.dni}</li>`)
	});
}

fetch( URL )
	.then( res => res.json() )
	.then( data => { renderProfesores( data ) } )
	.catch( err => { console.log("Hubo un error: ");})