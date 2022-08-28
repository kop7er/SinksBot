import { EmbedColor } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "gfuel",

        displayName: "GFuel",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setDescription("Buying **GFuel**? Make sure to use code ``SINKS``, to get 10-30% off!\n\n> https://gfuel.ly/31Bmm2u")

        message.channel.send({ embeds: [ embedMessage ] });

    }

}