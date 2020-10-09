const express = require('express');

const PORT = process.env.NODE_PORT || 4000;

const app = express({ extended: true });

app.use(express.json());

// authorization
app.use('/api/auth', require('./routes/auth.routes'));

// chat
app.use('/api/chat', require('./routes/chat.routes'));

app.listen(PORT, () => console.log(`App listening on ${PORT} port!`));
