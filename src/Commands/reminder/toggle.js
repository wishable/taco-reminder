const Command = require('../../Structures/Command');
const settings = require(`../../../settings.json`);

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['t'],
			description: 'enable taco reminder',
			category: 'Utilities'
		});
	}

	async run(message) {
		const isOn = settings.reminders;
		isOn = false;
		console.log(isOn);
	}

};
