const express = require('express');
const app = express();
const port = 3000;

const { runQuery } = require('./database');

const getTotalFare = async (uid) => {
	const sql = `SELECT users.name, sum(round(types.fare_rate * trains.distance / 1000, -2)) as totalFare
	from tickets
	inner join users on tickets.user = users.id
	inner join trains on tickets.train = trains.id
	inner join types on trains.type = types.id
	where users.id = ${uid}`;
    const results = await runQuery(sql, uid);
    return results[0];
}
//Query로 사용자의 ID인 uid를 받아 해당 사용자가 지불해야 하는 총 요금을 응답하는 라우트

const getIsSoldOut = async (tid) => {
	const sql = `select count(tickets.id) as occupied, types.max_seats as maximum from tickets
	right join trains on trains.id = tickets.train
	inner join types on trains.type = types.id
	where trains.id = ${tid}`
	const results = await runQuery(sql, tid);
	return results[0];
}
//Query로 열차의 ID인 tid를 받아 해당 열차가 매진되었는지 판단하여 응답하는 라우트

app.get('/fare', async (req, res) => {
    try {
        const { uid } = req.query;
        const { name, totalFare } = await getTotalFare(uid);
		console.log(name, totalFare);
        return res.send(`Total fare of ${name} is ${totalFare} KRW.`);
	} catch (err) {
			console.error(err);
			return res.sendStatus(500);
} });

app.get('/train/status', async (req, res) => {
    try {
        const { tid } = req.query;
        const { occupied, maximum } = await getIsSoldOut(tid);
        const isSoldout = occupied == maximum;
		if (isSoldout)
			return res.send(`Train ${tid} is sold out`);
		else
			return res.send(`Train ${tid} is not sold out`);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
} });
app.listen(port, () => console.log(`Server listening on port ${port}!`));