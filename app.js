// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//     .options({
//         a: {
//                 demand: true,
//                 alias: 'address',
//                 describe: 'Address to fetch weather for',
//                 string: true //parse input as string
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage);
//     }
//     else{
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

request({
    url: `https://api.forecast.io/forecast/f648e9f1d20496f6cc4979508ef4a36c/32.0852999,34.78176759999999`,
    json: true
}, 
(error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
        console.log(body.currently.summary);
    }
    else {
        console.log('Unable to fetch weather');
    }

});

//forecast.io api key: f648e9f1d20496f6cc4979508ef4a36c
//https://api.forecast.io/forecast/f648e9f1d20496f6cc4979508ef4a36c/32.0852999,34.78176759999999