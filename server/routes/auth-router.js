import { json, Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import bcrypt from "bcrypt";
//fs ti permette di scrivere file e leggere file
import { writeFile } from "fs/promises";


const router = new Router();

router.post("/signin", async (req, res) => {
    try {
        const { email, password, name, lastname, company_name } = req.body;
        const candidate = await User.findOne({ email: email });
        //console.log(candidate);


        if (candidate) {
            return res.status(400).json({ message: "user already exist...", status: "error" });
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        console.log(hashPassword)
        const user = new User({ name, lastname, email, password: hashPassword, company_name });
        console.log(user);
        await user.save();
        res.status(201).json({ message: "user created..." })
    } catch (error) {
        res.status(500).json({ message: "error", status: "internal error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        console.log(user)
        if (!user) {
            return res.status(400).json({ message: "user not found", status: "error" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: `incorrect password...` })
        }
        // try {
        //     await writeFile('./cache/userCache.json', JSON.stringify({ id: user._id }));
        //     console.log("sto scrivendo")
        // } catch (error) {
        //     console.log(error)
        // }

        const token = sign(
            { userId: user.password.toString() },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token, company_name: user.company_name, user_id: user._id })

    } catch (error) {
        res.status(500).json({
            message: "error", status: "error"
        })
    }
})

router.post("/createNewEmployee", async (req, res) => {
    try {
        const { email, password, name, lastname, company_name, its_Admin, user_occupation } = req.body;
        const candidate = await User.findOne({ email: email });
        console.log(candidate);


        if (candidate) {
            return res.status(400).json({ message: "user already exist...", status: "error" });
        }
        const user = new User({ name, lastname, email, password: password, company_name, its_Admin, user_occupation });
        console.log(user);
        await user.save();
        res.status(201).json({ message: "user created..." })
    } catch (error) {
        res.status(500).json({ message: "error", status: "internal error" });
    }
})
export default router;