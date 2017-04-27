let model = require('../models/twitter_data')
const methods = {}

methods.getOauth = function(req, res) {
  let search = req.params.search;
  model.getOauthTwitter(search, function(data){
    res.send(data)
  })
}

module.exports = methods
