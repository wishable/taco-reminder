const Event = require('../../Structures/Event');

module.exports = class extends Event {

	async run(message) {
		const { sleep } = this.client.utils;
		const mentionRegex = RegExp(`^<@!${this.client.user.id}>$`);
		const mentionRegexPrefix = RegExp(`^<@!${this.client.user.id}> `);
		if (message.content === 'tw' && message.author.id === '201160167272742915') {
			await sleep(1000);
			const m = await message.channel.messages.fetch({ limit: 1, after: message.id });
			const embed = m.first().embeds[0];
			if (embed.color === 14417920) return;
			await sleep(1000 * 60 * 10);
			message.channel.send(`${message.author} You can work again`);
		}
		if (message.content === 'ttips' && message.author.id === '201160167272742915') {
			await sleep(1000);
			const m = await message.channel.messages.fetch({ limit: 1, after: message.id });
			const embed = m.first().embeds[0];
			if (embed.color === 14417920) return;
			await sleep(1000 * 60 * 5);
			message.channel.send(`${message.author} You can tips again`);
		}

		if (!message.guild || message.author.bot) return;

		if (message.content.match(mentionRegex)) message.channel.send(`My prefix for ${message.guild.name} is \`${this.client.prefix}\`.`);

		const prefix = message.content.match(mentionRegexPrefix) ?
			message.content.match(mentionRegexPrefix)[0] : this.client.prefix;

		const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

		const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
		if (command) {
			command.run(message, args);
		}
	}

};
