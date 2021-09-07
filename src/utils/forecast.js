const request = require('request');

const forecast = (lat, lng, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e54aaa386db132f7161780f9f90700e&query='+lat+','+lng+'&units=m';
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service',undefined);
        }else if(body.error){
            callback('Unable to find location',undefined);
        }else{
            const data = body.current;
            console.log(data.humidity);
            callback(undefined, data.weather_descriptions[0]+". It is currently "+data.temperature+" degrees out. It feels like "+data.feelslike+" degrees out. Humidity is "+data.humidity+"%");
        }
    });
}

module.exports = forecast;