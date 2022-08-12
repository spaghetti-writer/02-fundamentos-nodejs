const empleados = [
	{id: 1, nombre: "Karen"}, {id: 2, nombre: "williams"}, {id: 3, nombre: "Fernando"}
];
const salarios = [
	{id: 1, pago: 1000}, {id: 2, pago: 1500}
];

const getElementById = (_id, callback) => {
	const empleado = empleados.find( e=> e.id === _id );

	if(empleado){
		callback(null, empleado);
	}else{
		callback(`El empleado con id ${_id} no existe`);
	}

}

const getSalarioById = (_id, callback) => {
	// ? (null check operator) existe
	const salario = salarios.find( e => e.id === _id )?.pago;

	if(salario){
		callback(null, salario);
	}else{
		callback(`El salario con id ${_id} no existe`);
	}

}

const id = 1;

getElementById(id, (err, _empleado) => {
	
	if(err){
		console.log('Error');
		return console.log(err);
	}

	getSalarioById(id, (err, _salario) => {
		if(err){
			console.log("Error");
			return console.log(err);
		}

		/// Multiples callbacks anidados x ejemplo - callback hell

		console.log(`El salario del empleado ${_empleado.nombre} es ${_salario}`);
	});
	
});