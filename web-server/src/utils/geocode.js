const request = require('request');

const API_KEY = 'pk.eyJ1IjoiZmF0aWhlcyIsImEiOiJjbDJhMXJkbzIwMTVqM2JwYXYxangxZ3dqIn0.R16RBSLx4davXeqXFUdePA'
// const API_KEY = 'pk.eyJ1IjoiY2FueWFoeWEiLCJhIjoiY2tucTZ2a3ZlMDI4ZzMzbnQzY29wd24wdiJ9.Stz8gEheY66xXHzzQTVZow' // YEDEK
const geocode = (location, callback) => {
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location) + '.json?access_token='+ API_KEY +'&limit=1';

    request({url: URL, json: true}, (err, res, body) => {
        if(err){
           return  callback('The service is down !', undefined);
        } 
        callback(undefined, {
            enlem : body.features[0].center[1],
            boylam : body.features[0].center[0],
            konum : body.features[0].place_name
        })
        
    })

}

module.exports = geocode