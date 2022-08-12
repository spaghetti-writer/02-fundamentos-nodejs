const empleados = [
	{id: 1, nombre: "Karen"}, {id: 2, nombre: "williams"}, {id: 3, nombre: "Fernando"}
];
const salarios = [
	{id: 1, pago: 1000}, {id: 2, pago: 1500}
];

//#region codbase
// const getElementById = (_id) => {
// 	// resolve - lo que ejecuta cuando esta bien, reject lo que esjecuta cuando falla, el nombre de los parametros puede variar
// 	const promesa = new Promise((resolve, reject) => {
// 		const empleado = empleados.find( e=> e.id === _id );
// 		if(empleado){
// 			resolve(empleado);
// 		}else {
// 			reject(`No existe el usuario con id ${_id}`);
// 		}
// 	});
// }
//#endregion codbase

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

const id = 4;

// getElementById(id)
// 	.then(empleado => console.log(empleado))
// 	.catch(err => console.log(err));

// getSalarioById(id)
// 	.then(salario => console.log(salario))
// 	.catch(err => console.log(err));

// Forma base, codigo feo :)
// getElementById(id)
// 	.then(empleado => {
		
// 		getSalarioById(id)
// 			.then(salario => {
// 				console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
// 			})
// 			.catch(err => console.log(err));
// 	})
// 	.catch(err => console.log(err));

//// Promesas en cadena
let nombre_empleado;
getElementById(id)
	.then(empleado => {
		nombre_empleado = empleado;
		// encadenamos la promesa retornandola desde este punto, de esa manera no se tienen que manejar los
		// eventos aqui y los declaramos en el siguiente then, el catch captura el primer error que ocurra
		return getSalarioById(id);
	})
	.then(salario => console.log(`El salario del empleado ${nombre_empleado} ${salario}`))
	.catch(err => console.log(err));
