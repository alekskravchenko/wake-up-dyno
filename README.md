## Wake Up Heroku Dynos

Prevent Heroku dynos easily from going to sleep.
<br />
by: [stay](https://stayy.xyz/)

## Setup

#### Localhost

- Rename `env.example` to `.env`
- Change URL values to the dynos URL, you can add or remove URL(s), because the script loops over all the entries starting with `URL`
- Then run `yarn install` command or if yarn is not installed simply run `npm install`
- Then start the aplication with `yarn start`command or if yarn is not installed run `npm run start`
- And you are done, the script will send `GET` requests to each URL every two minutes.

#### Heroku

- Create a new Heroku app using your repository
- Deploy the app
- Then go to Settings -> Config Vars
- Add your URL(s) like that:

> set KEY to URL, URL1, URL2...
> set VALUE to your URL like: https://github.com

- Then go to Resources turn off `web` dyno and turn on `Worker`
- And you are done, the script will send `GET` requests to each URL every two minutes.
