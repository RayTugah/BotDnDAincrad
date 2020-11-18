const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzMzNDQ5OTg5MTExNjc2OTM4.XxDUiA.EDUn5-Av3HOu1beqPJL7Ks-1rOA';

const prefix = '?';

var version = '**v0.2.0**';

var actualización = '_27-09-2020_';

bot.on('ready', () =>{
    console.log('Bot encendido!');
})

bot.on('message', message=>{

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const user = message.mentions.users.first(); // Devuelve la mención
    const nombre = args.slice(1).join(' '); // nombre del item (todo después de la mención)
    const command = args.shift().toLowerCase();

//////////////// HECHIZOS ///////////////
    switch(command) {
        case 'hechizos':
            const embed_hechizo1sp = new Discord.MessageEmbed()
            .setTitle('Hechizos')
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_hechizo1sp);
            break;
        case 'comunicado':
            const embed_comunicado = new Discord.MessageEmbed()
            .setTitle('Comunicado Importante')
            .setDescription('Separaremos el comunicado en 3 partes:')
            .addField('D&D Bot', '<@287929373967908865> está creando un bot que actúa como **base de datos** de D&D3.5, en el cual se incluyen tanto clases, como dotes, como hechizos. Cualquier sugerencia o ayuda está tremendamente aceptada y agradecida!')
            .addField('d20', 'Creado un nuevo rol llamado **d20**, este rol te dará acceso tanto al bot de d&d, como a las salas de los libros de D&D5e y 3.5e, además de a una sala de conversación de rol y a salas de busqueda de partidas y anuncios de nuevas partidas que están por venir')
            .addField('\u200B', '\u200B')
            .addField('¿Cómo acceder al rol y al bot?', 'deberás entrar a la sala <#683314561004339280> y hacer click en la reacción del dado rojo. Automáticamente podrás ver todas las salas en cuestión.')
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_comunicado);
            message.channel.send("@everyone ");
            break;
//////////////////////////////////////// 
        case 'aaaaa':
            const embed_hechizos = new Discord.MessageEmbed()
            .setTitle('Hechizos')
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_hechizos);
            break;
//////////////// CLASES ///////////////
        case 'clases':
            message.delete()
            const embed_clases = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/KZarKPR.jpg')
            message.channel.send(embed_clases);
            break;
