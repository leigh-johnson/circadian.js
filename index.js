//require('dotenv').load();
var express = require('express');
var suncalc = require('suncalc');

// early morning & late afternoon presets
suncalc.addTime(22, 'midMorning', 'midAfternoon');

var app = express();

app.use(express.static('public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

// Set sunrise 2000k
// Set twilight 3500k
// Set early morning 4300k
// Set afternoon 6000k
// Set late afternoon 4300k
// Set twilight 3500k
// Set sunset 200k

// f.lux presets, for example
//Ember: 1200K
//Candle: 1900K
//Warm Incandescent: 2300K
//Incandescent: 2700K
//Halogen: 3400K
//Fluorescent: 4200K
//Daylight: 5500K
var getEvents = function(time){
  /* 
  https://github.com/mourner/suncalc
  returns an object with the following Date object properties:
    sunrise sunrise (top edge of the sun appears on the horizon)
    sunriseEnd  sunrise ends (bottom edge of the sun touches the horizon)
    goldenHourEnd morning golden hour (soft light, best time for photography) ends
    midMorning
    solarNoon solar noon (sun is in the highest position)
    midAfternoon
    goldenHour  evening golden hour starts
    sunsetStart sunset starts (bottom edge of the sun touches the horizon)
    sunset  sunset (sun disappears below the horizon, evening civil twilight starts)
    dusk  dusk (evening nautical twilight starts)
    nauticalDusk  nautical dusk (evening astronomical twilight starts)
    night night starts (dark enough for astronomical observations)
    nadir nadir (darkest moment of the night, sun is in the lowest position)
    nightEnd  night ends (morning astronomical twilight starts)
    nauticalDawn  nautical dawn (morning nautical twilight starts)
    dawn  dawn (morning nautical twilight ends, morning civil twilight starts)
  */
  //events = 
};
var calcTemp = function(time, lat, long){
  var temp = {};
  events = getEvents(lat, long);
};

app.get('/', function(req, res, next){
  time = req.query.time;
  lat = req.query.lat;
  long = req.query.long;
  temp = calcTemp(time, lat, long);
  res.render('index', {time: time, kelvin: temp.kelvin, rgb: temp.rgb, hex: temp.hex, cmyk: temp.cmyk});
});