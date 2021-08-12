// let edad = 34

// // dos maneras distintas de escribir la misma orden
// edad = edad + 1 // 35
// edad++ // 36

// console.log(edad)

// edad = edad + 2 // 38
// edad += 2  // 40

// console.log(edad)

// edad += 9

// console.log(edad)

// edad += 10

// console.log(edad)

// CICLOS FOR, CICLOS DE REPETICION

// que es contar

// - comienzo por un numero
// - determino hasta cuanto voy a contar
// - al numero original le voy sumando un numero cada vez

// 0
//   0 + 1 = 1
//      1 + 1 = 2
//        2 + 1 = 3

// operacion de repeticion

// "conta mientras i sea menor o igual a 10"

// for (let i = 0; i <= 100; i+=2) {
//   console.log(i)
// }

// escribir un codigo que use for que muestre en consola todos los numeros pares del 0 al 100
// escribir un codigo con for que muestre en consola todos los numeros del 1000 al 1
// escribir un codigo que use for que empiece en 100 y vaya decreciendo de 3 en 3 hasta llegar al 1

// arrays o arreglos

// const alumnas = [ "naty", "tati", "ro", "ele" ]

// const contenedorAlumnas = document.querySelector(".alumnas")

// // console.log(alumnas)
// // console.log( alumnas[0] ) // "naty"
// // const nombre = alumnas[2]
// // console.log(nombre)

// const resultado = document.querySelectorAll(".alumnas")

// contenedorAlumnas.onclick = () => {
//   console.log("me hiciste click")
// }

// console.log(resultado)

// resultado.onclick = () => {
//   console.log("hiciste click en un elemento de la lista")
// }

// document.getElementsByClassName("alumnas")

// const titulo = document.getElementById("titulo")

/*const subtitulo = document.querySelector("#subtitulo");
const parrafos = document.querySelectorAll(".parrafo");
console.log(parrafos);
console.log(parrafos[0]);

parrafos.onclick = () => {
  // esto no funciona
  console.log("click en un parrafo");
};*/

// parrafos[0].onclick = () => {
//   parrafos[0].style.color = "green"
// }

// parrafos[1].onclick = () => {
//   parrafos[1].style.color = "green"
// }

/*for (let i = 0; i < 8; i++) {
  parrafos[i].onclick = () => {
    parrafos[i].style.color = "green";
  };
}

subtitulo.onclick = () => {
  subtitulo.style.color = "red";
};

const alumnas = ["Jenni", "Zuri", "Ivi", "Sandra", "Elena"];

const variable = 0;
console.log(alumnas[variable]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

for (let i = 1; i < 10; i++) {
  console.log(i);
  console.log(alumnas[i]);
}

//ejercicio 1 cuenta del 0 al 100 yengo de 2 en dos. todos los numeros pares del 0 al 100
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

//EJERCICIO 2 cuenta del 1000 al 1

for (let i = 1000; i >= 1; i--) {
  console.log(i);
}

//ejercicio 2 cuenta del 100 al 1 yengo de 3 en 3
for (let i = 100; i >= 1; i -= 3) {
  console.log(i);
}*/

//////////////////////////CLASE 40 /////////////////////////

// arrays o arreglos

// const alumnas = ["gabi", "ELI", "sTeLLa", "Vicky"]

// console.log(alumnas.length) // 4

// va a empezar en 0
// va a contar mientras i sea menor a 4
// va a contar de uno en uno
// for (let index = 0; index < alumnas.length; index++) {
//   // const element = array[index];

//   const nombre = alumnas[index]
//   const primeraLetra = nombre.charAt(0)
//   const restoDelNombre = nombre.slice(1)
//   const nombreCompleto = primeraLetra.toUpperCase() + restoDelNombre.toLowerCase()

//   console.log(nombreCompleto)
// }

// Contar todos los elementos mayores a 18

// una variable en donde ir guardando todos los elementos que sean > 18

// si copien este codigo, si funciona :D
// const edades = [2, 3, 7, 3, 1, 8, 3, 7, 3]

// let contador = 0
// for (let index = 0; index < edades.length; index++) {

//   if (edades[index] > 18) {
//     contador++
//   }

// }

// console.log("contador", contador)

// quiero una funcion mayoresA18
// que reciba un array y retorne la cantidad de elementos > 18 en ese array

// quiero una funcion hayMayorA18
// que reciba un array y retorne true si hay al menos un elemento > 18
// y false si no lo hay

