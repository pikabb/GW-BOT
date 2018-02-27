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
  db.fetchObject(`guildPrefix_${msg.guild.id}`).then(i => {
    
      // Variables - Variables make it easy to call things, since it requires less typing.
  let sender = msg.author; // This variable takes the message, and finds who the author is.
  let args = msg.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
  let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

    let prefix;

    if (i.text) {
      prefix = i.text
    } else {
      prefix = '*'
    }
  })

        try {
            let commandFile = require(`./commands/${cmd}.js`); // This will assign that filename to commandFile
            commandFile.run(bot, message, args, func, prefix); // This will add the functions, from the functions.js file into each commandFile.
        } catch (e) { // If an error occurs, this will run.
            console.log(e.message); // This logs the error message
        } finally { // This will run after the first two clear up
            console.log(`${message.author.username} ran the command: ${cmd}`);
        }
});

pika.login(process.env.TOKEN)
