import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

interface Login {
  username: string;
  password: string;
}

const generateToken = (login: Login) => {
  const token = jwt.sign(login, secret, {
    expiresIn: '15min',
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token: string) => jwt.verify(token, secret);

export default { generateToken, verifyToken };