let process = require('process');
let funcionesDeTareas = require('./funcionesDeTareas');
let appTareas = require('./funcionesDeTareas')
let argv = process.argv

switch (argv[2]) {
    case 'superlistar':
        console.log(appTareas.listar);

        break;
    case 'listar':
        console.log("------------------------------------");
        appTareas.listarFor();
        break;
    case 'crear':
        let titulo = argv[3]
        let estado = argv[4]
        console.log("-----------------------------------");
        console.log (funcionesDeTareas.crearTareas(titulo,estado));
        console.log("Su tarea fue agregada con exito")
        break;
    case undefined:
        console.log("-------------------------------------");
        console.log("Atencion- tienes que pasar una accion");
        console.log("Las acciones disponibles son : listar");
        console.log("-------------------------------------");
        break;
    default:
        console.log("--------------------------------------");
        console.log("No entiendo que quieres hacer"); 
        console.log("Las acciones disponibles son: listar");
        console.log("---------------------------------------");
        break;
}