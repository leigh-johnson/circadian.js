//require('dotenv').load();
var express = require('express');
var suncalc = require('suncalc');
var ct = require('color-temperature');
var one = require('onecolor');


var app = express();

app.use(express.static('public'));
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

// f.lux presets, for example
//Ember: 1200K
//Candle: 1900K
//Warm Incandescent: 2300K
//Incandescent: 2700K
//Halogen: 3400K
//Fluorescent: 4200K
//Daylight: 5500K
var getTimes = function(dateTime, lat, long){
  
  // get events as date objects
  /* 
  https://github.com/mourner/suncalc
  returns an object with the following Date object properties:
    sunrise sunrise (top edge of the sun appears on the horizon)
    sunriseEnd  sunrise ends (bottom edge of the sun touches the horizon)
    goldenHourEnd morning golden hour (soft light, best time for photography) ends
    solarNoon solar noon (sun is in the highest position)
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
  var times = suncalc.getTimes(dateTime, lat, long);
  return times
};

var setEvents = function(times){ 
  // Set sunrise 2000k
  // Set twilight 3500k
  // Set early morning 4300k
  // Set afternoon 6000k
  // Set late afternoon 4300k
  // Set twilight 3500k
  // Set sunset 2000k
  // Events we care about for light gradients
  var events = {
    dawn : {
      temp: 1800,
      rgb: ct.colorTemperature2rgb(1800)
    },
    sunrise: {
      temp: 2000,
      rgb: ct.colorTemperature2rgb(2000)
    },
    goldenHourEnd: {
      temp: 3600,
      rgb: ct.colorTemperature2rgb(3600),
    },
    solarNoon: {
      temp: 6000,
      rgb: ct.colorTemperature2rgb(6000)
    },
    goldenHour: {
      temp: 3300,
      rgb: ct.colorTemperature2rgb(3300)      
    },
    sunset: {
      temp: 2000,
      rgb: ct.colorTemperature2rgb(2000)
    },
    dusk: {
      temp: 1800,
      rgb: ct.colorTemperature2rgb(1800)
    }
  };
  for (var event in events){
    event.dateTime = times[event]
  }
  return events
};

var setColors = function(events){
  rgbStr = function(rgb){
    return 'rgb(' + rgb.red + ',' + rgb.green + ',' + rgb.blue + (')')
  }
  for (i=0; i < events.length; i++){
    color = one.color(rgbStr(events[i].rgb));
    events[i].hex = color.hex();
    events[i].hsv = color.hsv();
    events[i].cmyk = color.cmyk();
  }
  return events
};

// Gradient constructor
var buildGradient = function(events){
  // Color stops. Max: 1 / minute
  for (i=0; i < events.length; i++){
    // in ms
    var diff = events[i+1].dateTime - events[i].time;
    // ms / 60,000 == m
    diff = round(diff/60,000);
    events[i].gradient = Gradient(events[i].hex, events[i+1].hex, diff);
  }
  return events
  // dawn, sunrise, goldenHourEnd, solarNoon, goldenHour, sunset, dusk
};

app.get('/', function(req, res, next){
  res.render('index')
  // /times = getTimes(new Date(), )
  //dateTime = req.query.dateTime;
  //lat = req.query.lat;
  //long = req.query.long;
  //res.render('index', {time: dateTime, kelvin: temp.kelvin, rgb: temp.rgb, hex: temp.hex, cmyk: temp.cmyk});
});

app.get('/api/v1/gradient', function(req, res, next){
  if (!req.query.lat || !req.query.long){
    res.status(500).json({error: 'You must specify lat & long coordinates. Example: ?lat=30.342&long=-78.123'})
  }
  else{
    times = getTimes(new Date(), req.query.lat, req.query.long);
    events = setEvents(times);
    events = setColors(events);
    events = buildGradient(events);
    res.status(200).json(events)
  }
  // 
});
app.get('/api/v1/preset', function(req, res, next){

});

var server = app.listen(3000, function(){
var host = server.address().address;
var port = server.address().port;
});