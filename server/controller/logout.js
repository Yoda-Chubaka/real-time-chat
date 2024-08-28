async function logout(request, response) {
    try {
        const cookieOptions = {
            http: true,
            secure: true
        }

        return response.cookie("token", "", cookieOptions).status(200).json({
            message: "Session out",
            success: true
        })
    } catch (error) {
        return response.status(500).json({
            messahe: error.message || error,
            eror: true
        })
    }
}

module.exports = logout;