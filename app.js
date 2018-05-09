const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyC8pwwyrSBa-RJ1DL_ZyEkQJ14MISqGgA0',
    json: true
}, 
(error, response, body) => {
    if(body){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
    }
});