# Dumpy Bot

## Setup

### Setting up the Discord Bot 

Please follow [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) tutorial 
to set up your discord bot and tokens effectively.

### Environment Variables

There are two files you will need: `.env.production` for your actual bot, and `.env.development` for your development bot.

There are three environment variables needed in your `.env` files:

```js
// .env.production AND .env.development

DISCORD_TOKEN=your_token
GUILD_ID=your_guild_id
CLIENT_ID=your_client_id
```

Your Discord token is the generated private token from your **Bot** section of your developer page.

Your Guild id can be found by allowing developer mode in discord and then right-clicking on the server icon of your 
server and clicking "Copy Id".

Your Client ID is found on the main page of your bot, under **Application ID**.

### Running the bot
#### Development Bot

1. `npm run serve-dev-commands` to initialize your slash commands
2. `npm run dev` to host the bot

#### Production Bot

1. `npm run serve-prod-commands` to initialize your slash commands
2. `npm run prod` to host the bot

## Features

TBC