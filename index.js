const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

/*
 * Wake Up single Dyno
 */
const WakeUpDyno = async () => {
  const url = process.env.URL;
  const date = new Date();

  try {
    axios.get(url);
    console.log(`Dyno(${url}) has been successfully woken up, at ${date}`);
  } catch {
    console.log(`Waking Up Dyno(${url}) failed, at ${date}`);
  }
};

setInterval(WakeUpDyno, 150000);

/*
 *Wake Up Multiple Dynos
 */

/*
const WakeUpDynos = async () => {
  const urls = [process.env.URL, process.env.URL2, process.env.URL3];
  const date = new Date();

  try {
    urls.forEach((url) => {
      WakeUpDyno(url);
    });
  } catch {
    console.log(`Waking Up Dynos failed, at ${date}`);
  }
};

const WakeUpDyno = async (url) => {
  const date = new Date();

  try {
    axios.get(url);
    console.log(`Dyno(${url}) has been successfully woken up, at ${date}`);
  } catch {
    console.log(`Waking Up Dyno(${url}) failed, at ${date}`);
  }
};

setInterval(WakeUpDynos, 150000);
*/
