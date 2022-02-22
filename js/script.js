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
  
  
  
  console.log("Ejercicio 3")
  console.log("Serie fibonacci")
  
  var numerosaimprimir = 50;
      var numfibo = [0,1];
  
      for(i=2; i <= numerosaimprimir; i++){
          numfibo.push(numfibo[i-1] + numfibo[i-2]);
              
      console.log(numfibo[i]);
  
      }