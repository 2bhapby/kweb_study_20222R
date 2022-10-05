const express = require('express');
const port = 3000;

const app = express();

const facto = num => {
	let res = 1;
	while (num > 1){
		res *= num;
		num -= 1;
	}
	return res;
}

app.get('/factorial', (req, res) => {
	const { number } = req.query;
	return res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
	const { number } = req.params;
	return res.send(`${facto(number)}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));