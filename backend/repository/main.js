const typeorm = require("typeorm");

module.exports = typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "portfolio",
    entities: ["entity/*.js"],
    logging: true,
    synchronize: true,
    entities: [
        require("../entity/Project")
    ]
})