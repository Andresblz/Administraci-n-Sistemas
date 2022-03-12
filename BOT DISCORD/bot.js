const { Client, Intents } = require('discord.js');
const token = "TOKEN_BOT";

// Create a new client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const message = process.argv[2];

function inicio(message) {
    var d = new Date,
        dformat = [d.getMonth()+1,
                   d.getDate(),
                   d.getFullYear()].join('/')+' '+
                  [d.getHours(),
                   d.getMinutes(),
                   d.getSeconds()].join(':');
                   
    if(message === "ini") {
        bot.on('ready', () => {
            const channel = bot.channels.cache.find(channel => channel.id === "ID_CANAL");
            channel.send("El Sistema Se Ha Encendido: "+dformat);
        });
    } else if(message === "fin") {
        bot.on('ready', () => {
            const channel = bot.channels.cache.find(channel => channel.id === "ID_CANAL");
            channel.send("El Sistema Se Ha Apagado: "+dformat);
        });
    }
}

bot.login(token);
inicio(message);