/*var numeros = [10, 20, 30, 40, 30];

var compleCondicion = numeros.every((num) => {num > 5});
console.log(compleCondicion);*/

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    console.log(arguments);

    if(arguments.length > 0)
   {
      console.log("Si argumentos");

      arguments.forEach((num) => {
         
        console.log("Arg: " + num);
     });
   }
   else
   {
    console.log("No argumentos");
   }
 }

 multiplicarArgumentos(1,2,3);