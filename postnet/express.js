/**
 * Created by yinmeng on 16-8-6.
 */
'use strict'

let express=require('express');
let bodyParser = require('body-parser');
let app = express();
let bar = require('./barcodeCore')
let zip = require('./zipCodeCore')
let barcode = new bar();
let zipToBar = new zip();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/getZip', function (req, res) {
    let input = req.body.code;
    let zip = barcode.dealBarcode(input);
    res.send(zip);
});


app.post('/getBar', function (req, res) {
    let input = req.body.zipcode;
    let bar=zipToBar.dealZipcode(input);
    res.send(bar);
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports=app;