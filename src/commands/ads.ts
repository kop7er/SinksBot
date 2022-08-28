import { EmbedColor } from "../config.json"

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "ads",

        displayName: "ADS",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setTitle("ADS Bind");

        embedMessage.setDescription("bind mouse1 \"+attack2;+input.sensitivity .28;input.sensitivity .2;\"")
        
        message.channel.send({ embeds: [ embedMessage ] });

    }

}