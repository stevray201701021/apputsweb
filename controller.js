'use strict';
var response = require('./res');
var connectrion = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi ku Berjalan",res)
};


//menampilkan semua data bengkel
exports.tampilsemuasparepart = function(req,res){
    connection.query('SELECT * FROM t_sparepart', function(error, rows, fields){
        if(error){
       console.log(error);
    } else {
        response.ok(rows, res)
    }
    });
};
