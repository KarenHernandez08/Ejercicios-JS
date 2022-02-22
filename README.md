# Ejercicios-JS
 #### Estos son ejercicios introductorios para aprender `JS`
 La descripción de los ejercicios se encuentra en html
 ![alt text](https://github.com/KarenHernandez08/Ejercicios-JS/blob/main/imagenes/index.PNG)
 
 ##### EJERCICIOS 
1. Dado un arreglo de números enteros, Imprimir solamente aquellos que son denominados números primos, (usar arreglo denominado como "ejercicio1").
```javascript
const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
  
  console.log("Ejercicio 1:");
  console.log("Los numeros primos son");
  for (let index = 0; index < ejercicio1.length; index++) {
  
    if (ejercicio1[index] % 2 != 0) {
      console.log(ejercicio1[index]);
    }
  }

```
En la terminal el resultado sera el siguiente :
![alt text](https://github.com/KarenHernandez08/Ejercicios-JS/blob/main/imagenes/ejercicio1.PNG)

2. Ramón quiere hacer una fiesta privada en donde solo entre un número exclusivo de personas, ayudale al portero a solo dejar pasar a aquellas personas mayores de edad que sean familiares de Ramón. (con imprimir los usuarios que se admitirán basta, usar el arreglo denominado como "ejercicio2").
```javascript
const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  
  console.log("Ejercicio 2");
  console.log("Mayores de edad admitidos a la fiesta y familiares");
  for (let i = 0; i < ejercicio2.length; i++) {
  
    if (ejercicio2[i].edad >= 18 && ejercicio2[i].esFamiliar == true) {
      console.log(ejercicio2[i].nombre);
    }
  }

```
Los unicos invitados de ramon serian:
![alt text](https://github.com/KarenHernandez08/Ejercicios-JS/blob/main/imagenes/ejercicio2.PNG)


3. Con ayuda de ciclos imprime los primeros 50 números de la suceción de fibonacci, (1,1,2,3,5,8,13,21).
```javascript
  console.log("Ejercicio 3")
  console.log("Serie fibonacci")
  
  var numerosaimprimir = 50;
      var numfibo = [0,1];
  
      for(i=2; i <= numerosaimprimir; i++){
          numfibo.push(numfibo[i-1] + numfibo[i-2]);
              
      console.log(numfibo[i]);
  
      }
```
Los 50 numeros de la suceción Fibonacci son los siguientes:

![alt text](https://github.com/KarenHernandez08/Ejercicios-JS/blob/main/imagenes/ejercicio3.PNG)
![alt text](https://github.com/KarenHernandez08/Ejercicios-JS/blob/main/imagenes/ejer3.PNG)
 

