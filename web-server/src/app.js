const express = require('express');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');
const PORT = process.env.PORT || 3000;



const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
    // res.send(typeof __dirname);
    // res.send('test')
})


app.get('/test_text', (req, res) => {
    res.send('18360859021')
})

app.get('/test_html', (req, res) => {
    res.send('<h2>Fatih ES with HTML H2 TAGS</h2>')
})

app.get('/test_json', (req, res) => {
    const studentInfo = {
        student_no : 18360859021,
        student_name : 'Fatih',
        student_surname : 'ES'
    }
    res.send(studentInfo);
})

app.get('/test_geocode', (req, res) => {
    geocode('Bursa', (err, {enlem, boylam, konum}) => {
        if(err) {
            return res.send(err);
        }
        const dataJSON = {
            location : konum,
            latitude : enlem,
            longitude : boylam
        }
        res.send(dataJSON);
    })
})

app.get('/test_weather', (req, res) => {
    geocode('Bursa', (err, {enlem, boylam, konum}) => {
        if(err){
            res.send(err);
        }
        weather(enlem, boylam, (err, data) => {
            if(err){
              return res.send(err);
            }
            const showData = {
                location : konum,
                temperature : data.temperature,
                pressure : data.pressure,
                humidity : data.humidity
            }
            res.send(showData)
        })
    })
})

app.get('*', (req, res)=> {
    res.send('We could not found the page that you want')
})



app.listen(PORT, () => {
    console.log('Server is up now on port ' + PORT);
})
