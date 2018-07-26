const axios = require('axios');

const getLugarLatLong = async (direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoiY2hyaXN0b3BoZXItcmFtaXJleiIsImEiOiJjamsxdXozY3AwaHNsM3FsZWsxa2twMGplIn0.yo1gZaCCISUZvatgWQalzg`);

    if(resp.data.features.length == 0){
        throw new Error('No hay resultados para la ciudad');
    }

    return {
        direccion: resp.data.features[1].place_name,
        lat: resp.data.features[1].geometry.coordinates[1],
        long: resp.data.features[1].geometry.coordinates[0]
    }
};

module.exports = {
    getLugarLatLong
}