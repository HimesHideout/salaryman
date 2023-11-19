// Project Requirements
import path, {dirname} from "node:path";
import {fileURLToPath, pathToFileURL} from 'url';
import {config} from "dotenv";
import fs from "node:fs";
import {Client, Collection, Events, GatewayIntentBits} from "discord.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const ENV = process.env.NODE_ENV
const pathToCorrectFile = `${__dirname}/.env.${ENV}`;
config({ path: pathToCorrectFile });

// Client Creation
const token = process.env.DISCORD_TOKEN
const client = new Client({ intents: [GatewayIntentBits["Guilds"]] });

// Commands Handler
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const { default: command } = await import (pathToFileURL(filePath));
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// On Ready
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const { default: event } = await import (pathToFileURL(filePath));
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Ready Up Bot
await client.login(token);