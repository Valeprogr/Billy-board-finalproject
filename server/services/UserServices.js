import User from "../models/User.js";

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
        const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true });
        return updatedUser
    }

    async delete(id) {
        if (!id) {
            res.status(500).json({ message: "id Missing!" })
        }
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser
    }
}

export default new UserServices();