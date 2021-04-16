require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Patient = require('../models/Patients');
const Report = require('../models/report')
const Medical = require('../models/medical')
router.post('/report/pulseRate',
[
    check("id", "Please enter a valid id").notEmpty(),
    check("pulserate", "Please enter a valid Pulse Rate").notEmpty()
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const response = {
                ok: false,
                data: {
                },
                err: {
                    status: 400,
                    msg: errors.errors[0].msg
                }
            }
            return res.status(400).send(response);
        }
        try{
                    const report = new Report({
                    pulseRate : req.body.pulserate,//token.id;
                    patient: req.body.id,
                    bloodPressure: [],
                    bloodSugar: null,
                    temperature: null,
                })
                const reportsaved = await report.save()
                res.send({
                    msg: "Succsess",
                    product: reportsaved
                });
            }
            catch (error) {
                console.error(err)
                response.status(500).send({
                    msg: err.message
                });
            }
            }
            
);

router.post('/medical/medicine',
[
    check("id", "Please enter a valid id").notEmpty(),
    check("medicine", "Please enter a valid medicines").notEmpty()
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const response = {
                ok: false,
                data: {
                },
                err: {
                    status: 400,
                    msg: errors.errors[0].msg
                }
            }
            return res.status(400).send(response);
        }
        try{
                    const medical = new Medical({
                    medicine : req.body.medicine,//token.id;
                    patient: req.body.id,
                    disease: null,
                    
                })
                const reportsaved = await report.save()
                res.send({
                    msg: "Succsess",
                    product: reportsaved
                });
            }
            catch (error) {
                console.error(err)
                response.status(500).send({
                    msg: err.message
                });
            }
            }
            
);

router.post('/medical/disease',
[
    check("id", "Please enter a valid id").notEmpty(),
    check("disease", "Please enter a valid disease").notEmpty()
],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const response = {
                ok: false,
                data: {
                },
                err: {
                    status: 400,
                    msg: errors.errors[0].msg
                }
            }
            return res.status(400).send(response);
        }
        try{
                    const medical = new Medical({
                    disease : req.body.disease,//token.id;
                    patient: req.body.id,
                    medicine: null,
                    
                })
                const reportsaved = await report.save()
                res.send({
                    msg: "Succsess",
                    product: reportsaved
                });
            }
            catch (error) {
                console.error(err)
                response.status(500).send({
                    msg: err.message
                });
            }
            }
            
);



router.get('/report/pulseRate/:givenID', async(req, res, next) => {
    let er = await Report.find({$and :[{ patient: req.params.givenID },{pulseRate :{$ne:null}}]}, {pulseRate:1,date:1,_id:0})
    .sort({date:-1})
    .limit(5);
    res.send(er);
});
module.exports = router;