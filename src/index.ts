/* Config Files */

import "dotenv/config";

import { Prefix, GuildID, MemberRoleID } from "./config.json";

/* Packages */

import path from "path";

import { readdirSync } from "fs";

import { ActivityType, Client, Collection, GatewayIntentBits, GuildMember, Message } from "discord.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const bot = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ] });

bot.commands = new Collection();

const commandFiles = readdirSync(path.resolve(__dirname, "./commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    try {

        const command = require(`./commands/${file}`);

        bot.commands.set(command.data.name, command);
    
        console.log(`Loaded Command: ${command.data.displayName}`);
    
        command.data.aliases.forEach((alias: string) => {
    
            bot.commands.set(alias, command);
    
        });

    } catch (error) {

        console.error(error);

        console.log(`Failed to load Command: ${file}`);
        
    }

}

bot.on("ready", async () => {

    console.log(`${bot.user?.username} is Now Online!`);

    bot.user?.setPresence({ activities: [{ name: "@ Twitch.tv/SinksR", type: ActivityType.Streaming, url: "https://twitch.tv/sinksr" }] });

    if (MemberRoleID != "" && GuildID != "") {

        const guildMembers = await bot.guilds.cache.get(GuildID)?.members.fetch();

        guildMembers?.forEach((member: GuildMember) => {

            if (!member.roles.cache.has(MemberRoleID!)) {

                member.roles.add(MemberRoleID!);

            }

        });

    }

});

bot.on("messageCreate", (message: Message) => {

    try {

        if (message.author.bot || !message.content.startsWith(Prefix)) return;

        const args = message.content.slice(Prefix.length).trim().split(/ +/g);
        
        const command = args[0]?.toLowerCase();

        if (!command) return;

        bot.commands.get(command)?.execute(bot, message, args);
        
    } catch (error) {

        console.error(error);

        message.channel.send("There was an error trying to execute that command!");

    }

});

bot.on("guildMemberAdd", (member: GuildMember) => {

    try {

        if (MemberRoleID != "") {

            member.roles.add(MemberRoleID);

        }
        
    } catch (error) {

        console.error(error);
        
    }

});

bot.login(process.env.BOT_TOKEN);