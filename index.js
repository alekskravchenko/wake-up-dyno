const dotenv = require('dotenv');
dotenv.config();

const WakeUpDynos = () => {
  Object.entries(process.env).forEach(async ([key, value]) => {
    if (!key.startsWith('URL')) return;
    if (!value) return;

    try {
      const res = await fetch(value);
      if (!res.ok) throw res;

      console.log(`${value} has been successfully woken up, at ${new Date()}`);
    } catch {
      console.error(`Waking Up ${value} failed, at ${new Date()}`);
    }
  });
};

setInterval(WakeUpDynos, 2 * 60 * 1000);
