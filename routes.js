'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);


    app.route('/tampil')
    .get(jsonku.tampilsemuasparepart);


    app.route('tampil/id')
    .get(jsonku.tampilbedasarkanid)

    app.route('/tampilmontir')
    .get(jsonku.tampilsemuamontir);


    app.route('tampil/idmontir')
    .get(jsonku.tampilbedasarkanidmontir)




    app.route('/tambah')
    .post(jsonku.tambahservis);



}