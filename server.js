// 'use strict';

// // Request and response object drills
// // ==================================

// const express = require('express');
// const app = express();

// // your code here. 
// // listen for requests :)
// app.listen(process.env.PORT || 8080, () => console.log(
//   `Your app is listening on port ${process.env.PORT || 8080}`));

'use strict';

// Solution to A/B test drill
// ==========================

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const AB_COOKIE_NAME = 'a-b-test';

app.use(cookieParser());
app.use(express.static('public'));


const assignAb = () => ['a', 'b'][Math.floor(Math.random() * 2)];

app.get('/', (req, res) => {
    const cookie = req.cookies[AB_COOKIE_NAME];
    if (cookie === undefined) {
        res.cookie(AB_COOKIE_NAME, assignAb(), {});
    }
    res.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`));
