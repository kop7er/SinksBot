import { EmbedColor } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "social",

        displayName: "Social",

        aliases: [ "socials", "twitter", "twitch", "youtube", "discord" ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setTitle("Follow Sinks Everywhere");

        embedMessage.addFields([
            { name: "Youtube", value: "> [Sinks](https://www.youtube.com/channel/UCBLGReH8wxPMiBzScGLbFjQ)", inline: true },

            { name: "Twitch", value: "> [SinksR](https://www.twitch.tv/sinksr)", inline: true },
            
            { name: "Twitter", value: "> [@2inks](http://twitter.com/2inks)", inline: true },

            { name: "Discord", value: "> [Sinks' Discord](https://discord.gg/tVaDpUG)", inline: false }
        ]);

        message.channel.send({ embeds: [ embedMessage ] });

    }

}