import { Request, Response, query } from 'express';
import { QueryTypes } from 'sequelize';
import db from '../database/conecction';
import { querys } from '../querys/inmobiliaria.query';

export const getPropiedades = async(req: Request,res: Response) => {
    
    const propiedades = await db.query(querys.getPropiedades, { type: QueryTypes.SELECT });

    res.json({
        "Propiedades": propiedades
    });

}

export const maxSuperficieCasaDec = async(req: Request,res: Response) => {
    
    const propiedades = await db.query(querys.maxSuperficieCasaDec, { type: QueryTypes.SELECT });

    res.json({
        "Propiedades": propiedades
    });

}


export const testVista = async(req: Request,res: Response) => {
    
    const propiedades = await db.query(querys.vista, { type: QueryTypes.SELECT });

    res.json({
        "Propiedades": propiedades
    });

}

export const getPropiedadesVendedorProcedimiento = async(req: Request,res: Response) => {
        
        const propiedades = await db.query(querys.getPropiedadesVendedorProcedimiento, { type: QueryTypes.SELECT });
    
        res.json({
            "Propiedades-Procedimientos": propiedades
        });
    
}


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
