// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {



    'facebookAuth' : {
        'clientID'        : process.env.FACEBOOK_ID, // your App ID
        'clientSecret'    : process.env.FACEBOOK_SECRET, // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : process.env.TWITTER_CONSUMER_KEY,
        'consumerSecret'     : process.env.TWITTER_CONSUMER_SECRET,
        'callbackURL'        : 'http://127.0.0.1:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
