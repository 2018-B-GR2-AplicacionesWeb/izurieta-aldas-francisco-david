// 08-promesas.js
const fs = require('fs');
const nombre = '06-ejemplo.txt';
const nuevaPromesa = nombreArchivo => {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (err, contenidoLeidoDelArchivo) => {
            if (err) {
                reject(err);
                console.log('err');
            } else {
                resolve(contenidoLeidoDelArchivo);
                console.log('si');
            }
        });
    });
};

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, contenidoArchivo, err => {
            if (err) {
                reject(err);
            } else {
                resolve(contenidoArchivo);
            }
        });
    });
};

nuevaPromesa(nombre)
    .then(contenido => {
        console.log(contenido);
        return nuevaPromesaEscritura(
            '07-ejemplo2.txt',
            contenido + 'Adios amigos'
        );
    })
    .then(contenidoArchivoEscrito => {
        console.log(contenidoArchivoEscrito);
    })
    .catch(error => {
        console.log('Catch', error);
    });

function appendFile(nombreArchivo, contenido) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (err, contenidoLeidoDelArchivo) => {
            if (err) {
                reject(err);
                //console.log("err");
            } else {
                resolve(contenidoLeidoDelArchivo);
                return new Promise((resolve, reject) => {
                    fs.writeFile(
                        nombreArchivo,
                        contenidoLeidoDelArchivo + contenido,
                        err => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(contenidoLeidoDelArchivo + contenido);
                            }
                        }
                    );
                });
            }
        });
    });
}

appendFile('07-ejemplo.txt', '\nHola amigos')
    .then(contenido => {
        console.log(contenido);
    })
    .catch(error => {
        console.log('Catch', error);
    });

//EJERCICIO
const promesaEjercicio = arregloStrings => {
    return new Promise((resolve, reject) => {
        const respuestas = [];

        arregloStrings.forEach((string, indice) => {
            const nombreArchivo = `${indice}-${string}.txt`;
            const contenido = string;
            fs.writeFile(nombreArchivo, contenido, err => {
                const respuesta = {
                    nombreArchivo: nombreArchivo,
                    contenidoArchivo: contenido,
                    error: err
                };
                respuestas.push(respuesta);

                const estaCompletoElArreglo =
                    respuestas.length === arregloStrings.length;

                if (estaCompletoElArreglo) {
                    resolve(respuestas);
                }
            });
        });
    });
};

promesaEjercicio(['A', 'B', 'C']).then(respuestaEjercicio => {
    console.log(respuestaEjercicio);
});
