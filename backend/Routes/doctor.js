require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const Doctor = require('../Models/doctor');
const Patient = require('../Models/patient');
const Report = require('../Models/report');

// Sign-up for doctor
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
            const existedDoctor = await Doctor.findOne({ email: req.body.email });
            const existedPatient = await Patient.findOne({ email: req.body.email });

            if (existedDoctor || existedPatient) {
                const response = {
                    ok: false,
                    data: {
                    },
                    err: {
                        status: 400,
                        msg: "email is already in use please try another email"
                    }
                }
                return res.status(400).send(response);
            }

            if(req.body.private_key == undefined || req.body.private_key !== process.env.DOCTOR_SECRET){
            	const response = {
                    ok: false,
                    data: {
                    },
                    err: {
                        status: 400,
                        msg: "You can not register, please enter valid private_key"
                    }
                }
                return res.status(400).send(response);
            }

            const { password: plainTextPassword } = req.body;

            const salt = await bcrypt.genSaltSync(10);
            const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

            const doctor = new Doctor({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                contact_number: req.body.contact_number,
            });

            const savedDoctor = await doctor.save();

            const response = {
                ok: true,
                data: {
                    status: 200,
                    msg: "Doctor has been registered",
                    user: savedDoctor
                },
                err: {
                }
            }
            res.status(200).send(response);
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

// Sign-in for doctor
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
            const doctor = await Doctor.findOne({ email: req.body.email });
            if (!doctor) {
                const response = {
                    ok: false,
                    data: {
                    },
                    err: {
                        status: 400,
                        msg: "Doctor is not registered"
                    }
                }
                return res.status(400).send(response);
            }

            const validatePASSWORD = await bcrypt.compare(req.body.password, doctor.password);
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

            const response = {
                ok: true,
                data: {
                    status: 200,
                    msg: "Doctor has been Logged In",
                    doctor: doctor,
                },
                err: {
                }
            }

            return res.status(200).send(response);

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

module.exports = router;