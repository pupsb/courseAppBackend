import jwt from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET

function userMiddleware(req,res,next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_SECRET)
    if (decded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: "user is not authenticated"
        })
    }
}

export {
    userMiddleware
}