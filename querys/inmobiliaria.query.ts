export const querys ={
    getPropiedades: `SELECT * FROM propiedades`,
    maxSuperficieCasaDec: `SELECT p.descripcion, max(pr.superficie) as MAX_SUPERFICIE FROM provincias p
    JOIN propiedades pr ON pr.id_provincia = p.id_provincia
    JOIN tipo_propiedad tp ON tp.id_tipo_propiedad = pr.id_tipo_propiedad
    WHERE tp.descripcion = "Casa"
    group by p.descripcion`
    
}