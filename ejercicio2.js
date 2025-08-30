1.
const jedi = {nombre: "Luke Skywalker", edad: 19};

// Actualizar la edad a 25
jedi.edad = 25;

console.log(jedi); // {nombre: "Luke Skywalker", edad: 25}

2.
// Definición de variables
var nombre = "Leia";
var apellido = "Organa";
var edad = 20;

// Mensaje por concatenación
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

3.
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Calcular el precio total
const precioTotal = sable1.precio + sable2.precio;

// Imprimir resultado por consola
console.log("El precio total de los sables es:", precioTotal);

4. 
let precioBaseGlobal = 25000; // Cambio del valor global a 25,000 créditos

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Actualizamos el precioFinal sumando precioBaseGlobal al precioBase
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1);
console.log(nave2);
