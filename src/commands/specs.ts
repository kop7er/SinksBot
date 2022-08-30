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
            { name: "CPU", value: "> Ryzen 7 5800X3D", inline: false },

            { name: "GPU", value: "> RTX 2080TI", inline: false },

            { name: "RAM", value: "> 64GB DDR4 3600MHz CL15", inline: false }
        ]);

        message.channel.send({ embeds: [ embedMessage ] });

    }

}