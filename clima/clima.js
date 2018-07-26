const axios = require('axios');

const getClima = async (lat, long) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=cd0f395e7ef007e883113ebf9b9ec3cc`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}