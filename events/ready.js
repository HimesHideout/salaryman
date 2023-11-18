import {Events} from "discord.js";
import chalk from 'chalk';

export default {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`${chalk.green("Ready!")} ${chalk.blue(`Logged in as ${client.user.tag}`)}`);
    },
};