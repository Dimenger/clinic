import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const verifyResult = jwt.verify(token, process.env.SECRET);

    req.user = verifyResult;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
};
