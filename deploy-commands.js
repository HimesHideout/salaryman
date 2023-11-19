import {REST, Routes} from "discord.js";

import fs from "node:fs";
import path, {dirname} from "node:path";
import {config} from "dotenv";
import {fileURLToPath, pathToFileURL} from 'url';
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const ENV = process.env.NODE_ENV
const pathToCorrectFile = `${__dirname}/.env.${ENV}`;
config({ path: pathToCorrectFile });

const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID
const token = process.env.DISCORD_TOKEN

const commands = [];
// Grab all the command files from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const { default: command } = await import (pathToFileURL(filePath));
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
    try {
        console.log(chalk.yellow(`Started refreshing ${commands.length} application (/) commands.`));

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        console.log(chalk.green(`Successfully reloaded ${data.length} application (/) commands.`));
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();