const express = require('express');
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.render('login.pug');
	return next;
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	return res.send(`username is ${username}, password is ${password}
	`);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));