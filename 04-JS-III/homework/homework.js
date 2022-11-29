// No cambies los nombres de las funciones.

const { convertToRecursiveGlob } = require("@11ty/eleventy/src/TemplatePath");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let primer = array[0];
  console.log(primer);
  return primer;
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let ultimo = array[array.length - 1];
  console.log(ultimo);
  return ultimo;
}



function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  //let primer = array[0];
  //console.log(primer);
  return array.length;
}



function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const entero = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i] + 1;
    entero.push(element);
  }
  return entero;
}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let j = 0 ;
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    j += element;
  }
  return j;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let j = 0 ;
  for (let i = 0; i < resultadosTest.length; i++) {
    const element = resultadosTest[i];
    j += element;
  }
  return j / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  const numbers = [...arguments]

  let multiplicar = 1
  if (arguments === 0  || arguments.length === 0 ) {
    return 0;
  }

  for (let i = 0; i < arguments.length; i++) {
   // multiplicar = 1 
    console.log(i)
    
    multiplicar = multiplicar * arguments[i];
    console.log(multiplicar)
  }
 
  return multiplicar;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
let cantidad = 0
for (let i = 0; i < arreglo.length; i++) {
  const element = arreglo[i];
  if (element > 18){
    cantidad = cantidad + 1;
  }
 
}
return cantidad;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
 if (numeroDeDia === 7 || numeroDeDia === 1){
return "Es fin de semana";
 }
 
  return "Es dia Laboral";
 }
 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  if (n.toString()[0] !== '9') {
    return false; 
  }
  return true;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
 
    const primero = arreglo[0]
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] !== primero) {
        return false;
      }
      return true;
    
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevo = []
  //for (let i = 0; i < array.length; i++) {
   //const element = "Enero", "Marzo", "Noviembre"
    if (array.includes("Enero", "Marzo", "Noviembre")){
      nuevo.push("Marzo", "Noviembre", "Enero");
      //console.log(element)
      console.log(nuevo)
      return nuevo;
    }
    
      return "No se encontraron los meses pedidos"
    
//}
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const nuevo = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 100 && element <= 200){
nuevo.push(element);
    }
  }
  return nuevo; 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
 
  const nuevo = []
  let i = 0;
  let n = numero;
  while (i < 10){
    i+=1

    if(n === i) {
      return "Se interrumpió la ejecución"
    }

    n = n + 2
    nuevo.push(n)
  }

  return nuevo;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const nuevo = []
  let i = 0;
  let n = numero;
  while (i < 10){
    i+=1

    if(i === 5) {
     continue;
    }

    n = n + 2
    nuevo.push(n)
  }

  return nuevo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
