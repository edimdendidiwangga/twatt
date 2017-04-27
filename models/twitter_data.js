var OAuth = require('oauth');
require('dotenv').config()

module.exports = {
  getOauthTwitter : function(dataSearch, next){
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.Consumer_Key,
    process.env.Consumer_Secret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%23superbowl&result_type=recent',
      process.env.Access_Token, //test user token
      process.env.Access_Token_Secret, //test user secret
      function (e, data){
        if (e) console.error(e);
        next(data)
      });
  }
}
