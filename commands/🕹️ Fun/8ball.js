const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`../../botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`../../botconfig/embed.json`);
const request = require("request");
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
  name: "8ball",
  category: "🕹️ Fun",
  description: "Answers your Question",
  usage: "8ball <Questions>",
  type: "text",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings) => {
    
    
    if(GuildSettings.FUN === false){
      const embed1 = new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(require(`../../handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
      
      return message.reply({embeds : [embed1]});
    }
    try {
      const question = args.slice(0).join(" ");
      const embed2 = new MessageEmbed()
          .setColor(es.wrongcolor)
          .setFooter(client.getFooter(es))
          .setTitle(eval(client.la[ls]["cmds"]["fun"]["8ball"]["variable1"]))
      if (!question)
        return message.reply({embeds : [embed2]});
      request(`https://8ball.delegator.com/magic/JSON/${question}`, function (e, response, body) {
        if (e) {
          console.error(e);
          message.reply({content : eval(client.la[ls]["cmds"]["fun"]["8ball"]["variable2"])});
        }
        body = JSON.parse(body);
        let embedColor = `RANDOM`;
        if (body.magic.type === "Affirmative") embedColor = "#0dba35";
        if (body.magic.type === "Contrary") embedColor = "#ba0d0d";
        if (body.magic.type === "Neutral") embedColor = "#6f7275";
const embed3 = new Discord.MessageEmbed()
          .setTitle("8ball")
          .setColor(embedColor)
          .setThumbnail(message.author.displayAvatarURL({
            dynamic: true
          }))
          .addField("Question: ", question, false)
          .addField("Asked by: ", message.author.tag, false)
          .addField("Reply: ", body.magic.answer, false)
          .setFooter(eval(client.la[ls]["cmds"]["fun"]["8ball"]["variable4"]))
        
        message.reply({embeds : [embed3]});
      });
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      const embed4 = new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["fun"]["8ball"]["variable5"]))
      return message.reply({embeds : [embed4]});
    }
  }
}
/**
 * @INFO
 * Bot coded by Morfar#0001 | https://discord.gg/ZzECHdj2Jf
 * @INFO
 * Work for Milrato Development | 
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