///////////////////////////////////////
        case 'alma_predilecta':
            message.delete()
            const embed_alma = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/AlmaPredilecta35.php')
            .setImage('https://i.imgur.com/sasBPSj.png')
            message.channel.send(embed_alma);
            break;
        case 'archivista':
            message.delete()
            const embed_archivista = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/archivista')
            .setImage('https://i.imgur.com/o7sf3jJ.jpg')
            message.channel.send(embed_archivista);
            break;
        case 'barbaro':
            message.delete()
            const embed_barbaro = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Barbaro35.php')
            .setImage('https://i.imgur.com/cQuaiuY.jpg')
            message.channel.send(embed_barbaro);
            break;
        case 'bardo':
            message.delete()
            const embed_bardo1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Bardo35.php')
            .setImage('https://i.imgur.com/uV9I6FZ.jpg')
            message.channel.send(embed_bardo1);
            const embed_bardo2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/6mBmLmd.png')
            message.channel.send(embed_bardo2);
            break;
        case 'batidor':
            message.delete()
            const embed_batidor = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Batidor35.php')
            .setImage('https://i.imgur.com/J4XACFc.png')
            message.channel.send(embed_batidor);
            break;
        case 'brujo_arcano':
            message.delete()
            const embed_brujoarcano1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/BrujoArcano35.php')
            .setImage('https://i.imgur.com/nUutLLr.jpg')
            message.channel.send(embed_brujoarcano1);
            const embed_brujoarcano2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/llwtwTd.png')
            message.channel.send(embed_brujoarcano2);
            break;
        case 'caballero':
            message.delete()
            const embed_caballero1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Caballero35.php')
            .setImage('https://i.imgur.com/4GLBIeu.jpg')
            message.channel.send(embed_caballero1);
            const embed_caballero2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/OcKVzxI.png')
            message.channel.send(embed_caballero2);
            break;
        case 'chaman_dragon':
            message.delete()
            const embed_chamandragon1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/ChamanDragon35.php')
            .setImage('https://i.imgur.com/JtY3bYj.jpg')
            message.channel.send(embed_chamandragon1);
            const embed_chamandragon2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/16hNhPJ.png')
            message.channel.send(embed_chamandragon2);
            break;
        case 'chaman_espiritual':
            message.delete()
            const embed_chamanespiritual1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/ChamanEspiritual35.php')
            .setImage('https://i.imgur.com/vDC49bm.png')
            message.channel.send(embed_chamanespiritual1);
            const embed_chamanespiritual2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/MaCkP2o.jpg')
            message.channel.send(embed_chamanespiritual2);
            break;
        case 'clerigo':
            message.delete()
            const embed_clerigo = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Clerigo35.php')
            .setImage('https://i.imgur.com/Yil6cr5.jpg')
            message.channel.send(embed_clerigo);
            break;
        case 'cruzado':
            message.delete()
            const embed_cruzado = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/cruzado')
            .setImage('https://i.imgur.com/Gu5qFAe.jpg')
            message.channel.send(embed_cruzado);
            const embed_cruzado2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/dwABKCw.png')
            message.channel.send(embed_cruzado2);
            break;
        case 'cuchillo_alma':
            message.delete()
            const embed_cuchilloalma1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/cuchillo-del-alma')
            .setImage('https://i.imgur.com/pcFd8XM.jpg')
            message.channel.send(embed_cuchilloalma1);
            const embed_cuchilloalma2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/SOoQMDn.png')
            message.channel.send(embed_cuchilloalma2);
            break;
        case 'druida':
            message.delete()
            const embed_druida = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Druida35.php')
            .setImage('https://i.imgur.com/3m1efKb.jpg')
            message.channel.send(embed_druida);
            const embed_druida2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/LG7LF1c.jpg')
            message.channel.send(embed_druida2);
            break;
        case 'embaucador':
            message.delete()
            const embed_embaucador = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Embaucador35.php')
            .setImage('https://i.imgur.com/RN3VVps.jpg')
            message.channel.send(embed_embaucador);
            break;
        case 'erudito':
            message.delete()
            const embed_erudito = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setImage('https://i.imgur.com/lgd1UK4.jpg')
            message.channel.send(embed_erudito);
            break;
        case 'espadachin':
            message.delete()
            const embed_espadachin = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Espadachin35.php')
            .setImage('https://i.imgur.com/xjo9HZ1.png')
            message.channel.send(embed_espadachin);
            break;
        case 'explorador':
            message.delete()
            const embed_explorador1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Explorador35.php')
            .setImage('https://i.imgur.com/t89RSSh.png')
            message.channel.send(embed_explorador1);
            const embed_explorador2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/IoXtCf1.png')
            message.channel.send(embed_explorador2);
            break;
        case 'filo_aojador':
            message.delete()
            const embed_filoaojador = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DnD3/Clases/FiloAojador.htm')
            .setImage('https://i.imgur.com/nuUHbwA.jpg')
            message.channel.send(embed_filoaojador);
            break;
        case 'filo_ocaso':
            message.delete()
            const embed_filoocaso = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/FiloOcaso35.php')
            .setImage('https://i.imgur.com/io1H3iw.jpg')
            message.channel.send(embed_filoocaso);
            break;
        case 'guerrero':
            message.delete()
            const embed_guerrero = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Guerrero35.php')
            .setImage('https://i.imgur.com/tJZslgz.png')
            message.channel.send(embed_guerrero);
            break;
        case 'guerrero_psi':
            message.delete()
            const embed_guerreropsiquico = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/guerrero-psiquico')
            .setImage('https://i.imgur.com/hHOk4QH.jpg')
            message.channel.send(embed_guerreropsiquico);
            break;
        case 'hechicero':
            message.delete()
            const embed_hechicero = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Hechicero35.php')
            .setImage('https://i.imgur.com/FbRGm5O.png')
            message.channel.send(embed_hechicero);
            break;
        case 'indomito':
            message.delete()
            const embed_indomito = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/indomito')
            .setImage('https://i.imgur.com/N0KH23i.jpg')
            message.channel.send(embed_indomito);
            break;
        case 'magico_guerra':
            message.delete()
            const embed_magicodeguerra = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/MagicoGuerra.php')
            .setImage('https://i.imgur.com/Xk8MAMf.png')
            message.channel.send(embed_magicodeguerra);
            break;
        case 'mago':
            message.delete()
            const embed_mago = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Mago30.php')
            .setImage('https://i.imgur.com/ciNSUMA.png')
            message.channel.send(embed_mago);
            break;
        case 'monje':
            message.delete()
            const embed_monje1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Monje30.php')
            .setImage('https://i.imgur.com/4lLYlbr.jpg')
            message.channel.send(embed_monje1);
            const embed_monje2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/L3HDl6o.jpg')
            message.channel.send(embed_monje2);
            break;
        case 'ninja':
            message.delete()
            const embed_ninja1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Ninja.php')
            .setImage('https://i.imgur.com/T8ysceU.jpg')
            message.channel.send(embed_ninja1);
            const embed_ninja2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/TFOBQ6t.png')
            message.channel.send(embed_ninja2);
            break;
        case 'oficial':
            message.delete()
            const embed_oficial = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/oficial')
            .setImage('https://i.imgur.com/CASpdwb.jpg')
            message.channel.send(embed_oficial);
            break;
        case 'paladin':
            message.delete()
            const embed_paladin1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Paladin35.php')
            .setImage('https://i.imgur.com/1hsiV77.jpg')
            message.channel.send(embed_paladin1);
            const embed_paladin2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/dL83VhX.png')
            message.channel.send(embed_paladin2);
            break;
        case 'picaro':
            message.delete()
            const embed_picaro1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Picaro35.php')
            .setImage('https://i.imgur.com/OI4EuMS.jpg')
            message.channel.send(embed_picaro1);
            const embed_picaro2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/2cpCFWw.png')
            message.channel.send(embed_picaro2);
            break;
        case 'psionico':
            message.delete()
            const embed_psionico1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Psionico30.php')
            .setImage('https://i.imgur.com/YVRlJup.jpg')
            message.channel.send(embed_psionico1);
            const embed_psionico2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/bibhJEM.png')
            message.channel.send(embed_psionico2);
            break;
        case 'robaconjuros':
            message.delete()
            const embed_robaconjuros1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/Robaconjuros35.php')
            .setImage('https://i.imgur.com/Y89vaI9.jpg')
            message.channel.send(embed_robaconjuros1);
            const embed_robaconjuros2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/1wCJ2Bg.png')
            message.channel.send(embed_robaconjuros2);
            break;
        case 'samurai':
            message.delete()
            const embed_samurai = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/samurai')
            .setImage('https://i.imgur.com/cABhopd.jpg')
            message.channel.send(embed_samurai);
            break;
        case 'sanador':
            message.delete()
            const embed_sanador1 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/sanador')
            .setImage('https://i.imgur.com/NeDUIJu.jpg')
            message.channel.send(embed_sanador1);
            const embed_sanador2 = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setImage('https://i.imgur.com/Vk8RjPJ.png')
            message.channel.send(embed_sanador2);
            break;
        case 'shugenja':
            message.delete()
            const embed_shugenja = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rincondeldm.com/wiki/dungeons-dragons/35/clases/shugenja')
            .setImage('https://i.imgur.com/bQVhHcX.jpg')
            message.channel.send(embed_shugenja);
            break;
        case 'wu_jen':
            message.delete()
            const embed_wujen = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('Source')
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setURL('https://www.rolroyce.com/rol/DDP/Clases/WuJen35.php')
            .setImage('https://i.imgur.com/7cNnQhD.png')
            message.channel.send(embed_wujen);
            break;
