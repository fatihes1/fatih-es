const request = require('request');
// query = 40.7831,-73.9712

API_KEY = '7c3dc456a83a09efe450c362d936d771'
const weather = (latitude, longitude, callback) => {
    const URL = 'http://api.weatherstack.com/current?access_key='+ API_KEY +'&query='+latitude +',' + longitude +'units=m'

    request({url: URL, json: true}, (err, res, body) => {
        if(err){
            callback('The service is down!', undefined);
        } else {
            callback(undefined ,body.current);
        }
    })

}

module.exports = weather;