// const mayoresA18 = (array) => {
//   let contador = 0
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > 18) {
//       contador++
//     }
//   }

//   return contador
// }

// const hayMayorA18 = (array) => {
//   let hayMayoresDe18 = false // variable bandera o "flag" o "javascript, levanta la mano"

//    for (let index = 0; index < array.length; index++) {
//      if (array[index] > 18) {
//       hayMayoresDe18 = true
//      }
//    }

//    return hayMayoresDe18
// }

// const edades = [5, 88, 3] // TRUE

// const numeros = [22, 33, 1, 99]
// const menores = [2, 4, 6, 1, 3, 1]

// console.log(mayoresA18(edades))

// console.log(mayoresA18(numeros))

/////////////////EJERCICIOS CLASE 40//////////////////////

//EJERCICIO 1 RESUELTO

//Dados un array de 10 números, informar cuantos de ellos son positivos.

/*const numeros = [1,2,3,-5,18,-55,98,-3,-9,10];

const numerosPositivos = (array) => {
  let contador = 0;

  for (let index = 0; index < array.length; index++) {
    if (numeros[index] >= 0) {
      contador++
    }
  }
  return contador;
};

console.log(numerosPositivos(numeros));*/

//EJERCICIO 2 RESUELTO PERO PODRIA MEJORAR QUE SUME TODOS LOS ELEMENTOS JUNTOS

//Dado un array de 10 numeros, donde cada número representa la nota de una alumna, informar el promedio final de nota del curso.

/*const notas = [3, 8, 7, 9, 6, 9, 10, 7, 9, 8];

const calcularPromedio = (array) => {
  for (let index = 0; index < array.length; index++) {
    let suma =
      notas[0] +
      notas[1] +
      notas[2] +
      notas[3] +
      notas[4] +
      notas[5] +
      notas[6] +
      notas[7] +
      notas[8] +
      notas[9];
      
    return suma / array.length;
  }
};

console.log(calcularPromedio(notas));*/

// EJERCICIO 3// resolver como sumar el contenido
//Dado un array de 10 numeros, donde cada número representa la nota de una alumna, informar el promedio tomando solo aquellas que tienen una nota mayor a 7.

/*const notas = [3, 8, 7, 9, 6, 9, 10, 7, 9, 8];

const promedioAprobadas = (array) => {
  let notasAprobadas = 0;

  for (let index = 0; index < array.length; index++) {
    if (notas[index] >= 7) {
      notasAprobadas++;
    }
  }
  return notasAprobadas;
};

console.log(promedioAprobadas(notas));*/

//Ejercicio 4 RESUELTO

//Dada una N cantidad de temperaturas de una región, se requiere informar cuál fue la mayor temperatura.

/*const temperaturas = [5,16,58,76,6,8]

const temperaturaMasAlta = (array) =>{
  let maxima = 0
  for (let index = 0; index < array.length; index++) {
    
   if(maxima < array[index]){
     maxima = array[index]
   }
  }
  return maxima
}

console.log(temperaturaMasAlta(temperaturas))*/

////////EJERCICIOS EN CLASE////////

//1 Dado un array de 10 números, mostrar cada uno en consola.

/*const numeros = [1,2,8,-8,28,40,77,8,5,6]

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index])
  
}*/

//2 Dado un array de 10 números, mostrar solo los que son mayores a 5 en consola.

/*const numeros = [1,2,8,-8,28,40,77,8,5,6]

for (let index = 0; index < numeros.length; index++) {
if (numeros[index] > 5){
  console.log(numeros[index])
}
  
}*/

// 3 Promedio de un curso

//Dado un array de 3 numeros, donde cada número representa la nota de una alumna, retornar el promedio final de nota del curso.

/*const notas = [7, 5, 8];

const promedio = (notas) => {
  let total = 0;

  for (let index = 0; index < notas.length; index++) {
    total += notas[index];
  }

  return total / notas.length;
};

console.log(promedio(notas));*/

// 5 Promedio de promoción

//Dado un array de 10 numeros, donde cada número representa la nota de una alumna, retornar el promedio tomando solo aquellas que tienen una nota mayor a 7.

/*const notas = [7,5,8,5,4,10,8,9,3,2];

const promedioAprobadas = (notas) => {

  let notasAprobadas = 0
  let contador = 0

  for (let index = 0; index < notas.length; index++) {

    if (notas[index]>7) {

      notasAprobadas += notas[index]
      contador ++
    }

  }

  return notasAprobadas / contador

}

console.log(promedioAprobadas(notas))*/

//Temperatura más alta

//Dado un array de cualquier longitud, compuesto por numeros que representan temperaturas de una región, se requiere retornar cuál fue la mayor temperatura.

/*const temperaturas = [25,12,13,40,36,2,10]

const temperaturaMasAlta = (temperaturas) =>{
  let maxima = 0

  for (let index = 0; index < temperaturas.length; index++) {
   if (maxima < temperaturas[index]){
     maxima = temperaturas[index]
   }
    
  }
  return maxima
}

console.log(temperaturaMasAlta(temperaturas))*/

//5 ARRAYS BIDIMENSIONALES


