import { EmbedColor } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "sens",

        displayName: "Sens",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setDescription("800 dpi 0.3");
        
        message.channel.send({ embeds: [ embedMessage ] });

    }

}