// Project Requirements
import path, {dirname} from "node:path";
import {fileURLToPath} from 'url';
import {config} from "dotenv";
import fs from "node:fs";
import {Client, Collection, Events, GatewayIntentBits} from "discord.js";

const __filename = import.meta.url;
const __dirname = dirname(__filename)

// const __filenameWIN = fileURLToPath(import.meta.url);
// const __dirnameWIN = dirname(__filenameWIN)

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = dirname(__filenameWIN)

const ENV = process.env.NODE_ENV
const pathToCorrectFile = fileURLToPath(`${__dirname}/.env.${ENV}`);
config({ path: pathToCorrectFile });

// Client Creation
const token = process.env.DISCORD_TOKEN
const client = new Client({ intents: [GatewayIntentBits["Guilds"]] });

// Commands Handler
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(fileURLToPath(foldersPath));

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(fileURLToPath(commandsPath)).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        // const command = require(filePath);
        const { default: command } = await import (filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// On Ready
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(fileURLToPath(eventsPath)).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    // const event = require(filePath);
    const { default: event } = await import (filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Ready Up Bot
client.login(token);