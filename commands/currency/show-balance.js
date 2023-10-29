const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const fs = require("fs")
const {createUser} = require("../../utils");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('showbalance')
        .setDescription('Shows your balance'),
    async execute(interaction) {
        const userID = interaction.user.id
        const data = JSON.parse(fs.readFileSync("__tests__/test-data.json", "utf-8"))
        if (data[userID] === undefined){
            createUser(userID)
            await interaction.reply(`No user profile! User created. Balance: 0`);
        } else {
            const exampleEmbed = new EmbedBuilder()
                .setTitle(`${interaction.user.tag}`)
                .setDescription(`Balance: ${data[userID].balance}`)
                .setThumbnail(interaction.user.displayAvatarURL())
            await interaction.reply({embeds: [exampleEmbed]});
        }
    },
};