const { body } = require('express-validator');
const validationResultCustom = require('../utility/validationResultCustom');

const router = require('express').Router();
require('../repository/main').then(
    con => {
        var projectRepository = con.getRepository("Project");

        router.get('/', (req, res) => {
            projectRepository.find().then(projects => {
                res.jsend.success(projects);
            });
        });

        router.get('/:id', (req, res) => {
            projectRepository.findOne(req.params.id).then(projects => {
                res.jsend.success(projects);
            });
        });

        router.post("/", body("annoInizio").exists().withMessage("è obbligatorio").bail()
            .isNumeric().withMessage("non è valido").bail()
            .isAfter("1990").withMessage("anno più piccolo di 1990")
            .isBefore("" + (new Date).getFullYear()).withMessage("anno maggiore di " + (new Date).getFullYear()),
            body("nome").exists().withMessage("è obbligatorio").bail()
                .isLength({ min: 1, max: 50 }).withMessage("lungezza erratta"),
            body("descrizione").exists().withMessage("è obbligatorio"),
            body("url").exists().withMessage("è obbligatorio").bail()
                .isURL({ require_protocol: true }).withMessage("non valido").bail()
                .custom(v => {
                    return projectRepository.count({ url: v }).then(count => {
                        if (count === 1) {
                            return Promise.reject("gia in uso")
                        }
                    })
                }).withMessage("gia in uso")
            , (req, res) => {
                const errors = validationResultCustom(req).array();
                if (errors.length > 0) {
                    res.statusCode = 400;
                    res.jsend.fail(errors);
                } else {
                    const project = projectRepository.create();
                    project.nome = req.body.nome;
                    project.descrizione = req.body.descrizione;
                    project.url = req.body.url;
                    project.annoInizio = req.body.annoInizio;
                    projectRepository.save(project).then(p => {
                        res.statusCode = 201;
                        res.jsend.success(p);
                    }).catch(e => {
                        res.statusCode = 500;
                        res.jsend.error(JSON.stringify(e));
                    });
                }
            });

        router.delete("/:id", (req, res) => {
            projectRepository.delete(req.params.id).then(p => {
                res.jsend.success(p.affected);
            });
        });

        router.put('/:id', body("annoInizio").exists().withMessage("è obbligatorio").bail()
            .isNumeric().withMessage("non è valido").bail()
            .isAfter("1990").withMessage("anno più piccolo di 1990")
            .isBefore("" + (new Date).getFullYear()).withMessage("anno maggiore di " + (new Date).getFullYear()),
            body("nome").exists().withMessage("è obbligatorio").bail()
                .isLength({ min: 1, max: 50 }).withMessage("lungezza erratta"),
            body("descrizione").exists().withMessage("è obbligatorio"),
            body("url").exists().withMessage("è obbligatorio").bail()
                .isURL({ require_protocol: true }).withMessage("non valido").bail()
                .custom(async v => {
                    const count = await projectRepository.count({ url: v });
                    if (count === 1) {
                        return Promise.reject("gia in uso");
                    }
                }).withMessage("gia in uso")
            , (req, res) => {
                const errors = validationResultCustom(req).array();
                if (errors.length > 0) {
                    res.statusCode = 400;
                    res.jsend.fail(errors);
                } else {
                    res.jsend.error("funzione non ancora implementata")
                }
            });
    }
);

module.exports = router