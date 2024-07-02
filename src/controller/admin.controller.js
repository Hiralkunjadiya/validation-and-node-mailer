const { admin_Services } = require("../services");
const nodemailer = require("nodemailer")

const create_admin = async(req,res) => {
    try {
        //services
        const data = req.body
        const new_admin= await admin_Services.create_admin(data)
        if (!new_admin) {
            throw new Error("data not found")
        }

        //send mail to admin mail
        //nodemailer
        const transport = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            auth: {
                user:"hiralkunjadiya9@gmail.com",
                pass:"qxhvwdlbbtdyigpr"
            }
        })

        const mail_sent = await transport.sendMail({
            from:"hiralkunjadiya9@gmail.com",
            to:"vaghanipriya23@gmail.com",
            subject:"On this subject: DEMO MAIL",
            text:"heyyy priya it's me hiral"
        })

        if (!mail_sent) {
            throw new Error("Try again")
        }

        res.status(200).json({
            success: true,
            message: "Route got hitted movie & mail sent successfully",
            data: new_admin
        });
    } catch (error) {
        //error
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_admin
}