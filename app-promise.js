const yargs = require('yargs');
const axios = require('axios');

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

const devToken = '&key=AIzaSyC8pwwyrSBa-RJ1DL_ZyEkQJ14MISqGgA0';
var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}${devToken}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.forecast.io/forecast/f648e9f1d20496f6cc4979508ef4a36c/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if(e.code === 'ENOTFOUND')
        console.log('unable to connect to API servers');
    else 
        console.log(e.message);
});

