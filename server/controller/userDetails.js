const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken")

async function userDetails(request, response) {
    try {
        const token = request.cookies.token || "";

        const user = await getUserDetailsFromToken();

    } catch (error) {
        return reponse.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}