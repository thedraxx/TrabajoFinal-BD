import { Router } from 'express';
import { getPropiedades, getPropiedadesVendedorProcedimiento, maxSuperficieCasaDec, testVista } from '../controller/inmobiliaria';
// import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controller/usuario';
const router = Router();


router.get('/getPropiedades', getPropiedades);
router.get('/maxSuperficieCasaDec', maxSuperficieCasaDec);
router.get('/vista', testVista);
router.get('/procedimiento', getPropiedadesVendedorProcedimiento);
// router.get('/:id', getUsuario);
// router.post('/', postUsuario);
// router.put('/:id', putUsuario);
// router.delete('/:id', deleteUsuario);


export default router;
