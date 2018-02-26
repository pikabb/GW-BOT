const Discord = require('discord.js');
const bot = new Discord.Client();
const p = "*" //This is the prefix. You can always change this when ever.

bot.on('ready', () => {
console.log('successfully launched!')
});

//who ever the fuck you are messing with our bot. stop

bot.on('message', msg => { //Message Handler. PS: Msg is better
const args = msg.content.slice(p.length).trim().split(/ +/g);
const command = args.shift().toLowerCase(); //This is a easier way then putting msg.content == all the time
if (msg.author.bot) return;

    if(command == 'hey!') {
        msg.channel.send('Listen!');
    }

    if(command == 'pika') {
        msg.channel.send('chu!');
    }

    if(command == 'ian') {
        msg.channel.send('is a fag');
    }
    
    if(command == 'person reading') {
        msg.channel.send('is triple gay');
    }

    if(command == 'person above') {
        msg.channel.send('is triple gay');
    }

    if(command == 'person below') {
        msg.channel.send('is triple gay');
    }

    if(command == 'traps') {
        msg.channel.send('are gay');
    }

    if(command == 'trap card') {
        msg.channel.send('https://media.discordapp.net/attachments/355861481742663680/396886574953922601/XHBa71Th.jpg?width=322&height=469');
    }

    if(command == 'gay') {
        msg.channel.send('https://cdn.discordapp.com/attachments/355861481742663680/396887057085104129/latest-1.jpg');
    }

    if(command == 'infinite reverse') {
        msg.channel.send('https://media.discordapp.net/attachments/355861481742663680/396888457257156608/infinite.jpg');
    }


    if(command == 'help') {
        msg.channel.send('My current commands are: pika, ian, person above, person below, person reading, traps, trap card, gay, infinite reverse, shit, my avatar, doctora wark, hey, ..... Use `` before typing in the commands!');
    }

    if(command == 'BEGONE') {
        msg.channel.send('THOT');
    }

    if(command == 'RISE PIKA MAN!') {
        msg.channel.send('PIKA!!!');
    }

    if(command == 'shit') {
        msg.channel.send('https://media.discordapp.net/attachments/342748315315732480/412094393504497664/shirt.gif?width=261&height=468');
    }
    
    if(command == 'doctora wark') {
         msg.channel.send(' You MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOST FEENESH')
    }

     if(command == 'wark') {
         msg.channel.send(' You MOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOST FEENESH')
    }
  
    if(command == 'nathaniel beard go to the office with your father for cussing') {
        msg.channel.send('https://media.discordapp.net/attachments/342748315315732480/412094393504497664/shirt.gif?width=261&height=468');
    }
    
    if (command == "eval") {
        if (!msg.author.id == "228349229230325760") return msg.channel.send("Command only used by PainFX for testings.")
        
              try {
        const com = eval(msg.content.split(" ").slice(1).join(" "));
        msg.channel.send('```\n' + com + '```');
      } catch(e) {
        msg.channel.send('```js\n' + e + '```');
      }
    }
    
      if (command == 'my avatar') {
    msg.reply(msg.author.avatarURL);
      }
});

bot.login('NDE2MzE1ODIyOTY1Nzg0NTc3.DXCtYw.SSBfHfjwDt0Z2fFz0SO9meDikyU');
