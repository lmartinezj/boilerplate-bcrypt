'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const bcrypt  = require('bcrypt');
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
/**
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
  }
);

bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  }
);
 
bcrypt.compare(someOtherPlaintextPassword, hash, (err, res) => {
    console.log(res);
  }
);
*/


bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res); //true
    });
});


//START_ASYNC -do not remove notes, place code between correct pair of notes.



//END_ASYNC

//START_SYNC



//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
