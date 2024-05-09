const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chat-app', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware for JSON parsing
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Server is up and running');
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        socket.broadcast.to(room).emit('message', `${username} has joined the chat`);
    });

    socket.on('sendMessage', (message, room) => {
        io.to(room).emit('message', message);
    });

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));