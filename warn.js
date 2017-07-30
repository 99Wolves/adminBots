exports.run = (client, message, args) => {
  if(message.mentions.users < 1) return message.reply('You must mention someone to warn them').catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permLevel:0
};

exports.help = {
name: 'warn',
description: "Issues a warning to the mentioned user ",
usage:'warn[mention]',
};
