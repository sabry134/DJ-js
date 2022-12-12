const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "removerole",
  aliases: ["rmrole", "-role"],
  category: "moderation",
  description: "Remove role from any user",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first();
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You Dont Have The Permissions To Remove Roles To Users! - [MANAGE_ROLES]**");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("**I Dont Have The Permissions To Remove Roles To Users! - [MANAGE_ROLES]**");
    if(!target) return message.reply(`I am unable to find the user`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`I am unable to find the role`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${rrole} role removed from ${target}`)
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)
    
  }
}