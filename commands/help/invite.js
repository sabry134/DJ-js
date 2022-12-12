const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Saturn BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Invite Me`)
    .setDescription(`• [Invite Me](https://discord.com/api/oauth2/authorize?client_id=946703481706782790&permissions=1101927557142&scope=bot)`)
    .setColor("RANDOM")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `DJ Bot`,
      client.user.displayAvatarURL(),
      message.delete()
    );
    
    message.channel .send(embed)
    
  
  }
}