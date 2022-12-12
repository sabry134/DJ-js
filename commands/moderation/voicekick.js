module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["MOVE_MEMBERS"]))
      return message.channel.send(
        "I Don't Have Proper Permissions To Use This Command! I need the Move Members permission!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Please Mention User That You Want To Kick From Voice Channel!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`User Is Not In Any Voice Channel!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`User Has Been Kicked From Voice Channel!`)
  }
};