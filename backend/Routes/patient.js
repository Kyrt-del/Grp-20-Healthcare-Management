require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../Models/patient');

router.post('/register',
    [
        check("name", "Please enter a valid name").notEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").notEmpty(),
        check("contact_number", "Please enter a valid contact_number").notEmpty()
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

        try {
            const existedPatient = await Patient.findOne({ email: req.body.email });
            if (existedPatient) {
                const response = {
                    ok: false,
                    data: {
                    },
                    err: {
                        status: 400,
                        msg: "User already exist"
                    }
                }
                return res.status(400).send(response);
            }

            const { password: plainTextPassword } = req.body;

            const salt = await bcrypt.genSaltSync(10);
            const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

            const patient = new Patient({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                contact_number: req.body.contact_number,
            });

            const savedPatient = await patient.save();

            const response = {
                ok: true,
                data: {
                    status: 200,
                    msg: "User has been registered",
                    user: savedPatient
                },
                err: {
                }
            }
            res.send(response);
        } catch (err) {
            const response = {
                ok: false,
                data: {
                },
                err: {
                    status: 400,
                    msg: err.message
                }
            }
            console.log(response);
            res.status(400).send(response);
        }
    }
);

router.post("/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").notEmpty()
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

        try {
            const patient = await Patient.findOne({ email: req.body.email });
            if (!patient) {
                const response = {
                    ok: false,
                    data: {
                    },
                    err: {
                        status: 400,
                        msg: "Patient is not registered"
                    }
                }
                return res.status(400).send(response);
            }

            const validatePASSWORD = await bcrypt.compare(req.body.password, patient.password);
            console.log(validatePASSWORD);
            if (!validatePASSWORD) {
                const response = {
                    ok: false,
                    data: {
                    },
                    err: {
                        status: 400,
                        msg: "Password is not valid"
                    }
                }
                return res.status(400).send(response);
            }

            const token = jwt.sign({ _id: patient._id }, process.env.TOKEN_SECRET);
            const response = {
                ok: true,
                data: {
                    status: 200,
                    msg: "Patient has been Logged In",
                    patient: patient,
                    token: token
                },
                err: {
                }
            }
            res.header('auth-token', token).send(response); // Use this token to auth
        } catch (err) {
            const response = {
                ok: false,
                data: {
                },
                err: {
                    status: 400,
                    msg: err.message
                }
            }
            console.log(response);
            res.status(400).send(response);
        }
    });

module.exports = router;