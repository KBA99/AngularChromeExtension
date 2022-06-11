export  enum EmbedColors {
	BoltSuccess = 65280,
	UberEatsSuccess = 1776411,
	DeliverooSuccess = 52668,
	GetirSuccess = 7158971,
	Warning = 16099138,
	Failed = 16711680,
	Start = 14876812,
	Pending = 16776960,
}

export enum EmbedGIF {
	Loading = 'https://cdn.discordapp.com/attachments/839618086835191849/954856932714348544/animation_500_l0ydiqsq.gif',
	Success = 'https://media.discordapp.net/attachments/839618086835191849/964864428195598396/animation_500_l21u1syn.gif',
	Warning = 'https://cdn.discordapp.com/attachments/839618086835191849/954854480141246544/animation_500_l0yd6aq2.gif',
	Failed = 'https://cdn.discordapp.com/attachments/839618086835191849/954854480141246544/animation_500_l0yd6aq2.gif',
	AidenLogo = 'https://cdn.discordapp.com/avatars/838531001705431070/3396f396740b58d975fe3664af5e992a.webp?size=160',
	CheckDM = 'https://media.discordapp.net/attachments/965319108218454166/971033962841530378/animation_500_l2p3tzwl.gif',
}

export const embed = {
	color: EmbedColors.BoltSuccess,
	// author
	// - icon next to text at top (text is a link)
	author: {
		name: 'Updated Colour',
		url: 'https://dragonwocky.me/',
		icon_url: EmbedGIF.CheckDM,
	},
	// embed title
	// - link on 2nd row
	title: 'Title of the Page to monitor',
	url: 'https://www.amazon.co.uk/',
	// thumbnail
	// - small image in top right corner.
	thumbnail: {
		url: EmbedGIF.Success,
	},
	// embed description
	// - text on 3rd row
	description: "[Email@email.com](https://email@email.com 'optional hovertext')",
	// custom embed fields: bold title/name, normal content/value below title
	// - located below description, above image.
	fields: [
		{
			name: 'field 1',
			value: 'value',
			inline: true,
		},
		{
			name: 'field 2',
			value: 'other value',
			inline: true,
		},
	],
	// image
	// - picture below description(and fields)
	image: {
		url: EmbedGIF.CheckDM,
	},
	// footer
	// - icon next to text at bottom
	footer: { text: 'Developed by Aiden#2251', icon_url: EmbedGIF.AidenLogo },
};