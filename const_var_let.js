// var - Crea la variable en ambito global
// let - Declara la variable dentro de un bloque de codigo
// const - El objecto no puede cambiar su valor, son mas ligeras que las variables declaradas con let
nombre = 'Williams';

if(true) {
	nombre = "test";
}

console.log(nombre);