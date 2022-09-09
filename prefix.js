const db = require('../../database');
module.exports = {
    name: 'prefix', 
    category: 'info',
    run: async (client, message, args, serverData) => {
        if (!args[0]) return message.channel.send(`The bot's current prefix is: ${serverData.prefix}`);
        await db.set(message.guildId, {...serverData, prefix: args[0].toLowerCase() });
        message.reply(`✅ | Changed prefix successfully!`);
    }
}