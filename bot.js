const Discord = require('discord.js');
const pika = new Discord.Client();
const db = require('quick.db');

// Ready - Listeners

pika.on('ready', () => {
  console.log('Online!')
});

pika.on('message', msg => {
  if (msg.channel.type != 'text') return msg.channel.send('Please use commands in the server!')

  // Global Settings - Prefix the can be changed
  db.fetchOject(`guildPrefix_${msg.guild.id}`).then(i => {

    let prefix;

    if (i.text) {
      prefix = i.text
    } else {
      prefix = '*'
    }
  })

  // Variables - Variables make it easy to call things, since it requires less typing.
  let sender = msg.author; // This variable takes the message, and finds who the author is.
  let args = msg.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
  let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

  if (cmd === "ping") {
    msg.chanel.send(client.ping + "!")
  }
});

pika.login(proess.env.TOKEN)
