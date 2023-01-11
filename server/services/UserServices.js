import User from "../models/User.js";
import { readFile } from "fs/promises";
import bcrypt from "bcrypt";

class UserServices {
    async create(user) {
        const createUser = await User.create(user);
        return createUser
    }
    async getAll() {
        const users = await User.find();
        return users
    }

    async getOne(id) {
        if (!id) {
            throw new Error("id Missing")
        }
        const user = await User.findById(id);
        return user
    }

    async upDate(user) {
        if (!user._id) {
            throw new Error("Id missing!")
        }
        const hashPassword= bcrypt.hashSync(user.password,7)
        const updatedUser = await User.findByIdAndUpdate(user._id, {...user, password:hashPassword}, { new: true });
        return updatedUser
    }

    async delete(id) {
        if (!id) {
            res.status(500).json({ message: "id Missing!" })
        }
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser
    }

    async getCacheId() {
        try {
            const userId = JSON.parse(await readFile("./cache/userCache.json", { encoding: "utf-8" }));
            //console.log(userId)
            return userId
        } catch (error) {

        }


    }
}



export default new UserServices();