const express = require('express');
const path = require('path');
/* const logger = require('morgan'); */
/* const bodyParser = require('body-parser'); */
/* const mongoose = require('mongoose'); */

const app = express();
/* const index = require('./routes/index'); */
/* const indexApi = require('./api/routes/index');  */

/* require('./api/models/db'); */

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); */

app.use('/admin(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

/* app.use('/api', indexApi);
app.use('/', index); */

app.use(function (req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('Server is running, port: 3000');
});
