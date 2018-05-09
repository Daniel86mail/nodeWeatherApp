const request = require('request');

const devToken = '&key=AIzaSyC8pwwyrSBa-RJ1DL_ZyEkQJ14MISqGgA0';

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}${devToken}`,
        json: true
    }, 
    (error, response, body) => {
        if(error){
            callback('Something went wrong');
        }
        else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find address');
        }
        else if(body.status === 'OK'){
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Lattitude: body.results[0].geometry.location.lat,
                Longtitude: body.results[0].geometry.location.lng
            });
        }
    });
};




module.exports = {
    geocodeAddress
};