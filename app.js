const Discord = require("discord.js");
const client = new Discord.Client();
const token = require('./settings.json').token;
client.on('ready', () => {
  console.log('I am ready!');
});



client.on('guildDelete', guild => {
  console.log('I have left ${guild.name} at ${new Date()}');
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage('I have joined ${guild.name}');
});

client.on('guildMemberAdd',member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage('Please welcome ${member.user.username} to the server!')
})

client.on('guildMemberRemove' , member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage('Please say goodbye to ${member.user.username} we will miss you!');
});





var prefix = "/"
client.on('message', message => {
  let args = message.content.split('').slice(1);
  var result = args.join('');
  member => [ here ] > ) < [here] { 
});
if(!message.content.startWith(prefix)) return;
if(message.author.bot) return;
}

 
client.login('MzQwMzQ5MzI4MTM0NjM1NTIx.DFxP2g.aQznpqb-zYYSRb7pwXiVKiQ18bs');
