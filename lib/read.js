// Lea el archivo de El Quijote y devuelva por consola un mensaje de “Procesando libro” y, 
// posteriormente, el número de veces que aparece la palabra “Sancho” en el contenido.
const fs = require('fs');
module.exports = {

    read: () => {
        console.log('Procesando libro...');
        return new Promise((resolve, reject) => {

            fs.readFile('./assets/el_quijote.txt', (err, data) => {
                if (err) throw err;
                
                let num = 0;
                let arr = data.toString().split(' ');

                for (const item of arr) {
                   if (item.toLowerCase().search('sancho')>-1) {
                    num++;
                   }
                }

                console.log(num);
                resolve(data.toString());
            });

        })
    }

}