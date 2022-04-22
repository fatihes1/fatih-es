const request = require('request');

API_KEY = 'pk.eyJ1IjoiZmF0aWhlcyIsImEiOiJjbDJhMXJkbzIwMTVqM2JwYXYxangxZ3dqIn0.R16RBSLx4davXeqXFUdePA'
const geocode = (location, callback) => {
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token='+ API_KEY +'&limit=1';

    request({url: URL, json: true}, (err, res, body) => {
        if(err){
            callback('The service is down !', undefined);
        } else if(body.features[0].length == 0) {
            callback('Could not find location', undefined);
        } else {
            callback(undefined, {
                enlem : body.features[0].center[1],
                boylam : body.features[0].center[0],
                konum : body.features[0].place_name
            })
        }
    })

}

module.exports = geocode