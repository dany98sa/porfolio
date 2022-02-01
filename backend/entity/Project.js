var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Project",
    tableName: "project",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        nome: {
            type: "varchar",
            length: 50,
            nullable: false
        },
        descrizione: {
            type: "text",
            nullable: false
        },
        url: {
            type: "varchar",
            unique: true,
            nullable: false
        },
        annoInizio: {
            type: "year",
            nullable: false
        }
    }
})