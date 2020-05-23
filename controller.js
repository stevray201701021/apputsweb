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
    connection.query('SELECT * FROM t_sparepart where id_sparepart = ?', function(error, rows, fields){
        if(error){
       console.log(error);
    } else {
        response.ok(rows, res)
    }
    });
};

//add data montir
exports.tambahmontir = function(req,res){
    var id_montir = req.body.id_montir
    var nama_montir = req.body.nama_montir
    var iharga_perjam = req.body.harga_perjam

    connection.query('INSERT INTO t_montir (id_montir,nama_montir,harga_perjam) VALUES(?,?,?)'),
    [id_montir,nama_montir,harga_perjam],
    function(error,rows,fields){
    if(error){
        console.log(error);
     } else {
         response.ok(rows, res)
     }
    };
};
