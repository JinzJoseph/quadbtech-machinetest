import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    //console.log(user)
    req.user = user;

    next();
  });
};
