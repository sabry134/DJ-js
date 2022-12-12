const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setTitle("**Here are __DJ Bot__ commands**")
      .setDescription("**Command Parameters: <> is strict & [] is optional**")
      .addField(
        "• **ADMIN**",
        "```announce, bug, addrole, ban, purge, hackban, kick, lock, mute, removerole, resetwarns, setnick, setmodlog, slowmode, unlock, unmute, voicekick, warn, warnings, nuke```"
      )
      .addField(
        "• **GENERAL**",
        "```servericon , calculator , invite , membercount ,  help , serverinfo , leaderboard``` "
      )
      .addField(
        "• **GIVEAWAY**",
        "```gstart , gend , greroll```"
      )
      .addField(
        "• **SUGGESTION**",
        "```sreply, setsuggest, suggest```"
      )
      .addField(
        "• **UTILITY**",
        "```discriminator, findemoji, haste, sudo```"
      )
    
      .addField(
        "• **LEVEL**",
        "```lb, rank```"
      )
      .addField(
        "• **SEARCH**",
        "```anime, discord, github, imbd, npm, twitter```"
      )
      .addField(
        "• **ECONOMY**",
        "```balance, daily, fish, addmoney, beg, buy, deposit, leaderboard, pay, removemoney, roulette, sell, slots, shop, coins-system, withdraw, work```"
      )
      .addField(
        "• **Backup**",
        "```backup-load, info-backup, backup-create```"
      )
      .addField(
        "• **INFO**",
        "```inv, help, invite, invites, badges, botinfo, embedgen, imdb, ping, pokemon, serverinfo, servericon, snipe, uptime, userinfo``` "
      )
      .addField(
        "• **MUSIC**",
        "```loop, clear, disable-loop, join, leave, nowplaying, play, playlist, pause, queue, resume, shuffle, skip, stop, volume```"
      )
      .addField(
        "• **IMAGE**",
        "```neko, slap, love, triggered, achievement, avatarfusion, panda``` "
      )
      .addField(
        "• **MODERATION**",
        "```purge , slowmode , mute , unmute ,   nuke```"
      )
      .addField(
        "• **OWNER**",
        "```eval , gi , serverlist```"
      )
      .addField(
        "• **FUN**",
        "```advice, ascii, (cat), cry, (dog), fact, hug, kiss, math, meme, pat, punch, avatar``` "
      )
      .addField('Important Links ','**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=946703481706782790&permissions=1101927557142&scope=bot)**  | **[Website](https://www.dj-bot.tk/)**')
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(
      `DJ Bot`,
      client.user.displayAvatarURL(),
      message.delete()
    );

      message.channel.send(helpEmbed)

  },
};