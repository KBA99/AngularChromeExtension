import { Component, Inject } from '@angular/core';
import { bindCallback } from 'rxjs';
import { map } from 'rxjs/operators';
import { TAB_ID } from '../../../../providers/tab-id.provider';
import { EmbedGIF, embed } from '../../../../../../../chrome/src/webhook' 

@Component({
	selector: 'app-popup',
	templateUrl: 'popup.component.html',
	styleUrls: ['popup.component.scss'],
})
export class PopupComponent {
	message: string;

	constructor(@Inject(TAB_ID) readonly tabId: number) {}

	async onClick(): Promise<void> {
		this.message = await bindCallback<string>(
			chrome.tabs.sendMessage.bind(this, this.tabId, 'request')
		)()
			.pipe(
				map((msg) =>
					chrome.runtime.lastError
						? 'The current page is protected by the browser, goto: https://www.google.nl and try again.'
						: msg
				)
			)
			.toPromise();
	}

	async sendMessage() {
		const webhookURL =
			'https://discord.com/api/webhooks/985144038384607232/pAcxrHzfhbhaMjXFAv75QUFoFtvXPaa_UCOsiy2Eb7lm6xjYhiBqh54Ah7pApZ8Wvr6c';

			try {
				fetch(webhookURL, {
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						// the username to be displayed
						username: 'AidenExtension',
						// the avatar to be displayed
						avatar_url: EmbedGIF.AidenLogo,
						// contents of the message to be sent
						// content:
						// 	'user mention: <@userNumber>, role mention: <@&rolenumber>, channel mention: <#channelnumber>',
						// enable mentioning of individual users or roles, but not @everyone/@here
						allowed_mentions: {
							parse: ['users', 'roles'],
						},
						// embeds to be sent
						embeds: [embed],
					}),
				})
				console.log('success')
			} catch (error) {
				console.log('An error occurred', error)
			} finally {
				console.log("this will always run")
			}
	}

	onOpenOptionsPage() {
		chrome.runtime.openOptionsPage() 
	}
}
