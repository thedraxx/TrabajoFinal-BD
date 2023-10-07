import {Sequelize} from 'sequelize';


const db = new Sequelize('inmobiliaria', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    database: 'inmobiliaria',
    password: 'root',
});


export default db;