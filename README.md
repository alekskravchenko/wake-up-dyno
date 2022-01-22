## Wake Up Heroku Dynos

Prevent Heroku dynos easily from going to sleep.
<br />
by: [stay](https://stayy.xyz/)

## Setup

### Single or Multiple URLs

#### Single URL

- Fork this repository
- Rename `env.example` to `.env`
- Delete `URL2` and `URL3`
- Change URL value to the dyno URL
- Then follow the steps down below

#### Mulitple URLs

- Fork this repository
- Rename `env.example` to `.env`
- ADD or DELETE URL values
- Change URL values to the dynos URL
- Go to `index.js`
- COMMENT Wake Up single Dyno section
- UNCOMMENT Wake Up Multiple Dynos section
- Then follow the steps down below

### Running the APP

#### Localhost

- Rename `env.example` to `.env`
- Change URL values to the dynos URL
- Then run `yarn install` command or if yarn is not installed simply run `npm install`
- The start the aplication with `yarn start`command or if yarn is not installed run `npm run start`
- And you are done, the script will send `GET` requests to the URL(s)

#### Heroku

- Create a new Heroku app using your repository
- Deploy the app
- Then go to Settings -> Config Vars
- Add your URL(s) like that:

> set KEY to URL
> set VALUE to your URL like: https://github.com

- Then go to Resources turn off `web` dyno and tourn on `Worker`
- And you are done, the script will send `GET` requests to the URL(s)
