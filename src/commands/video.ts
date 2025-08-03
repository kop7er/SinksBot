import { EmbedColor, YoutubeChannelID } from "../config.json";

import { Client, EmbedBuilder, HexColorString, Message } from "discord.js";

// @ts-ignore
import { getChannelVideos } from "yt-channel-info";

module.exports = {

    data: {

        name: "video",

        displayName: "Video",

        aliases: [ ]

    },

    async execute(bot: Client, message: Message, args: string[]) {

        getChannelVideos({
            channelId: YoutubeChannelID,
            sortBy: "newest",
            channelIdType: 0
        }).then((response: any) => {

            if (!response.alertMessage) {

                const embedMessage = new EmbedBuilder();

                embedMessage.setColor(EmbedColor as HexColorString);
    
                embedMessage.setTitle(response.items[0].title)
    
                embedMessage.addFields([
                    { name: "View Count", value: "```" + response.items[0].viewCount + "```", inline: true },
                    { name: "Duration", value: "```" + response.items[0].durationText + "```", inline: true },
                    { name: "Published", value: "```" + response.items[0].publishedText + "```", inline: true },
    
                    { name: "Video Link", value: `https://www.youtube.com/watch?v=${response.items[0].videoId}`, inline: false }    
                ]);
    
                embedMessage.setImage(`https://img.youtube.com/vi/${response.items[0].videoId}/maxresdefault.jpg`)
    
                message.channel.send({ embeds: [ embedMessage ] });

            } else {

                message.channel.send({ content: "There was an error!" });
            
            }

        }).catch((err: any) => {

            console.log(err);

            message.channel.send({ content: "There was an error!" });

        });

    }

}