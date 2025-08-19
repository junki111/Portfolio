import { createRequire } from "module";
const require = createRequire(import.meta.url);

const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const cors = require('cors')
import creds from './constants/config.js'

var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to email messages.')
    }
})

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message}`

    var mail = {
        from: name,
        to: 'junki.moturi@outlook.com',
        subject: 'New Message from Portfolio Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})
const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})