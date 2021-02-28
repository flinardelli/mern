const Empleado = require("../models/EmpleadosModel");

exports.create = function(req, res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
    });
}