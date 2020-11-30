
const fs = require('fs');

module.exports = {

    write: (texto) => {

        const data = new Uint8Array(Buffer.from(`${texto}`));
        fs.writeFile('./assets/resultado.txt', data, (err) => {
            if (err) throw err;
            console.log('Archivo guardado');
        });
       
    }

}