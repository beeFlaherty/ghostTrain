(function() {
  'use strict';

  var apiKey = '8cdc94a2-b53f-4ac6-81ea-76aeeb5a2063';
  var apiUrl = '/api/api.php';

  module.exports = function(Vue) {
    function get(key) {
      callApi(
        'get_ride',
        { key: key },
        function(data) {
          console.log('Got', JSON.parse(data));
        }
      );
    }

    function set(data) {
      callApi(
        'set_ride',
        { data: JSON.stringify(data) },
        function(key) {
          console.log('Set', key);
        }
      );
    }

    function error(str){
      if (window.console) {
        console.log('Error', str);
      }
    }

    function callApi(action, params, callback) {
      params = params || {};
      params.action = action;
      params.session = Math.round(Math.random() * 1000000000000);
      params.api_key = apiKey;

      Vue.http.options.emulateJSON = true;

      Vue.http
      .post(apiUrl, params)
      .then(
        function(response) { // Success
          if (response.body.status && response.body.status === 'error') {
            error(response.body.message);
          } else {
            callback(response.body.message);
          }
        },
        function(response) { // Error
          error(response.body);
        }
      );
    }

    return {
      get: get,
      set: set
    };
  };
}());