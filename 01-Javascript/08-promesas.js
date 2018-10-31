// 08-promesas.js
const fs = require('fs');

const promesa = nombreArchivo => {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeido) => {
            if (error) {
                reject(error);
            } else {
                resolve(contenidoLeido);
            }
        });
    });
};

const promesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, contenidoArchivo, error => {
            if (error) {
                reject(error);
            } else {
                resolve(contenidoArchivo);
            }
        });
    });
};

console.log(promesa);
promesa('07-texto.txt')
    .then(contenido => {
        console.log('Ok', contenido);
        return promesaEscritura('07-texto.txt', contenido + 'Nuevo Contenido');
        // Promesa
    })
    .then(contenidoCompleto => {
        console.log(contenidoCompleto);
    })
    .catch(error => {
        console.log('Mal', error);
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
