const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true //parse input as string
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.lattitude, results.longtitude, (errorMessage, weatherResults) => {
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`The temperatures is ${weatherResults.temperature}, it feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});