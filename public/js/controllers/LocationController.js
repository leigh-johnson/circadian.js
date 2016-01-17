var LocationController = function($scope, $rootscope, $location, LocationService){
  $scope.getNavigatorLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      window.location.search = '?lat='+ position.coords.latitude + '&long=' +position.coords.longitude;
  });
  };
  $scope.setLocation = function(){
    console.log('set location $scope.position '+$scope.position)
  }
  $scope.getNavigatorLocation();
  $scope.map = { center: { latitude: 35.787743, longitude: -78.644257 }, zoom: 8 };
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
  var updateLocation = function(searchBox){
    console.log('place changed')
    var place = searchBox.getPlaces();
    $scope.map = {
        "center": {
            "latitude": place[0].geometry.location.lat(),
            "longitude": place[0].geometry.location.lng()
        },
        "zoom": 18
    };
    $scope.marker = {
        id: 0,
        coords: {
            latitude: place[0].geometry.location.lat(),
            longitude: place[0].geometry.location.lng()
        }
    };
  }
  var events = {
    places_changed: updateLocation
  };
  $scope.searchbox = {template: './js/templates/searchbox.html', events: events, parentdiv: 'searchbox', options:{
    autocomplete: true
  }};
};
module.exports = LocationController;