
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/userModel')

module.exports = function(passport) {
        let opts = {
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: "webure_technologies"
        };
      
        passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
          User.findOne({
            id: jwt_payload.id
          }, (err, user) => {
            if (err) {
              return done(err, false);
            }
            if (user) {
              done(null, user);
            } else {
              done(null, false);
            }
          });
        }));
      };
        


                
