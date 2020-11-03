const http = require('http');
const express = require('express');
const cors = require('cors');
const io = require('socket.io');
const path = require('path');

// setup server
const app = express();
const server = http.createServer(app);

const socketIo = io(server);

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// whitelist domain for cors

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "https://friendly-blackwell-915b88.netlify.app",
    ],
  })
);

// Render a API index page
app.get('/', (req, res) => {
  res.send("<h2>Welcome to the chat API</h2>");
});

// Start listening
const PORT = 4000
server.listen(process.env.PORT || 4000);
console.log(`Started on port ${PORT}`);
// Setup socket.io
socketIo.on('connection', socket => {
  const username = socket.handshake.query.username;
  console.log(`${username} connected`);

  socket.on('client:message', data => {
    console.log(`${data.username}: ${data.message}`);

    // message received from client, now broadcast it to everyone else
    socket.broadcast.emit('server:message', data);
  });

  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
  });
});
