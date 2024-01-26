import {EmbedBuilder, SlashCommandBuilder} from "discord.js";

import {getItemsInShop} from "../../api.js";

export default {
    data: new SlashCommandBuilder()
        .setName("shop")
        .setDescription("Opens the shop"),
    async execute(interaction) {
        const items = await getItemsInShop()
        if (items.length === 0){
            await interaction.reply("The shop is empty. Come back later!")
            return
        }
        const shopEmbed = new EmbedBuilder()
            .setColor("#F47521")
            .setTitle("Welcome to the shop!")
            .setFields(items.map(item => {
                return {
                    name: `${item.name} - ${item.price} dumpys`,
                    value: item.description
                }
            }))
            .setImage("https://static.wikia.nocookie.net/kuniokun/images/d/d1/Cruncyroll-Hime_RCG_SC.png/revision/latest/scale-to-width-down/1000?cb=20231107205639")
        interaction.channel.send({embeds: [shopEmbed]})
    }
}