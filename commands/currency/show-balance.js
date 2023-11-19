import {EmbedBuilder, SlashCommandBuilder} from "discord.js";

import {getPlayerById} from "../../api.js";


export default {
    data: new SlashCommandBuilder()
        .setName('showbalance')
        .setDescription('Shows your balance'),
    async execute(interaction) {
        const userID = interaction.user.id
        const player = await getPlayerById(userID)
        if (player === undefined){
            await interaction.reply(`No user profile!`);
        } else {
            const exampleEmbed = new EmbedBuilder()
                .setTitle(`${interaction.user.tag}`)
                .setDescription(`Balance: ${player.balance}`)
                .setThumbnail(interaction.user.displayAvatarURL())
            await interaction.reply({embeds: [exampleEmbed]});
        }
    },
};