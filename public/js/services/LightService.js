var LightService = function($http, $q){
  return {
    'getGradient': function(lat, long){
      var defer = $q.defer();
      $http.get('/api/v1/gradient', {
        params: {
          lat: lat,
          long: long
        }
      }).success(function(res){
        defer.resolve(res);
      }).error(function(err){
        defer.reject(err);
      });
    }
  }
};

module.exports = LightService;