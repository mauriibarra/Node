const  fs  = require("fs");
const colors = require("colors")

const crearArchivo = async(base = 5, l = false, h=10) => {

    try {

    if (l) {
        console.log('=================='.green)      
        console.log(`   Tabla del ` + colors.bgMagenta(base));
        console.log('=================='.green)
    }
    

    let salida='';

    for (let i=1; i<=h; i++) {
        salida += (`${base} x ${i} = ${base*i}\n`);
    }

    if (l) {
        console.log(salida.green);
    }

    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

    return (`tabla-${base}.txt`);

    } catch (err) {
        throw err;
    }

    
}


module.exports = {
    crearArchivo
}
