const read = require('./lib/read');
const write = require('./lib/write');


async function main(){

    try {
       let book = await read.read();
       write.write(book);

        
    } catch (error) {
        console.log(error);
    }
}

main();