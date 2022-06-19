import { Injectable } from '@angular/core';
import { MonitorConfig } from './shared/monitor/monitor.interface';

@Injectable({
	providedIn: 'root',
})
export class MonitorService {
	allMonitorConfigs: MonitorConfig[];
	
	constructor() {
		chrome.storage.sync.get('monitor', (result: { monitor: MonitorConfig[] }) => {
			this.allMonitorConfigs = result.monitor ? result.monitor : [];
		});
	}

	addMonitorConfig(config: MonitorConfig) {
		this.allMonitorConfigs.push(config);
		this.updateChromeMonitorList();
	}

	deleteMonitorConfig(config: MonitorConfig) {
		this.allMonitorConfigs = this.allMonitorConfigs.filter((element) => {
			return element !== config;
		});
		this.updateChromeMonitorList();
	}


	updateChromeMonitorList() {
		//Use this method after updating allServers object to keep in sync with chrome
		chrome.storage.sync.set({ monitor: this.allMonitorConfigs }, () => {
			console.log('Succesfully stored in chrome storage');
		});
	}
}
