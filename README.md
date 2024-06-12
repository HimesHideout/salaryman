# Salaryman

## Backend

Here is the link to the back end so that you can request data from an AWS account and DynamoDB: 

[be-salaryman - The Backend Module](https://github.com/HimesHideout/be-salaryman)

## Setup

### Setting up the Discord Bot 

Please follow [this](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) tutorial 
to set up your discord bot and tokens effectively.

### Installing Packages

To install all required packages, run `npm install`.

#### WARNING IF YOU ARE A WINDOWS USER:

This repo uses `NODE_ENV`, which isn't natively supported by Windows.

To solve this, please run the following command:

`npm install -g win-node-env`

This will ensure all NODE_ENV commands in this project and future projects are handled properly.

### Environment Variables

There are two files you will need: `.env.production` for your actual bot, and `.env.development` for your development bot.

There are three environment variables needed in your `.env` files:

```dotenv
#.env.production AND .env.development

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
