import { Sequelize } from "sequelize";

const db = new Sequelize('multirole_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;