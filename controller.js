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

// menampilkan id

exports.tampilbedasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart where id_sparepart', function(error, rows, fields){
        if(error){
       console.log(error);
    } else {
        response.ok(rows, res)
    }
    });
};