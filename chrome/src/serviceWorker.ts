import { embed, EmbedGIF } from './webhook';

const webhookURL =
	'https://discord.com/api/webhooks/985144038384607232/pAcxrHzfhbhaMjXFAv75QUFoFtvXPaa_UCOsiy2Eb7lm6xjYhiBqh54Ah7pApZ8Wvr6c';

// fetch(webhookURL, {
// 	method: 'post',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify({
// 		// the username to be displayed
// 		username: 'AidenExtension',
// 		// the avatar to be displayed
// 		avatar_url: EmbedGIF.AidenLogo,
// 		// contents of the message to be sent
// 		// content:
// 		// 	'user mention: <@279098137484722176>, role mention: <@&496160161459863552>, channel mention: <#508500699458306049>',
// 		// enable mentioning of individual users or roles, but not @everyone/@here
// 		allowed_mentions: {
// 			parse: ['users', 'roles'],
// 		},
// 		// embeds to be sent
// 		embeds: [embed],
// 	}),
// })
// 	.then(() => console.log('success'))
// 	.catch((error) => console.log('An error occurd', error));
