const request = require('request');
const yargs = require('yargs');

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

var address = encodeURIComponent(argv.a);
var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
var devToken = '&key=AIzaSyC8pwwyrSBa-RJ1DL_ZyEkQJ14MISqGgA0';

request({
    url: baseUrl+address+devToken,
    json: true
}, 
(error, response, body) => {
    if(body){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
    }
});