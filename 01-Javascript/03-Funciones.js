//una funcion es algo que recibe argumentos y que devuelve algo
function sumarDosNumeros(numUno, numDos) {
    //validaciones 
    var numeroUnoEsNumber = typeof numUno == 'number';//true
    var numeroDosEsNumber = typeof numDos == 'number';//true

    if (numeroUnoEsNumber && numeroDosEsNumber) {
        return numUno + numDos;
    } else {
        return 'INGRESE SOLO NUMEROS';
    }
}

//envio otros parametros

console.log(sumarDosNumeros(5, 7));
console.log(sumarDosNumeros('a', 'b'));//imprime 0 xq no son numeros, si se agrega mas argumentos o parametros javascript no los toma en cuenta

//las validaciones sirven para controlar datos que entrend e otras personas ya que javascript no manda errorres


function saludar() {
    console.log('hola putos');//esto es undefined si una funcion notn eien return, es decir el undefined es como el void
}

saludar();

console.log(saludar());//no hay error ya que imprime un undefined y como javascript noes tipado hace loq ue le da la ganan


function sumarNumeros(...numero) {//los tres putnos aqui significan que s epuede poner n numeros de argumentos y eto al funcion trata como una rreglo

    var arregloTemporal = numero;//los n arguemntos se ahcen una rreglo

    var i;
    var resultado=0;
    for (i = 0; i < arregloTemporal.length; i++) {
        resultado+=arregloTemporal[i];
    }

    return resultado;

}


console.log(sumarNumeros(1, 2, 3, 4));


function saludar2(nombre, funcionMensajeria){
    var saludo = HOLA ${nombre.toUpperCase()};
    funcionMnesajeria(saludo);
    return saludo;//la tilde iunvertida sirve para concatenar pero de una mejor forma junto con ${} sirve para concatenar variables de template es decir variables que se tiene afuera pero se ignresa en una cadena
}

saludar("Francisco",imprimirEnConsola);

function imprimirEnConsola(texto){
    console.log(texto);
}///revisar esto de ignresar funciones como parametros
