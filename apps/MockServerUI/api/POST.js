var response = require('../../MockServer/service/response');

module.exports = function(req, config) {
  var obj = req.body;
  obj.url = config.base.url + obj.url;
  response.set(obj.url, obj.method, JSON.parse(obj.data));

  return {success: true};
}
