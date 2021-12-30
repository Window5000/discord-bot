const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Replies with the server ip'),
	async execute(interaction) {
		await interaction.reply('mc.toppenafverden.dk:25569');
	},
};