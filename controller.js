'use strict';
var response = require('./res');
var connectrion = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi ku Berjalan")
};
