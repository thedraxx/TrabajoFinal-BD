"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controller/usuario");
// import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controller/usuario';
const router = (0, express_1.Router)();
router.get('/', usuario_1.getPropiedades);
// router.get('/:id', getUsuario);
// router.post('/', postUsuario);
// router.put('/:id', putUsuario);
// router.delete('/:id', deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map