# Wake Up Dyno

Prevent Web Services easily from going to sleep.

## Setup

### Localhost

- Rename `env.example` to `.env`
- Change URL values to the Web Service URL, you can add or remove URL(s), because the script loops over all the entries starting with `URL`
- Then run the `yarn install` command or if yarn is not installed simply run `npm install`
- To start the application run the `yarn start` command or if yarn is not installed run `npm run start`
- And you are done, the script will send `GET` requests to each URL every two minutes.

### Railway.app, Render.com, etc.

- Create a new app using this repository
- Set Build Command to `yarn install`
- Set Start Command to `yarn start`
- Add your URL(s) to environment variables:

> set KEY to URL, URL1, URL2...
> set VALUE to your URL like: https://github.com

- Deploy the app
- And you are done, the script will send `GET` requests to each URL every two minutes.
