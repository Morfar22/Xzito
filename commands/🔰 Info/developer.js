const {
	MessageEmbed
} = require("discord.js")
const config = require(`../../botconfig/config.json`)
var ee = require(`../../botconfig/embed.json`)
const emoji = require(`../../botconfig/emojis.json`);
const { MessageButton, MessageActionRow } = require('discord.js')
const { handlemsg } = require(`../../handlers/functions`)
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "tomato"],
	description: "Shows Information about the Developer",
	usage: "developer",	
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix, player, es, ls, GuildSettings) => {
		let button_public_invite = new MessageButton().setStyle('LINK').setEmoji("863876115584385074").setLabel('Invite me').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
		let button_support_dc = new MessageButton().setStyle('LINK').setEmoji("936723374644789370").setLabel('Support Server').setURL("https://discord.gg/ZzECHdj2Jf")//array of all buttons
		let button_dash = new MessageButton().setStyle('LINK').setEmoji("867777823817465886").setLabel('Dashboard-Website').setURL("https://milrato.com")//array of all buttons
		const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_dash])]
		message.reply({embeds: [new MessageEmbed()
			.setColor(es.color)
			.setFooter(client.getFooter(es))
			.setTimestamp()
			.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
			.setTitle(client.la[ls].cmds.info.developer.title)
			.setURL("")
			.addField("🆕 NEW GITHUB", `> There is now an **open Source** Version of this Bot on [\`Tomato#6966\`'s Github](https://github.com/Morfar#0001)\n> [Link](https://github.com/Morfar#0001/Multipurpose-discord-bot) but please make sure to **give __Credits__** if you use it!\n> Make sure to read the [README](https://github.com/Morfar#0001/Multipurpose-discord-bot#readme) and the [WIKI / FAQ](https://github.com/Morfar#0001/Multipurpose-discord-bot/wiki) carefully before opening an [ISSUE](https://github.com/Morfar#0001/Multipurpose-discord-bot/issues/new/choose)`)
			.setDescription(client.la[ls].cmds.info.developer.description)],
				components: allbuttons
		}).catch(error => console.log(error));
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
