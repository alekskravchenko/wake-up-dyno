const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const WakeUpDynos = async () => {
	Object.entries(process.env).forEach((entry) => {
		if (!entry[0].startsWith('URL')) return;
		const url = entry[1];

		try {
			axios.get(url);
			console.log(`Dyno(${url}) has been successfully woken up, at ${date}`);
		} catch {
			console.log(`Waking Up Dyno(${url}) failed, at ${date}`);
		}
	});
};

setInterval(WakeUpDynos, 2 * 60 * 1000);
