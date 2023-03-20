const { crearArchivo } = require('./helpers/multiplicador');
const argv = require('./config/yargs');
const colors = require("colors");

 console.clear();                       // estas cuatro lineas de codigo son simplemente un envabezado para mi 
// console.log('==================')      // mi muestra en terminal o consola.
// console.log('   Tabla del 5')
// console.log('==================')

// const base = 5;



console.log(argv);

crearArchivo (argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, `Se ha creado con exito la tabla del ${argv.b}`))
    .catch(err => console.log(err))

// const base = 7;
// let salida= '';

// for (let i=1; i<=10; i++) {
//     salida += (`${base} x ${i} = ${base*i}\n`);
// };

// console.log(salida);


// FileSystem: Se utiliza para guardar en disco el erchivo creado por la funcion, en este caso la tabla del 5.
// La forma en la que esta escrita aca abajo es una forma generica que creo yo que podria funcionar para muchos casos.
// Automaticamente cuando se corre el archivo por primera vez con el fs se crea un segundo archivo que es el que se encuntra debajo:
// el tabala-5.txt


// fs.writeFile (`tabala-${base}.txt`, salida, (err) => {
//     if(err) throw err;

//     console.log(`tabla-${base}.txt creda!`);
// })