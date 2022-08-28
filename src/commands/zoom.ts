import { EmbedColor } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "zoom",

        displayName: "Zoom",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setTitle("Zoom Bind");

        embedMessage.setDescription("bind mouse2 +graphics.fov 90;graphics.fov 70")
        
        message.channel.send({ embeds: [ embedMessage ] });

    }

}