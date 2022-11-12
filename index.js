const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const WakeUpDynos = () => {
  Object.entries(process.env).forEach(async ([key, value]) => {
    if (!key.startsWith('URL')) return;

    try {
      await axios.get(value);
      console.log(`Dyno(${value}) has been successfully woken up, at ${new Date()}`);
    } catch {
      console.error(`Waking Up Dyno(${value}) failed, at ${new Date()}`);
    }
  });
};

setInterval(WakeUpDynos, 2 * 60 * 1000);
