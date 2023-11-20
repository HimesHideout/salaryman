import {EmbedBuilder, SlashCommandBuilder} from "discord.js";

import {updatePlayerById} from "../../api.js";


export default {
    cooldown: 3600,
    data: new SlashCommandBuilder()
        .setName('work')
        .setDescription('Work for some money'),
    async execute(interaction) {
        const userID = interaction.user.id
        const player = await updatePlayerById(userID, 20)
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