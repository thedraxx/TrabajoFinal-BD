import { Router } from 'express';
import { getPropiedades, maxSuperficieCasaDec } from '../controller/inmobiliaria';
// import { deleteUsuario, getUsuario, getUsuarios, postUsuario, putUsuario } from '../controller/usuario';
const router = Router();


router.get('/getPropiedades', getPropiedades);
router.get('/maxSuperficieCasaDec', maxSuperficieCasaDec);
// router.get('/:id', getUsuario);
// router.post('/', postUsuario);
// router.put('/:id', putUsuario);
// router.delete('/:id', deleteUsuario);


export default router;
