# Dumpy Bot

## Setup

### Setting up the Discord Bot 

Please follow [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) tutorial 
to set up your discord bot and tokens effectively.

### Environment Variables

There are three environment variables needed in your `.env` file:

```js
// .env

DISCORD_TOKEN=your_dev_token
GUILD_ID=your_guild_id
CLIENT_ID=your_client_id
```

Your Discord token is the generated private token from your **Bot** section of your developer page.

Your Guild id can be found by allowing developer mode in discord and then right-clicking on the server icon of your 
server and clicking "Copy Id".

Your Client ID is found on the main page of your bot, under **Application ID**.

### Running the bot

First run `node deploy-commands.js` to initialize your slash commands

Finally, run `node index.js` and the bot should become active


## Features

TBC