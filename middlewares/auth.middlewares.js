const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = process.env;

module.exports = {
  restrinct: (req, res, next) => {
    let { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        status: false,
        message: 'Unauthorized',
        err: 'Missing token on header',
        data: null,
      });
    }

    jwt.verify(token, JWT_SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: false,
          message: 'Unauthorized',
          err: err.message,
          data: null,
        });
      }

      try {
        req.user = await prisma.user.findUnique({ where: { id: decoded.id } });
        next();
      } catch (error) {
        next(error);
      }
    });
  },
};