const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    console.log('successfully launched!')
});
bot.on('message', message => {
if (message.author.bot) return;

    if(message.content == ')pika') {

        message.channel.sendMessage('chu!');
    }

    if(message.content == '*ian') {

        message.channel.sendMessage('is a fag');
    }
    
    if(message.content == '*person reading') {

        message.channel.sendMessage('is triple gay');
    }

    if(message.content == '*person above') {

        message.channel.sendMessage('triple gay');
    }

    if(message.content == '*person below') {

        message.channel.sendMessage('triple gay');
    }

    if(message.content == '*traps') {

        message.channel.sendMessage('are gay');
    }

    if(message.content == '*trap card') {

        message.channel.sendMessage('https://media.discordapp.net/attachments/355861481742663680/396886574953922601/XHBa71Th.jpg?width=322&height=469');
    }

    if(message.content == '*gay') {

        message.channel.sendMessage('https://cdn.discordapp.com/attachments/355861481742663680/396887057085104129/latest-1.jpg');
    }

    if(message.content == '*infinite reverse') {

        message.channel.sendMessage('https://media.discordapp.net/attachments/355861481742663680/396888457257156608/infinite.jpg');
    }


    if(message.content == '*help') {

        message.channel.sendMessage('My current commands are: pika, ian, person above, person below, person reading, traps, trap card, gay, infinite reverse, shit. Use `!` before typing in the commands!');
    }

    if(message.content == '*BEGONE') {

        message.channel.sendMessage('***THOT***');
    }

    if(message.content == '****RISE PIKA MAN!***') {

        message.channel.sendMessage('PIKA!!!');
    }

    if(message.content == '*shit') {

        message.channel.sendMessage('https://media.discordapp.net/attachments/342748315315732480/412094393504497664/shirt.gif?width=261&height=468');
    }

    if(message.content == '*nathaniel beard go to the office with your father for cussing') {

        message.channel.sendMessage('https://media.discordapp.net/attachments/342748315315732480/412094393504497664/shirt.gif?width=261&height=468');
    }
});

bot.login('Mzk2ODgyMTQ3MzMzNjM2MDk3.DTHJ-g.vJ0VTsgr1IMa6BAnlzqp668JEjw')
