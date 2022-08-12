const deadpool = {
	nombre: 'Wade',
	apellido: 'Wilson',
	poder: 'Regeneracion',

	getName() {
		return `${this.nombre} ${this.apellido} ${this.poder}`
	}
};

console.log(deadpool.getName());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// desestructuracion const { /nombre de los atributos del objeto/ } = objecto en cuestion.
// extrae las propiedades de los atributos en base a su nombre en caso de que no exista
// retorna undefined, igualmente podemos definirle un valor dentro de la desestructuracion
// const { nombre, apellido, poder, edad = 10 } = deadpool;
// console.log(nombre, apellido, poder, edad);

// function impremeHeroe(_heroe){
// 	const { nombre, apellido, poder, edad = 10 } = _heroe;
// 	// nombre = "over"; throw error cuz u can change the value
// 	console.log(nombre, apellido, poder, edad);
// }

function impremeHeroe({ nombre, apellido, poder, edad = 10 }){
	nombre = "over"; // currently works
	console.log(nombre, apellido, poder, edad);
}

impremeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
// const [ h1, h2, h3 ] = heroes;
// console.log(h1, h2, h3);

// select just one item
const [ , , h3 ] = heroes;
console.log(h3);
