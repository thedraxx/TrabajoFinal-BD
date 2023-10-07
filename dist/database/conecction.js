"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('inmobiliaria', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    database: 'inmobiliaria',
    password: 'root',
});
exports.default = db;
//# sourceMappingURL=conecction.js.map