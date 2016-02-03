var LocationController = function($scope, $rootscope, $location, LocationService){
  $scope.getNavigatorLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      window.location.search = 
        '?lat=' + position.coords.latitude + 
        '&long=' +position.coords.longitude + 
        '&offset=' + new Date().getTimezoneOffset();
  });
  };
  $scope.setLocation = function(){
    window.location.search = 
    '?lat='+ $scope.map.center.latitude + 
    '&long=' + $scope.map.center.longitude; //+ 
    //'&offset=' + $scope.map;
  }
  $scope.getNavigatorLocation();
  $scope.map = { center: { latitude: 35.787743, longitude: -78.644257 }, zoom: 8, control: {} };
  $scope.marker = {
      id: 0,
      coords: {
          latitude: 35.787743,
          longitude: -78.644257
      },
      options: { draggable: true },
      events: {
          dragend: function (marker, eventName, args) {

              $scope.marker.options = {
                  draggable: true,
                  labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                  labelAnchor: "100 0",
                  labelClass: "marker-labels"
              };
          }
      }
  };
  var getOffset = function(lat, long){
    $.ajax({
       url:'https://maps.googleapis.com/maps/api/timezone/json?location='+ 
       lat + ',' + long + 
       '&timestamp=' + (Math.round((new Date().getTime()) / 1000)).toString() +
       '&sensor=false',
    }).done(function(response){
        console.log(response)
        return response
        //$scope.offset = getOffset($scope.map.center.latitude, $scope.map.center.longitude);  
       if(response.timeZoneId != null){
       }
    });
  };

  var updateLocation = function(searchBox){
    var place = searchBox.getPlaces();

    $scope.map.control.refresh({
            "latitude": place[0].geometry.location.lat(),
            "longitude": place[0].geometry.location.lng()  
    });
    $scope.marker = {
        id: 0,
        coords: {
            latitude: place[0].geometry.location.lat(),
            longitude: place[0].geometry.location.lng()
        }
    };
    var map = $scope.map.control.getGMap();
    //console.log(map)
    //console.log(place[0].place_id)
    //service = new google.maps.places.PlacesService(map);
    getOffset($scope.map.center.latitude, $scope.map.center.longitude);
    //service.getDetails(place[0], callback);
    //console.log($scope.map)
  };
  var events = {
    places_changed: updateLocation
  };
  $scope.searchbox = {template: '/js/templates/searchbox.html', events: events, parentdiv: 'searchbox', options:{
    autocomplete: true
  }};
};
module.exports = LocationController;