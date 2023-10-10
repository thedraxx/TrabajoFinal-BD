"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inmobiliaria_1 = require("../controller/inmobiliaria");
// import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controller/usuario';
const router = (0, express_1.Router)();
router.get('/getPropiedades', inmobiliaria_1.getPropiedades);
router.get('/maxSuperficieCasaDec', inmobiliaria_1.maxSuperficieCasaDec);
router.get('/vista', inmobiliaria_1.testVista);
router.get('/procedimiento', inmobiliaria_1.getPropiedadesVendedorProcedimiento);
// router.get('/:id', getUsuario);
// router.post('/', postUsuario);
// router.put('/:id', putUsuario);
// router.delete('/:id', deleteUsuario);
exports.default = router;
//# sourceMappingURL=inmobiliaria.js.map