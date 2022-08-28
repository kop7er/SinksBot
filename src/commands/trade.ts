import { Client, Message } from "discord.js";

module.exports = {

    data: {

        name: "trade",

        displayName: "Trade",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {

        message.channel.send({ content: "<https://steamcommunity.com/tradeoffer/new/?partner=842739293&token=uPU0VR4z>" });

    }

}