const  GoogleStrategy = require('passport-google-oauth20').Strategy;
const  FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID = '1042378855812-noci02ollfqdssfg37190alt9q58727u.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

FACEBOOK_APP_ID ="";
FACEBOOK_APP_SECRET="";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //  const user ={                            ///////when we use mongo db
    //    username: profile.displayName,
    //    avatar: profile.photos[0],
    //     }
    //      user.sa
    // done(null,profile)
  }
));

passport.serializeUser((user,done) => {
  
    done(null,user)
})

passport.deserializeUser((user,done) => {
    done(null,user)
})