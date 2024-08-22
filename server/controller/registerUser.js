const UserModel = require("../models/UserModel");

async function registerUser(request, response) {
    try {
        const { name, email, password, profile_pic } = request.body;

        const checkEmail = await UserModel.findOne({ email });

        if (checkEmail) {
            return response.status(400).json({
                message: "User already exists",
                error: true
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}