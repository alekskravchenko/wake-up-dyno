const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const WakeUpDynos = async () => {
  Object.entries(process.env).forEach((entry) => {
    if (!entry[0].startsWith('URL')) return;

    try {
      await axios.get(entry[1]);
      console.log(`Dyno(${entry[1]}) has been successfully woken up, at ${new Date()}`);
    } catch {
      console.error(`Waking Up Dyno(${entry[1]}) failed, at ${new Date()}`);
    }
  });
};

setInterval(WakeUpDynos, 2 * 60 * 1000);
