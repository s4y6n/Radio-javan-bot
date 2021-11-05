const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    client.user.setActivity(`🎶Radio javan🎶`, { type: '' });
    console.log(`Logged in as ${client.user.tag}!`);
    const chid = ""//id channel
    const ch = client.channels.cache.get(chid)
    const connection = await ch.join();
    const broadcast = client.voice.createBroadcast();
    broadcast.play("http://stream.radiojavan.com/radiojavan");
    connection.play(broadcast);
});
client.login("");//token bot ro vard konin