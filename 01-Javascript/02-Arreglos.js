// un arreglo es un objeto jason
var arreglo = [1, 2.2, 'hola', true, false, {}, undefined, null, []]; //se pued eponer de todo en un arreglo incluso otro arreglo o un objeto

var arregloNumeros = [1, 2, 3];

arregloNumeros[0]; //1
arregloNumeros[2]; //3
arregloNumeros[4]; //error

console.log(arregloNumeros[0], arregloNumeros[2], arregloNumeros[4]); // nod a error da undefined

arregloNumeros.push(4); // con esto se agrega al final del arreglo
console.log(arregloNumeros);

arregloNumeros.pop();
console.log(arregloNumeros); //borra el ultimo elemento

arregloNumeros.splice(0, 1); // borra con argumentos en este caso se dijo borra en la posicion cero un elemento
console.log(arregloNumeros);

arregloNumeros.splice(0, 0, 0); // en este caso con 3 argumentos dice en la posicion cero no se borra nada y se agrega el 0
console.log(arregloNumeros);

arregloNumeros.splice(2, 0, 1.5); //a;ade en posicion dos un 1.5
console.log(arregloNumeros);

var usuario = 1.5;

var indiceUsuario = arregloNumeros.indexOf(usuario); //esto serviria para buscar el indice de undeterminado elemento
arregloNumeros.splice(indiceUsuario);
console.log(arregloNumeros);

console.log(arregloNumeros.slice(2, 4)); //esta funcion toma un epdazo del arreglo en este toma desde el indice 2 hasta el 3 excluye el 4 que s epione como apra metro

//Ejercicio

var arregloNotasPrimerBimestre = [8.5, 9, 4];
var arregloNotasSegundoBimestre = [8.5, 9, 4];
//Destrcuturacion de arreglos
var arregloNoTAS2018B = [
    ...arregloNotasPrimerBimestre,
    ...arregloNotasSegundoBimestre
]; //co los tres puntos se hace la destructuracionde arreglos

console.log(arregloNoTAS2018B);

//Destrcturacion de objetos
var francisco2018A = {
    sexualidad: 0,
    web: 2
};

var francisco2018B = {
    musica: 7,
    moviles: 8
};

var francisco = {
    ...francisco2018A,
    ...francisco2018B
};

console.log('francisco', francisco);
