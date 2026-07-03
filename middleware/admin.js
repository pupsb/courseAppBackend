import jwt from "jsonwebtoken"
const JWT_ADMINSECRET = process.env.JWT_ADMINSECRET

function adminMiddleware(req,res,next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_ADMINSECRET)
    if (decded) {
        req.userId = decoded.id;
        next();
    } else {
        res.status(403).json({
            message: "user is not authenticated"
        })
    }
}

export{
    adminMiddleware
}