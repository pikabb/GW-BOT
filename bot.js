const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('successfully launched!')
});

client.on('message', message => {

    if(message.content == 'pika') {

        message.channel.sendMessage('chu!');
    }

    if(message.content == 'ian') {

        message.channel.sendMessage('is a fag');
    }
    
    if(message.content == 'person reading') {

        message.channel.sendMessage('is triple gay');
    }

    if(message.content == 'person above') {

        message.channel.sendMessage('triple gay');
    }

    if(message.content == 'person below') {

        message.channel.sendMessage('triple gay');
    }

    if(message.content == 'traps') {

        message.channel.sendMessage('are gay');
    }

    if(message.content == 'trap card') {

        message.channel.sendMessage('https://media.discordapp.net/attachments/355861481742663680/396886574953922601/XHBa71Th.jpg?width=322&height=469');
    }

    if(message.content == 'gay') {

        message.channel.sendMessage('https://cdn.discordapp.com/attachments/355861481742663680/396887057085104129/latest-1.jpg');
    }

    if(message.content == 'infinite reverse') {

        message.channel.sendMessage('https://media.discordapp.net/attachments/355861481742663680/396888457257156608/infinite.jpg');
    }


    if(message.content == 'help') {

        message.channel.sendMessage('My current commands are: pika, ian, person above, person below, person reading, traps, trap card, gay, infinite reverse');
    }
});

bot.login(process.env.BOT_TOKEN);
