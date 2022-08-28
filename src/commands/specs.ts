import { EmbedColor } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "specs",

        displayName: "Specs",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setTitle("Sinks Specs");

        embedMessage.addFields([
            { name: "CPU", value: "> Ryzen 9 5950x", inline: false },

            { name: "GPU", value: "> RTX 2080TI", inline: false },

            { name: "RAM", value: "> 32GB DDR4", inline: false }
        ]);

        message.channel.send({ embeds: [ embedMessage ] });

    }

}