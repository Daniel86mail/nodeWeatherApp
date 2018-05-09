const request = require('request');

var getWeather = (lat, lon, callback) => {
    request({
        url: `https://api.forecast.io/forecast/f648e9f1d20496f6cc4979508ef4a36c/${lat},${lon}`,
        json: true
    }, 
    (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                summary: body.currently.summary,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else {
            callback('Unable to fetch weather');
        }
    
    });
};


module.exports.getWeather = getWeather;


//forecast.io api key: f648e9f1d20496f6cc4979508ef4a36c
//https://api.forecast.io/forecast/f648e9f1d20496f6cc4979508ef4a36c/32.0852999,34.78176759999999