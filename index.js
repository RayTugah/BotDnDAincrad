const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzMzNDQ5OTg5MTExNjc2OTM4.XxDYRw.Hz_OM8W9gi6tG83fXCIQEkdeNdc';

const PREFIX = '?';

var version = '__**v0.0.1**__';

var actualización = '_17-07-2020_';

bot.on('ready', () =>{
    console.log('Bot encendido!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){
        case 'hechizos':
            const embed_hechizos = new Discord.MessageEmbed()
            .setTitle('Hechizos')
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_hechizos);
            break;
        case 'dotes':
            const embed_dotes = new Discord.MessageEmbed()
            .setTitle('Dotes')
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dotes);
            break;
        case 'clases':
            const embed_clases = new Discord.MessageEmbed()
            .setTitle('Clases')
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_clases);
            break;
        case 'utilidad':
            const embed_utilidad = new Discord.MessageEmbed()
            .setTitle('Utilidades')
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_utilidad);
            break;
        case 'comandos':
            const embed_comandos = new Discord.MessageEmbed()
            .setTitle('Listado de comandos disponibles')
            .addField('?info', 'Obtén información del bot')
            .addField('?hechizos', 'Obtén la lista de hechizos de D&D 3.5e')
            .addField('?dotes', 'Obtén la lista de dotes de D&D 3.5e')
            .addField('?clases', 'Obtén la lista de clases de D&D 3.5e')
            .addField('?utilidad', 'Obtén la lista de todos los demás comandos disponibles para utilidades de D&D 3.5e')
            .setColor(0xFFB600)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_comandos);
            break;
        case 'info':
            const embed_info = new Discord.MessageEmbed()
            .setTitle('__**D&D BOT**__')
            .setDescription('Este sistema, está diseñado y programado para facilitar la gestión de toda la información relevante a **D&D**. \n\nSi tienes cualquier duda, sugerencia o queja, puedes dirigirla al desarrollador del mismo que estará abajo reseñado o a cualquier miembro de la administración para que lo hagan llegar. \n\u200B')
            .addField('Desarrollado por', '<@287929373967908865> __**(Ray#1111)**__', true)
            .addField('Versión', version + ' _(beta)_', true)
            .addField('Ult.Actualización', actualización, true)
            .setColor(0xFFF300)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_info);
            break;
        case 'clear':
            if(!args[1]) return message.reply('Por favor especifica el número')
            message.channel.bulkDelete(args[1]);
            break;

    }
})

bot.login(token);