const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyC8pwwyrSBa-RJ1DL_ZyEkQJ14MISqGgA0',
    json: true
}, 
(error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});