const express = require('express');
const UserController = require('./controllers/UserController');

const PORT = process.env.NODE_PORT || 3000;

const app = express();

app.use(express.json());

// создание нового пользователя
app.use('/api/auth', require('./routes/auth.routes'));

app.listen(PORT, () => console.log(`App listening on ${PORT} port!`));
