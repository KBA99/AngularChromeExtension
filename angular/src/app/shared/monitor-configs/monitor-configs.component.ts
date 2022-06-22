import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MonitorService } from 'src/app/monitor.service';
import { MonitorComponent } from '../monitor/monitor.component';

@Component({
	selector: 'app-monitor-configs',
	templateUrl: './monitor-configs.component.html',
	styleUrls: ['./monitor-configs.component.scss'],
})
export class MonitorConfigsComponent extends MonitorComponent implements OnInit {
	constructor(override readonly monitorService: MonitorService) {
		super(monitorService);
	}

	@ViewChild(MatAccordion) accordion: MatAccordion;

	onStartMonitor(url: string) {

		const createProperties: CreateProperties = {
			index: 0,
			url,
			// pinned: true,
			active: false,
		};

		chrome.tabs.create(createProperties, (tab) => {
			console.log(tab);
		});

		// chrome.sessions.restore('950', () => {
		// 	console.log('session restored');
		// });
	}
}

interface CreateProperties {
	/** Optional. The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window. */
	index?: number;
	/**
	 * Optional.
	 * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
	 * @since Chrome 18.
	 */
	openerTabId?: number;
	/**
	 * Optional.
	 * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. , not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
	 */
	url?: string;
	/**
	 * Optional. Whether the tab should be pinned. Defaults to false
	 * @since Chrome 9.
	 */
	pinned?: boolean;
	/** Optional. The window to create the new tab in. Defaults to the current window. */
	windowId?: number;
	/**
	 * Optional.
	 * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see windows.update). Defaults to true.
	 * @since Chrome 16.
	 */
	active?: boolean;
	/**
	 * Optional. Whether the tab should become the selected tab in the window. Defaults to true
	 * @deprecated since Chrome 33. Please use active.
	 */
	selected?: boolean;
}
