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

exports.tampilsemuamontir = function(req,res){
    connection.query('SELECT * FROM t_montir', function(error, rows, fields){
        if(error){
       console.log(error);
    } else {
        response.ok(rows, res)
    }
    });
};

// menampilkan id montir

exports.tampilbedasarkanidmontir = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir where id_montir = ?', function(error, rows, fields){
        if(error){
       console.log(error);
    } else {
        response.ok(rows, res)
    }
    });
};



//add data servis
exports.tambahservis = function(req,res){
    var id_service = req.body.id_montir
    var tgl_service = req.body.nama_montir
    var id_user = req.body.harga_perjam
    var jumlah_sparepart = req.body.jumlah_sparepart
    var id_sparepart = req.body.d_sparepart
    var jam_service = req.body.jam_service
    var total_service =req.body.total_service
    connection.query('INSERT INTO t_montir (id_service,tgl_service,id_user,id_montir,jumlah_sparepart,id_sparepart,jam_service,total_service) VALUES(?,?,?,?,?,?,?,?)'),
    [id_service,tgl_service,id_user,id_montir,jumlah_sparepart,id_sparepart,jam_service,total_service],
    function(error,rows,fields){
    if(error){
        console.log(error);
     } else {
         response.ok(rows, res)
     }
    };
};
