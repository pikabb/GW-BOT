// Must use this line of code in each command file.

exports.run = (pika, msg, args, func) => {
    msg.channel.send(pika.ping)
}

