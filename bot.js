const Discord = require('discord.js');
const pika = new Discord.Client();
const db = require('quick.db');

// Functions - File
const func = require('./functions.js');

// Ready - Listeners

pika.on('ready', () => {
  // The pika will play this until you change it
  pika.user.setGame('~help')

  // We can post into the console that the pika launched.
  console.log('pika started.');
});

// Listener Event: Runs whenever a message is received.
pika.on('message', message => {
      
  // We want to make sure there is a GUILD, and it is not in DMs
  if (message.channel.type != 'text') return message.channel.send('Please use commands in the server!')

  // Global Settings - We need the prefix to change every time a message is run.
  db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => { // This fetches the current prefix, if none is supplied it would be an empty string.

      let prefix;

      if (i.text) { // This will run if i.text(exisiting prefix) is defined...
          prefix = i.text
      } else { // This will run if i.text(existing prefix) is not defined...
          prefix = '~' // You can set this to your default prefix
      }

      // Variables - Variables make it easy to call things, since it requires less typing.
      let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
      let sender = message.author; // This variable takes the message, and finds who the author is.
      let args = message.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
      let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

      // Message Leveling System - Make sure you require quick.db
      db.updateValue(message.author.id + message.guild.id, 1).then(i => { // You pass it the key, which is authorID + guildID, then pass it an increase which is 1 in this instance.
          // It also returns the new updated object, which is what we will use.

          let messages; // Create an empty variable - These IF statements will run if the new amount of messages sent is the same as the number.
          if (i.value == 25) messages = 25; // Level 1
          else if (i.value == 50) messages = 50; // Level 2
          else if (i.value == 100) messages = 100; // Level 3 - You can set these to any number, and any amount of them.

          if (!isNaN(messages)) { // If messages IS STILL empty, run this.
              db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => { // This returns the updated object of userLevel_ID. 
                  message.channel.send(`You sent ${messages} messages, so you leveled up! You are now level ${o.value}`) // Send their updated level to the channel.
              })
          }

      })

      // We also need to make sure it doesn't respond to pikas
      if (sender.pika) return;
      if (!message.content.startsWith(prefix)) return; // We also want to make it so that if the message does not start with the prefix, return.
    
      try {
          let commandFile = require(`./commands/${cmd}.js`); // This will assign that filename to commandFile
          commandFile.run(pika, message, args, func, prefix); // This will add the functions, from the functions.js file into each commandFile.
      } catch (e) { // If an error occurs, this will run.
          console.log(e.message); // This logs the error message
      } finally { // This will run after the first two clear up
          console.log(`${message.author.username} ran the command: ${cmd}`);
      }
  })

});

pika.login(process.env.TOKEN)



