const request = require('request');
const devToken = '&key=AIzaSyC8pwwyrSBa-RJ1DL_ZyEkQJ14MISqGgA0';

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}${devToken}`,
            json: true
        }, 
        (error, response, body) => {
            if(error){
                reject('Something went wrong');
            }
            else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find address');
            }
            else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    lattitude: body.results[0].geometry.location.lat,
                    longtitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMsg)=>{
    console.log('Error: ' + errorMsg);
});