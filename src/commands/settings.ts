import { EmbedColor } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

module.exports = {

    data: {

        name: "settings",

        displayName: "Settings",

        aliases: [ "gear" ]

    },

    async execute(bot: Client, message: Message, args: string[]) {
        
        const embedMessage = new EmbedBuilder();

        embedMessage.setColor(EmbedColor as HexColorString);

        embedMessage.setTitle("Sinks Settings & Gear");

        embedMessage.addFields([
            { name: "Mouse", value: "> Logitech G Pro Superlight", inline: true },
            { name: "Mouse Sensitivity", value: "> 800 DPI, 0.11 In-Game", inline: true },

            { name: "Mouse Pad", value: "> Hyper X Fury Speed", inline: false },

            { name: "Keyboard", value: "> Hyper X Blue Switches", inline: false },

            { name: "Monitor", value: "> Acer 1080p 144Hz", inline: true },
            { name: "Monitor Resolution", value: "> 1920x1080", inline: true },

            { name: "Key Binds", value: ">>> **Bandage Craft:**\n``bind b craft.add -2072273936``\n\n**F5**:\n``bind f5 effects.maxgibs -1;+graphics.lodbias 5;+physics.steps 60;+client.headlerp_inertia false;+gc.buffer 4096``\n\n**VM ADS:**\n``bind mouse1 \"+attack2;+graphics.vm_fov_scale 0;graphics.vm_fov_scale 1;\"``\n\n**ADS Sens:**\n``bind mouse1 \"+attack2;+input.sensitivity .28;input.sensitivity .2;\"``\n\n**FPS Free:**\n``bind m \"free;gc.collect\"``", inline: false },
            
            { name: "Game Settings", value: "> [Click Here](https://clips.twitch.tv/GracefulCoyDootPRChase-WKMQKc0JhgIi8a3I)", inline: true },
            { name: "Game Filters", value: "> [Click Here](https://clips.twitch.tv/AwkwardEnjoyableNightingaleTakeNRG-lcgfLaXBpLXyPRN_)", inline: true },
        ]);

        message.channel.send({ embeds: [ embedMessage ] });

    }

}