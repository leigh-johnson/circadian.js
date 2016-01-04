var PreviewController = function($scope, $rootscope, $location, PreviewService){
  $scope.getNavigatorLocation = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      window.location.search = '?lat='+ position.coords.latitude + '&long=' +position.coords.longitude;
  });
  };
  $scope.getNavigatorLocation();
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  $scope.searchbox.events = {
    places_changed: updateLocation()
  }
  $scope.updateLocation = function(){
    console.log('place changed')
  };
};
module.exports = PreviewController;