const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async (direccion) => {

    try {
        let coords = await lugar.getLugarLatLong(direccion);
        let temp = await clima.getClima(coords.lat, coords.long);

        return `El clima en ${coords.direccion} es de ${temp}`
    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }
};

getInfo(argv.direccion).then(res => {
    console.log(res);
}).catch(err => console.log(err));