//////////////// DOTES ////////////////
        case 'dotes':
            message.delete()
            const embed_dotes = new Discord.MessageEmbed()
            .setColor(0xeae3c6)
            .setAuthor(message.author.username, message.author.avatarURL())
            .setImage('https://i.imgur.com/UxWi3Z2.jpg')
            message.channel.send(embed_dotes);
            break;
//////////////////////////////////////// 
// A LA TERCERA VA LA VENCIDA
        case 'a':
            message.delete()
            if(args[1] !== 'tercera') message.channel.send('Esta dote no existe, escríbela bien!');
            if(args[1] !== 'tercera') return;
            let la = args[0];
            let tercera = args[1];
            let va = args[2];
            let vencida = args[3];
            const embed_dote1sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-scoundrel--60/third-times-the-charm--2905/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('A LA TERCERA VA LA VENCIDA [SUERTE]')
            .setDescription('Third Time’s the Charm')
            .addField('Libro', 'Complete Scoundrel')
            .addField('Prerrequisitos', 'nivel 3º de personaje, cualquier dote de suerte, acceso al dominio de Suerte.')
            .addField('Beneficio', 'Puedes gastar una repetición de tirada de suerte como acción inmediata para utilizar el poder concedido del dominio de Suerte una vez adicional al día. \nSólo puedes usar este beneficio inmediatamente después de usar el poder concedido del dominio de Suerte (efectivamente, esta dote te permite una tercera oportunidad de tener éxito en una tirada). \n\nGanas una repetición de tirada de suerte al día.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote1sp);
            break;
        case 'third':
            message.delete()
            if(args[1] !== 'the') message.channel.send('Esta dote no existe, escríbela bien!');
            if(args[1] !== 'the') return;
            let time = args[0];
            let the = args[1];
            let charm = args[2]
            const embed_dote1en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-scoundrel--60/third-times-the-charm--2905/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('A LA TERCERA VA LA VENCIDA [SUERTE]')
            .setDescription('Third Time’s the Charm')
            .addField('Libro', 'Complete Scoundrel')
            .addField('Prerrequisitos', 'nivel 3º de personaje, cualquier dote de suerte, acceso al dominio de Suerte.')
            .addField('Beneficio', 'Puedes gastar una repetición de tirada de suerte como acción inmediata para utilizar el poder concedido del dominio de Suerte una vez adicional al día. \nSólo puedes usar este beneficio inmediatamente después de usar el poder concedido del dominio de Suerte (efectivamente, esta dote te permite una tercera oportunidad de tener éxito en una tirada). \n\nGanas una repetición de tirada de suerte al día.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote1en);
            break;
// ABALANZAMIENTO FELINO
        case 'abalanzamiento':
            message.delete()
            if(args[0] !== 'felino') return message.channel.send('Esta dote no existe, escríbela bien!');
            let felino = args[0];
            const embed_dote2sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/races-of-the-wild--84/catfolk-pounce--293/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABALANZAMIENTO FELINO [GENERAL]')
            .setDescription('Catfolk Pounce')
            .addField('Libro', 'Races of The Wild')
            .addField('Prerrequisitos', 'Pueblo felino, Des 13.')
            .addField('Beneficio', 'si usas la maniobra de carga contra un enemigo desprevenido, puedes hacer un ataque completo al final de la carga.')
            .addField('Especial', 'un guerrero del pueblo felino puede elegir abalanzamiento felino como una de sus dotes adicionales.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote2sp);
            break;
        case 'catfolk':
            message.delete()
            if(args[0] !== 'pounce') return message.channel.send('Esta dote no existe, escríbela bien!');
            let pounce = args[0];
            const embed_dote2en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/races-of-the-wild--84/catfolk-pounce--293/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABALANZAMIENTO FELINO [GENERAL]')
            .setDescription('Catfolk Pounce')
            .addField('Libro', 'Races of The Wild')
            .addField('Prerrequisitos', 'Pueblo felino, Des 13.')
            .addField('Beneficio', 'si usas la maniobra de carga contra un enemigo desprevenido, puedes hacer un ataque completo al final de la carga.')
            .addField('Especial', 'un guerrero del pueblo felino puede elegir abalanzamiento felino como una de sus dotes adicionales.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote2en);
            break;
// ABALANZARSE CON DOS ARMAS
        case 'abalanzarse':
            message.delete()
            if(args[2] !== 'armas') return message.channel.send('Esta dote no existe, escríbela bien!');
            let con = args[0];
            let dos = args[1];
            let armas = args[2];
            const embed_dote3sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/players-handbook-ii--80/two-weapon-pounce--2999/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABALANZARSE CON DOS ARMAS [GENERAL, GUERRERO]')
            .setDescription('Two-Weapon\'s Pounce \n\n_Cuando cargues contra un adversario empuñando dos armas, podrás realizar dos ataques con suma rapidez. Sacrificarás el ímpetu e inercia de la carga a cambio de emplear tu arma secundaria._')
            .addField('Libro', 'Manual del jugador II')
            .addField('Prerrequisitos', 'Des 15, Combate con dos armas, ataque base +6')
            .addField('Beneficio', 'cuando realices una carga y empuñes un arma en cada mano, podrás atacar con ambas. Si eliges hacerlo, perderás el bonificador obtenido normalmente a las tiradas de ataque por realizar una carga, aunque seguirás sufriendo el penalizador -2 a tu CA. \n\nNormal: cuando se realiza una carga sólo se puede realizar un ataque al final del movimiento.')
            .addField('Especial', 'un explorador que haya elegido el estilo de combate con dos armas podrá hacer uso de esta dote, siempre que posea un ataque base de +6 y lleve armadura ligera o ninguna.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote3sp);
            break;
        case 'two':
            message.delete()
            if(args[1] !== 'pounce') return message.channel.send('Esta dote no existe, escríbela bien!');
            let weapon = args[0];
            const embed_dote3en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/players-handbook-ii--80/two-weapon-pounce--2999/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABALANZARSE CON DOS ARMAS [GENERAL, GUERRERO]')
            .setDescription('Two Weapon\'s Pounce \n\n_Cuando cargues contra un adversario empuñando dos armas, podrás realizar dos ataques con suma rapidez. Sacrificarás el ímpetu e inercia de la carga a cambio de emplear tu arma secundaria._')
            .addField('Libro', 'Manual del jugador II')
            .addField('Prerrequisitos', 'Des 15, Combate con dos armas, ataque base +6')
            .addField('Beneficio', 'cuando realices una carga y empuñes un arma en cada mano, podrás atacar con ambas. Si eliges hacerlo, perderás el bonificador obtenido normalmente a las tiradas de ataque por realizar una carga, aunque seguirás sufriendo el penalizador -2 a tu CA. \n\nNormal: cuando se realiza una carga sólo se puede realizar un ataque al final del movimiento.')
            .addField('Especial', 'un explorador que haya elegido el estilo de combate con dos armas podrá hacer uso de esta dote, siempre que posea un ataque base de +6 y lleve armadura ligera o ninguna.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote3en);
            break;
// ABJURACIÓN DE ENERGÍA
        case 'abjuracion':
            message.delete()
            if(args[1] !== 'energia') return message.channel.send('Esta dote no existe, escríbela bien!');
            let de = args[0];
            let energia = args[1];
            const embed_dote4sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-mage--58/energy-abjuration--870/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABJURACIÓN DE ENERGÍA [GENERAL]')
            .setDescription('Energy Abjuration \n\n_Lanzar un conjuro de abjuración de proporciona protección contra el daño por energía._')
            .addField('Libro', 'Complete Mage')
            .addField('Prerrequisitos', 'Soltura con una escuela de magia (abjuración) o abjurador de nivel 1.')
            .addField('Beneficio', 'cuando lanzas un conjuro de abjuración, puedes elegir obtener una resistencia a la energía especial igual a (1 + el nivel del conjuro) x 5. Esta resistencia a la energía se mantiene mientras dure el conjuro de abjuración o hasta que recibas daño de algún tipo de energía (ácido, frío, fuego, electricidad o sonido). La resistencia se aplica al primer daño de energía al que seas expuesto y a partir de ese momento, pierdes la resistencia a la energía hasta que lances otro conjuro de abjuración.')
            .addField('Especial', 'un abjurador puede seleccionar esta dote como una de sus dotes adicionales de mago')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote4sp);
            break;
        case 'energy':
            message.delete()
            if(args[0] !== 'abjuration') return message.channel.send('Esta dote no existe, escríbela bien!');
            let abjuration = args[0];
            const embed_dote4en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-mage--58/energy-abjuration--870/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABJURACIÓN DE ENERGÍA [GENERAL]')
            .setDescription('Energy Abjuration \n\n_Lanzar un conjuro de abjuración de proporciona protección contra el daño por energía._')
            .addField('Libro', 'Complete Mage')
            .addField('Prerrequisitos', 'Soltura con una escuela de magia (abjuración) o abjurador de nivel 1.')
            .addField('Beneficio', 'cuando lanzas un conjuro de abjuración, puedes elegir obtener una resistencia a la energía especial igual a (1 + el nivel del conjuro) x 5. Esta resistencia a la energía se mantiene mientras dure el conjuro de abjuración o hasta que recibas daño de algún tipo de energía (ácido, frío, fuego, electricidad o sonido). La resistencia se aplica al primer daño de energía al que seas expuesto y a partir de ese momento, pierdes la resistencia a la energía hasta que lances otro conjuro de abjuración.')
            .addField('Especial', 'un abjurador puede seleccionar esta dote como una de sus dotes adicionales de mago')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote4en);
            break;
// ABRAZO DE LA TIERRA
        case 'abrazo':
            message.delete()
            if(args[2] !== 'tierra') return message.channel.send('Esta dote no existe, escríbela bien!');
            let tierra = args[2];
            const embed_dote5sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-warrior--61/earths-embrace--801/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABRAZO DE LA TIERRA [GENERAL]')
            .setDescription('Earth\'s Embrace \n\n_Puedes aplastar a tus oponentes cuando les hagas una presa._')
            .addField('Libro', 'Combatiente Completo')
            .addField('Prerrequisitos', 'Fue 15, Presa mejorada o agarrón mejorado, Impacto sin arma mejorado')
            .addField('Beneficio', 'si sujetas a tu oponente al hacer una presa, infligirás 1d12 puntos de daño adicionales cada asalto en que lo mantengas sujeto. Tendrás inmovilizado a tu oponente del modo normal (con una prueba de presa enfrentada), pero tú también tendrás que quedarte completamente inmóvil, concediendo a tus oponentes (excepto al que estés sujetando) un bonificador +4 en sus tiradas de ataque contra ti (aunque no estarás indefenso). No obtienes este daño adicional contra criaturas que sean inmunes a los golpes críticos.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote5sp);
            break;
        case 'earth\'s':
            message.delete()
            if(args[0] !== 'embrace') return message.channel.send('Esta dote no existe, escríbela bien!');
            let embrace = args[0];
            const embed_dote5en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-warrior--61/earths-embrace--801/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABRAZO DE LA TIERRA [GENERAL]')
            .setDescription('Earth\'s Embrace \n\n_Puedes aplastar a tus oponentes cuando les hagas una presa._')
            .addField('Libro', 'Combatiente Completo')
            .addField('Prerrequisitos', 'Fue 15, Presa mejorada o agarrón mejorado, Impacto sin arma mejorado')
            .addField('Beneficio', 'si sujetas a tu oponente al hacer una presa, infligirás 1d12 puntos de daño adicionales cada asalto en que lo mantengas sujeto. Tendrás inmovilizado a tu oponente del modo normal (con una prueba de presa enfrentada), pero tú también tendrás que quedarte completamente inmóvil, concediendo a tus oponentes (excepto al que estés sujetando) un bonificador +4 en sus tiradas de ataque contra ti (aunque no estarás indefenso). No obtienes este daño adicional contra criaturas que sean inmunes a los golpes críticos.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote5en);
            break;    
// ABSORBER VIDA PROFANO
        case 'absorber':
            message.delete()
            if(args[1] !== 'profano') return message.channel.send('Esta dote no existe, escríbela bien!');
            let profano = args[1];
            const embed_dote6sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/libris-mortis-the-book-of-the-dead--71/profane-lifeleech--2247/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABSORBER VIDA PROFANO [DIVINA]')
            .setDescription('Profane Lifeleech \n\n_Puedes canalizar energía negativa para absorber la fuerza vital de las criaturas vivas que se hallen cerca._')
            .addField('Libro', 'Libris Mortis')
            .addField('Prerrequisitos', 'capacidad para reprender muertos vivientes.')
            .addField('Beneficio', 'como una acción estándar, puedes gastar dos de tus usos de reprender para infligir 1d6 puntos de daño a todas las criaturas vivas que se hallen en una explosión de 30\' de radio. Este efecto no puede reducir los puntos de golpe de ninguna criatura por debajo de 0. Recuperas tantos puntos de golpe como el total que hayas absorbido a las víctimas afectadas, pero esta curación no te permite superar tu total normal de puntos de golpe.')
            .addField('Especial', 'esta dote no inflige daño a constructos o muertos vivientes.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote6sp);
            break;
        case 'profane':
            message.delete()
            if(args[0] !== 'lifeleech') return message.channel.send('Esta dote no existe, escríbela bien!');
            let lifeleech = args[0];
            const embed_dote6en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/libris-mortis-the-book-of-the-dead--71/profane-lifeleech--2247/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABSORBER VIDA PROFANO [DIVINA]')
            .setDescription('Profane Lifeleech \n\n_Puedes canalizar energía negativa para absorber la fuerza vital de las criaturas vivas que se hallen cerca._')
            .addField('Libro', 'Libris Mortis')
            .addField('Prerrequisitos', 'capacidad para reprender muertos vivientes.')
            .addField('Beneficio', 'como una acción estándar, puedes gastar dos de tus usos de reprender para infligir 1d6 puntos de daño a todas las criaturas vivas que se hallen en una explosión de 30\' de radio. Este efecto no puede reducir los puntos de golpe de ninguna criatura por debajo de 0. Recuperas tantos puntos de golpe como el total que hayas absorbido a las víctimas afectadas, pero esta curación no te permite superar tu total normal de puntos de golpe.')
            .addField('Especial', 'esta dote no inflige daño a constructos o muertos vivientes.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote6en);
            break;
// ABSTENCIÓN DE MATERIALES
        case 'abstencion':
            message.delete()
            if(args[1] !== 'materiales') return message.channel.send('Esta dote no existe, escríbela bien!');
            let materiales = args[1];
            const embed_dote7sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/players-handbook-v35--6/eschew-materials--950/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABSTENCIÓN DE MATERIALES [GENERAL]')
            .setDescription('Eschew Materials \n\n_Puedes lanzar conjuros sin depender de componentes materiales._')
            .addField('Libro', 'Manual del Jugador')
            .addField('Prerrequisitos', 'nada')
            .addField('Beneficio', 'puedes lanzar cualquier conjuro que tenga un componente material que cueste 1 po o menos sin precisar ese componente, aunque lanzar el conjuro sigue provocando un ataque de oportunidad de forma normal. Si el conjuro requiere un componente material que cueste más de 1 po debes disponer de él para lanzar el conjuro, de la manera normal.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote7sp);
            break;
        case 'eschew':
            message.delete()
            if(args[0] !== 'materials') return message.channel.send('Esta dote no existe, escríbela bien!');
            let materials = args[0];
            const embed_dote7en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/players-handbook-v35--6/eschew-materials--950/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ABSTENCIÓN DE MATERIALES [GENERAL]')
            .setDescription('Eschew Materials \n\n_Puedes lanzar conjuros sin depender de componentes materiales._')
            .addField('Libro', 'Manual del Jugador')
            .addField('Prerrequisitos', 'nada')
            .addField('Beneficio', 'puedes lanzar cualquier conjuro que tenga un componente material que cueste 1 po o menos sin precisar ese componente, aunque lanzar el conjuro sigue provocando un ataque de oportunidad de forma normal. Si el conjuro requiere un componente material que cueste más de 1 po debes disponer de él para lanzar el conjuro, de la manera normal.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote7en);
            break;
// ACECHADOR ASCÉTICO
        case 'acechador':
            message.delete()
            if(args[0] !== 'ascetico') return message.channel.send('Esta dote no existe, escríbela bien!');
            let ascetico = args[0];
            const embed_dote8sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-scoundrel--60/ascetic-stalker--130/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACECHADOR ASCÉTICO [GENERAL]')
            .setDescription('Ascetic Stalker \n\n_Has practicado una técnica secreta que combina tu considerable talento en combate sin armas con una mayor comprensión de tu ki interior._')
            .addField('Libro', 'Complete Scoundrel')
            .addField('Prerrequisitos', 'Poder del ki, impacto ki (mágico).')
            .addField('Beneficio', 'tus niveles de monje y ninja se apilan a efectos de determinar el tamaño de tu reserva de ki. Por ejemplo, un monje de nivel 4/ninja de nivel 2 con esta dote podría usar sus poderes ki un número de veces igual a 3 (la mitad de la suma de sus niveles de monje y ninja) + su bonificador de Sabiduría (si lo tiene). Tus niveles de monje y ninja también se apilan a efectos de determinar tu daño de impacto sin armas, así como tu rasgo de clase de impacto ki. Por ejemplo, un monje de nivel 4/ninja de nivel 6 causaría 1d10 puntos de daño con su impacto sin armas y su impacto sin armas superaría la reducción de daño como si fuera un arma legal y mágica (como si fuera un monje de nivel 10º). Además, puedes multiclasear libremente entre las clases de monje y ninja. Todavía debes permanecer legal para continuar avanzando como monje. Todavía te enfrentas a las penalizaciones normales de PX por poseer múltiples clases separadas por más de un nivel.')
            .addField('Especial', 'un monje puede seleccionar Acechador ascético como dote adicional en los niveles 1º, 2º o 6º en lugar de una de las dotes indicadas para esos niveles.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote8sp);
            break;
        case 'ascetic':
            message.delete()
            if(args[0] !== 'stalker') return message.channel.send('Esta dote no existe, escríbela bien!');
            let stalker = args[0];
            const embed_dote8en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-scoundrel--60/ascetic-stalker--130/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACECHADOR ASCÉTICO [GENERAL]')
            .setDescription('Ascetic Stalker \n\n_Has practicado una técnica secreta que combina tu considerable talento en combate sin armas con una mayor comprensión de tu ki interior._')
            .addField('Libro', 'Complete Scoundrel')
            .addField('Prerrequisitos', 'Poder del ki, impacto ki (mágico).')
            .addField('Beneficio', 'tus niveles de monje y ninja se apilan a efectos de determinar el tamaño de tu reserva de ki. Por ejemplo, un monje de nivel 4/ninja de nivel 2 con esta dote podría usar sus poderes ki un número de veces igual a 3 (la mitad de la suma de sus niveles de monje y ninja) + su bonificador de Sabiduría (si lo tiene). Tus niveles de monje y ninja también se apilan a efectos de determinar tu daño de impacto sin armas, así como tu rasgo de clase de impacto ki. Por ejemplo, un monje de nivel 4/ninja de nivel 6 causaría 1d10 puntos de daño con su impacto sin armas y su impacto sin armas superaría la reducción de daño como si fuera un arma legal y mágica (como si fuera un monje de nivel 10º). Además, puedes multiclasear libremente entre las clases de monje y ninja. Todavía debes permanecer legal para continuar avanzando como monje. Todavía te enfrentas a las penalizaciones normales de PX por poseer múltiples clases separadas por más de un nivel.')
            .addField('Especial', 'un monje puede seleccionar Acechador ascético como dote adicional en los niveles 1º, 2º o 6º en lugar de una de las dotes indicadas para esos niveles.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote8en);
            break;
// ACECHADOR DEL PANTANO
        case 'acechador_pantano':
            message.delete()
            const embed_dote9sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/savage-species--47/swamp-stalker--2859/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACECHADOR DEL PANTANO [GENERAL]')
            .setDescription('Swamp Stalker \n\n_Estás adaptado al entorno de los marjales_')
            .addField('Libro', 'Especies Salvajes')
            .addField('Prerrequisitos', 'terreno de marjal.')
            .addField('Beneficio', 'te mueves fácilmente por los cenagales y el agua estancada de los pantanos. Obtienes un bonificador de competencia +2 en las pruebas de Nadar y en las pruebas de Fuerza para liberarte de redes, telarañas, conjuros de enredar e impedimentos similares. Esta dote no proporciona ningún bonificador en las pruebas de presa.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote9sp);
            break;
        case 'swamp':
            message.delete()
            if(args[0] !== 'stalker') return message.channel.send('Esta dote no existe, escríbela bien!');
            const embed_dote9en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/savage-species--47/swamp-stalker--2859/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACECHADOR DEL PANTANO [GENERAL]')
            .setDescription('Swamp Stalker \n\n_Estás adaptado al entorno de los marjales_')
            .addField('Libro', 'Especies Salvajes')
            .addField('Prerrequisitos', 'terreno de marjal.')
            .addField('Beneficio', 'te mueves fácilmente por los cenagales y el agua estancada de los pantanos. Obtienes un bonificador de competencia +2 en las pruebas de Nadar y en las pruebas de Fuerza para liberarte de redes, telarañas, conjuros de enredar e impedimentos similares. Esta dote no proporciona ningún bonificador en las pruebas de presa.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote9en);
            break;
// ACECHADOR MARCIAL
        case 'acechador_marcial':
            message.delete()
            const embed_dote10sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-scoundrel--60/martial-stalker--1877/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACECHADOR MARCIAL [GENERAL, GUERRERO]')
            .setDescription('Martial Stalker \n\n_Practicas un poderoso estilo de lucha que se centra tanto en la habilidad marcial como en la dedicación mística._')
            .addField('Libro', 'Complete Scoundrel')
            .addField('Prerrequisitos', 'competencia con todas las armas marciales, poder ki.')
            .addField('Beneficio', 'tus niveles de guerrero y ninja se apilan a efectos de determinar el tamaño de tu reserva de ki, así como tu bonificador a la CA. Por ejemplo, un guerrero de nivel 5º/ninja de nivel 1 con esta dote podría usar sus poderes ki un número de veces igual a 3 (la mitad de sus niveles de ninja y guerrero) + su bonificador de Sab (si lo tiene), y tendría un bonificador +1 a la CA (como si fuera un ninja de nivel 6). \n\nTus niveles de guerrero y ninja también se apilan a efectos de cumplir los requisitos para dotes que necesitan un nivel mínimo de guerrero, como Soltura mayor con un arma.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote10sp);
            break;
        case 'martial':
            message.delete()
            if(args[0] !== 'stalker') return message.channel.send('Esta dote no existe, escríbela bien!');
            const embed_dote10en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-scoundrel--60/martial-stalker--1877/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACECHADOR MARCIAL [GENERAL, GUERRERO]')
            .setDescription('Martial Stalker \n\n_Practicas un poderoso estilo de lucha que se centra tanto en la habilidad marcial como en la dedicación mística._')
            .addField('Libro', 'Complete Scoundrel')
            .addField('Prerrequisitos', 'competencia con todas las armas marciales, poder ki.')
            .addField('Beneficio', 'tus niveles de guerrero y ninja se apilan a efectos de determinar el tamaño de tu reserva de ki, así como tu bonificador a la CA. Por ejemplo, un guerrero de nivel 5º/ninja de nivel 1 con esta dote podría usar sus poderes ki un número de veces igual a 3 (la mitad de sus niveles de ninja y guerrero) + su bonificador de Sab (si lo tiene), y tendría un bonificador +1 a la CA (como si fuera un ninja de nivel 6). \n\nTus niveles de guerrero y ninja también se apilan a efectos de cumplir los requisitos para dotes que necesitan un nivel mínimo de guerrero, como Soltura mayor con un arma.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote10en);
            break;            
// ACELERAR EXPULSIÓN
        case 'acelerar':
            message.delete()
            if(args[0] !== 'expulsion') return message.channel.send('Esta dote no existe, escríbela bien!');
            const embed_dote11sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-divine--56/quicken-turning--2339/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACELERAR EXPULSIÓN [GENERAL]')
            .setDescription('Quicken Turning \n\n_Puedes expulsar o reprender muertos vivientes con un pensamiento repentino._')
            .addField('Libro', 'Divino Completo')
            .addField('Prerrequisitos', 'aptitud para expulsar o reprender muertos vivientes.')
            .addField('Beneficio', 'puedes expulsar o reprender muertos vivientes como acción gratuita. Sigues pudiendo hacer tan sólo un intento por turno.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote11sp);
            break;
        case 'quicken':
            message.delete()
            if(args[0] !== 'turning') return message.channel.send('Esta dote no existe, escríbela bien!');
            const embed_dote11en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/complete-divine--56/quicken-turning--2339/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACELERAR EXPULSIÓN [GENERAL]')
            .setDescription('Quicken Turning \n\n_Puedes expulsar o reprender muertos vivientes con un pensamiento repentino._')
            .addField('Libro', 'Divino Completo')
            .addField('Prerrequisitos', 'aptitud para expulsar o reprender muertos vivientes.')
            .addField('Beneficio', 'puedes expulsar o reprender muertos vivientes como acción gratuita. Sigues pudiendo hacer tan sólo un intento por turno.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote11en);
            break;
// ACELERAR METAMAGIA
        case 'acelerar_metamagia':
            message.delete()
            const embed_dote12sp = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/races-of-the-dragon--83/accelerate-metamagic--21/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACELERAR METAMAGIA [GENERAL]')
            .setDescription('Accelerate Metamagic \n\n_Puedes aplicar una dote metamágica a tus conjuros más rápido de lo normal._')
            .addField('Libro', 'Races of Dragon')
            .addField('Prerrequisitos', 'Subtipo sangre de dragón, Conocimiento de conjuros 4 rangos, cualquier dote metamágica, aptitud para lanzar conjuros de nivel 1 espontáneamente.')
            .addField('Beneficio', 'elige una dote metamágica que conozcas. Puedes aplicar dicha dote metamágica a cualquier conjuro lanzado espontáneamente sin aumentar el tiempo de lanzamiento. \n\nNormal: sin esta dote, los conjuros metamágicos con tiempo de lanzamiento de 1 acción estándar requieren una acción es asalto completo para los lanzadores de conjuros espontáneos. Los conjuros metamágicos con un tiempo de lanzamiento mayor de 1 acción estándar cuestan a los lanzadores de conjuros espontáneos una acciónd e asalto completo adicional para poder usarlos.')
            .addField('Especial', 'puedes seleccionar Acelerar metamagia varias veces. Sus efectos no se apilan. Cada vez que la elijas, se aplica a una nueva dote metamágica.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote12sp);
            break;
        case 'accelerate':
            message.delete()
            if(args[0] !== 'metamagic') return message.channel.send('Esta dote no existe, escríbela bien!');
            const embed_dote12en = new Discord.MessageEmbed()
            .setURL('https://dndtools.net/feats/races-of-the-dragon--83/accelerate-metamagic--21/')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setTitle('ACELERAR METAMAGIA [GENERAL]')
            .setDescription('Accelerate Metamagic \n\n_Puedes aplicar una dote metamágica a tus conjuros más rápido de lo normal._')
            .addField('Libro', 'Races of Dragon')
            .addField('Prerrequisitos', 'Subtipo sangre de dragón, Conocimiento de conjuros 4 rangos, cualquier dote metamágica, aptitud para lanzar conjuros de nivel 1 espontáneamente.')
            .addField('Beneficio', 'elige una dote metamágica que conozcas. Puedes aplicar dicha dote metamágica a cualquier conjuro lanzado espontáneamente sin aumentar el tiempo de lanzamiento. \n\nNormal: sin esta dote, los conjuros metamágicos con tiempo de lanzamiento de 1 acción estándar requieren una acción es asalto completo para los lanzadores de conjuros espontáneos. Los conjuros metamágicos con un tiempo de lanzamiento mayor de 1 acción estándar cuestan a los lanzadores de conjuros espontáneos una acciónd e asalto completo adicional para poder usarlos.')
            .addField('Especial', 'puedes seleccionar Acelerar metamagia varias veces. Sus efectos no se apilan. Cada vez que la elijas, se aplica a una nueva dote metamágica.')
            .setColor(0x00FF04)
            .setThumbnail('https://i.imgur.com/b3pizy4.png')
            message.channel.send(embed_dote12en);
            break;
//

////////////////////////////////////////////
        case 'utilidad':
            message.delete()
            const embed_utilidad = new Discord.MessageEmbed()
            .setTitle('Utilidades')
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField('Prueba', message.author.username, true)
            .addField('Versión', version, true)
            .addField('Servidor', message.guild.name, true)
            .setColor(0x00FFFB)
            .setThumbnail('https://media.giphy.com/media/h4lGwljlzFcq94O6Fl/source.gif')
            message.channel.send(embed_utilidad);
            break;
        case 'comandos':
            message.delete()
            const embed_comandos = new Discord.MessageEmbed()
            .setTitle('Listado de comandos disponibles')
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField('?info', 'Obtén información del bot')
            .addField('?patchnotes', 'Obtén la lista de todas las últimas actualizaciones y cambios en el bot.')
            .addField('?hechizos', 'Obtén la lista de hechizos de D&D 3.5e')
            .addField('?dotes', 'Obtén la lista de dotes de D&D 3.5e')
            .addField('?clases', 'Obtén la lista de clases **OFICIALES** de D&D 3.5e')
            .addField('?utilidad', 'Obtén la lista de todos los demás comandos disponibles para utilidades de D&D 3.5e')
            .setColor(0xFFB600)
            .setThumbnail('https://media.giphy.com/media/h4lGwljlzFcq94O6Fl/source.gif')
            message.channel.send(embed_comandos);
            break;
        case 'info':
            message.delete()
            const embed_info = new Discord.MessageEmbed()
            .setTitle('__**D&D BOT**__')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription('Este sistema, está diseñado y programado para facilitar la gestión de toda la información relevante a **D&D**. \n\nSi tienes cualquier duda, sugerencia o queja, puedes dirigirla al desarrollador del mismo que estará abajo reseñado o a cualquier miembro de la administración para que lo hagan llegar. \n\u200B')
            .addField('Desarrollado por', '<@287929373967908865> __**(Ray#1111)**__', true)
            .addField('Versión', version + ' _(beta)_', true)
            .addField('Ult.Actualización', actualización, true)
            .setColor(0xFFF300)
            .setThumbnail('https://media.giphy.com/media/h4lGwljlzFcq94O6Fl/source.gif')
            message.channel.send(embed_info);
            break;
        case 'patchnotes':
            message.delete()
            const embed_patchnotes = new Discord.MessageEmbed()
            .setTitle('__**REGISTRO DE CAMBIOS**__')
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField(version, '-Añadidas 11 nuevas clases (Erudito de la Espada, Ninja, Oficial, Paladín, Psiónico, Pícaro, Robaconjuros, Samurai, Sanador, Shugenja y Wu Jen) \n\n-Añadida la clase Erudito de la Espada a la imagen de clases, ya que no existía anteriormente.', false)
            .addField('**v0.1.9**', '-Añadidas 5 nuevas clases (Hechicero, Indómito, Mágico de guerra, Mago y Monje).\n\n-Sustituída la imagen en los comandos "?info", "?comandos" y "?utilidad" a el nuevo GIF del servidor.\n\n-Ahora cuándo escribes un comando inexistente, el mensaje te dirá que uses "?comandos"\n\n-Creación del comando "?patchnotes" para el historial de actualizaciones.', false)
            .setColor(0xb1e7d4)
            .setThumbnail('https://media.giphy.com/media/h4lGwljlzFcq94O6Fl/source.gif')
            message.channel.send(embed_patchnotes);
            break;
        case 'tierlist':
            message.delete()
            const embed_tierlist = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL())
            .setDescription('Recomendable abrir la foto en tamaño original.')
            .setColor(0xb1e7d4)
            .setImage('https://i.imgur.com/yn7kKV8.png')
            message.channel.send(embed_tierlist);
            break;
        case 'clear':
            if(!args[0]) return message.reply('Por favor especifica el número')
            message.channel.bulkDelete(args[0]);
            break;
    
        default:
            message.channel.send('Este comando no existe, haz el favor y pon "?comandos"!');
            break;

    }
})

bot.login(token);