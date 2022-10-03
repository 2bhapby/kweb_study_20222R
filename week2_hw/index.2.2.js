//readdir, stat, Stats, isDirectory, fstat
//extname, join

const fs = require('fs');
const path = require('path');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const findJs = async root => {
	const fileLists = await readdir(root);
	fileLists.forEach(async element => {
		const filePath = path.join(root, element);
		const stats = await stat(filePath);
		if (stats.isDirectory()) 
			await findJs(filePath);
		else if(path.extname(filePath) === '.js')
			console.log(filePath);
	});
};

const cur = './test';

(async () => {
	try {
		await findJs(cur);
	}
	catch (err){
		console.error(err);
	}
})();