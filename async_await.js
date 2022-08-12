// await espera la respuesta de una promesa, debe de estar dentro de un metodo asincrono
// el uso de la palabra reservada await solo es posible dentro de un metodo asincrono
// para hacer un metodo asincrono se le agrega la palabra reservada async
// retorna una promesa

const empleados = [
	{id: 1, nombre: "Karen"}, {id: 2, nombre: "williams"}, {id: 3, nombre: "Fernando"}
];
const salarios = [
	{id: 1, pago: 1000}, {id: 2, pago: 1500}
];

const getElementById = (_id) => {

	return new Promise((resolve, reject) => {

		const empleado = empleados.find( e=> e.id === _id )?.nombre;

		(empleado)
			? resolve(empleado)
			: reject(`No existe el usuario con id ${_id}`);

	});
}

const getSalarioById = (_id) => {

	return new Promise((resolve, reject) => {

		const salario = salarios.find( e=> e.id === _id )?.pago;

		(salario)
			? resolve(salario)
			: reject(`No existe el salario con id ${_id}`);

	});
}

const getInfoUsuario = async(_id) => {

	try {
		const empleado = await getElementById(_id);
		const salario = await getSalarioById(_id);

		return `El salario del ${empleado} es ${salario}`;

	} catch(error) {
		// captura la excepcion y el ciclo termina ahi, en esta caso no se requeiere usar el 
		// catch al llamar la promesa
		// return error; 
		// tira un error en caso de que se deba manejar el problema, requiere el catch al 
		// llamar la promesa
		throw error;
	}
}

const id = 13;
getInfoUsuario(id)
	.then( msg => console.log("Todo bien", msg) )
	.catch( err => console.log('Todo mal', err) );