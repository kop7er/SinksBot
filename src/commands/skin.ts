import { Client, Message } from "discord.js";

module.exports = {

    data: {

        name: "skin",

        displayName: "Skin",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {

        message.channel.send({ content: "https://steamcommunity.com/sharedfiles/filedetails/?id=2351278756" });

    }

}