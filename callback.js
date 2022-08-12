// funciom que se manda como argumento
// ejecuta la funcion en un tiempo determinado

// setTimeout(() => {
// 	console.log("hola mundd");
// }, 2000);

const getUsuarioById = (id, callback) => {
	//id: id
	const usuario = {
		id,
		nombre: "williams"
	}

	setTimeout(() => {
		callback(usuario);
	},1000);

	console.log("orden");
}

getUsuarioById(10, (_usuario) => { console.log(_usuario) });