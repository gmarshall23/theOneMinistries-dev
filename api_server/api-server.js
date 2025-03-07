const express = require('express');
const cors = require('cors');
// for authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
// require("dotenv").config();
const rateLimit = require('express-rate-limit');
// for routes
const routes = require('./routes/routes.js');
const User = require('./models/User.js');
require("./database/mongoose-connection.js");

// for environment variables
dotenv.config();
const app = express();
const PORT = process.env.API_PORT || 4040;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

// CORS middleware configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(limiter);

let refreshTokens = [];
// Generate Access Token
const generateAccessToken = (user) => {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// Generate Refresh Token
const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  return refreshToken;
};
// user login endpoints located here for testing only
// will be moved to routes.js later
// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // const user = users.find(u => u.username === username);
  const user = await User.findOne({username: username});
  user ? console.log("check", user.firstName) : console.log("no user exists");
  if (!user) {
    return res.status(404).send('User not found');
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send('Invalid password');
  }

  const accessToken = generateAccessToken({ id: user.id });
  const refreshToken = generateRefreshToken({ id: user.id });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });

  res.status(200).send({
    accessToken,
    user: {
      id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      history: user.history,
      morals: user.morals,
      studyStartDate: user.studyStartDate
    }
  });
});
// Token refresh route
app.post('/token', (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken || !refreshTokens.includes(refreshToken)) {
    return res.status(403).send('Refresh token not found');
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send('Invalid refresh token');
    }

    const accessToken = generateAccessToken({ id: user.id });
    res.status(200).send({ accessToken });
  });
});
// Logout route
app.post('/logout', (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  refreshTokens = refreshTokens.filter(token => token !== refreshToken);
  res.clearCookie('refreshToken');
  res.status(200).send('Logged out');
});

// Protected route
app.get('/me', (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(401).send('No token provided');
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send('Failed to authenticate token');
    }

    res.status(200).send(decoded);
  });
});

app.use((req, res, next) => {
  console.log(`incoming ${req.method} request for ${req.url}`);
  next()
})

routes(app)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
