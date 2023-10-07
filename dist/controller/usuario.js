"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxSuperficieCasaDec = exports.getPropiedades = void 0;
const sequelize_1 = require("sequelize");
const conecction_1 = __importDefault(require("../database/conecction"));
const inmobiliaria_query_1 = require("../querys/inmobiliaria.query");
const getPropiedades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propiedades = yield conecction_1.default.query(inmobiliaria_query_1.querys.getPropiedades, { type: sequelize_1.QueryTypes.SELECT });
    res.json({
        "Propiedades": propiedades
    });
});
exports.getPropiedades = getPropiedades;
const maxSuperficieCasaDec = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const propiedades = yield conecction_1.default.query(inmobiliaria_query_1.querys.maxSuperficieCasaDec, { type: sequelize_1.QueryTypes.SELECT });
    res.json({
        "Propiedades": propiedades
    });
});
exports.maxSuperficieCasaDec = maxSuperficieCasaDec;
// export const getUsuario = async(req: Request,res: Response) => {
//     const {id} = req.params;
//     const usuario = await Usuario.findByPk(id);
//     if(!usuario){
//         res.status(404).json({
//             msg: `No existe usuario con el id ${id}`
//         });
//     }
//     res.json({
//         usuario
//     });
// }
// export const postUsuario = async(req: Request,res: Response) => {
//     const {body} = req;
//     try {
//         const existeEmail = await Usuario.findOne({
//             where: {
//                 email: body.email
//             }
//         })
//         if(existeEmail){
//             return res.status(400).json({
//                 msg: `Ya existe un usuario con el email ${body.email}`
//             });
//         }
//         const usuario = Usuario.build(body);
//         await usuario.save();
//         res.json({
//             usuario
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Hable con el administrador'
//         });
//     }
// }
// export const putUsuario = async(req: Request,res: Response) => {
//     const {id} = req.params;
//     const {body} = req;
//     try {
//         const usuario = await Usuario.findByPk(id);
//         if(!usuario){
//             return res.status(404).json({
//                 msg: `No existe usuario con el id ${id}`
//             });
//         }
//         await usuario.update(body);
//         res.json({
//             usuario
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Hable con el administrador'
//         });
//     }
// }
// export const deleteUsuario = async(req: Request,res: Response) => {
//     const {id} = req.params;
//     try {
//         const usuario = await Usuario.findByPk(id);
//         if(!usuario){
//             return res.status(404).json({
//                 msg: `No existe usuario con el id ${id}`
//             });
//         }
//         // await usuario.destroy();
//         await usuario.update({estado: false});
//         res.json({
//             usuario
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Hable con el administrador'
//         });
//     }
// }
//# sourceMappingURL=usuario.js.map