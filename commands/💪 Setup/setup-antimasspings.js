var {
  MessageEmbed
} = require(`discord.js`);
var Discord = require(`discord.js`);
var config = require(`../../botconfig/config.json`);
var ee = require(`../../botconfig/embed.json`);
var emoji = require(`../../botconfig/emojis.json`);
var {
  dbEnsure
} = require(`../../handlers/functions`);
const { MessageButton, MessageActionRow, MessageSelectMenu } = require('discord.js')
module.exports = {
  name: "setup-antimasspings",
  category: "💪 Setup",
  aliases: ["setupantimasspings", "setup-masspings", "setupmasspings", "antimasspings-setup", "antimasspingssetup"],
  cooldown: 5,
  usage: "setup-antimasspings  -->  Follow the Steps",
  description: "Enable + Change the allowed amount of Mentions / Message",
  memberpermissions: ["ADMINISTRATOR"],
  type: "security",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings) => {
    
    
    try {
      message.reply(`Redirecting to: \`setup-antimention\` ...`).then((msg)=>{
        setTimeout(()=>{msg.delete().catch(() => null)}, 3000)
      }).catch(() => null)
      require("./setup-antimention").run(client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings);
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["setup"]["setup-anticaps"]["variable13"]))]
      });
    }
  },
};
/**
 * @INFO
 * Bot coded by Morfar#0001 | https://discord.gg/ZzECHdj2Jf
 * @INFO
 * Work for Milrato Development | 
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
