//META{"name":"HideBlockedMessages","website":"https://github.com/BannerBomb/BetterDiscordThemes","source":"https://raw.githubusercontent.com/BannerBomb/BetterDiscordThemes/master/plugins/HideBlockedMessages.plugin.js"}*//
var HideBlockedMessages = (_ => {
	return class HideBlockedMessages {
		getName() { return "HideBlockedMessages"; }

		getVersion() { return "1.0.2"; } 

		getAuthor() { return "BannerBomb"; }

		getDescription() { return "Removes blocked messages indicator on the click of a button."; }
		
		getRawUrl() { return "https://raw.githubusercontent.com/BannerBomb/BetterDiscordThemes/master/plugins/HideBlockedMessages.plugin.js"; }
	
		constructor() {
			this.changelog = {
				/*"fixed": [
					["Textbox Icons", "I have fixed the textbox icons again."]
				]*/
			};
			/*
			added: "New Features",
			fixed: "Bug Fixes",
			improved: "Improvements",
			progress: "Progress"
			*/

			this.labels = {};

			this.patchedModules = {
				before: {
					ChannelEditorContainer: "componentDidMount"
				}
			}
		}

		initConstructor() {
			this.icons = {
				on: 'M72,27H28C15.32,27,5,37.32,5,50c0,12.68,10.32,23,23,23h44c12.68,0,23-10.32,23-23C95,37.32,84.68,27,72,27z M72,69H28 C17.52,69,9,60.48,9,50s8.52-19,19-19h44c10.48,0,19,8.52,19,19S82.48,69,72,69z M28,35c-8.27,0-15,6.73-15,15c0,8.27,6.73,15,15,15 s15-6.73,15-15C43,41.73,36.27,35,28,35z M28,61c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S34.07,61,28,61z M77.41,42.59 c0.78,0.78,0.78,2.05,0,2.83l-12,12C65.02,57.8,64.51,58,64,58s-1.02-0.2-1.41-0.59l-6-6c-0.78-0.78-0.78-2.05,0-2.83 c0.78-0.78,2.05-0.78,2.83,0L64,53.17l10.59-10.59C75.37,41.8,76.63,41.8,77.41,42.59z',
				off: 'M72,27H28C15.32,27,5,37.32,5,50c0,12.68,10.32,23,23,23h44c12.68,0,23-10.32,23-23C95,37.32,84.68,27,72,27z M72,69H28 C17.52,69,9,60.48,9,50s8.52-19,19-19h44c10.48,0,19,8.52,19,19S82.48,69,72,69z M72,35c-8.27,0-15,6.73-15,15c0,8.27,6.73,15,15,15 s15-6.73,15-15C87,41.73,80.27,35,72,35z M72,61c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S78.07,61,72,61z M35,40v20 c0,1.1-0.9,2-2,2s-2-0.9-2-2V40c0-1.1,0.9-2,2-2S35,38.9,35,40z'
			}

			this.defaults = {
				settings: {
					/*darkMode: {
						value: false,
						description: "Make certain elements dark by default."
					}*/
				}
			};
		}

		getSettingsPanel () {
			if (!window.BDFDB || typeof BDFDB != "object" || !BDFDB.loaded || !this.started) return;
			let settings = BDFDB.DataUtils.get(this, "settings");
			let settingspanel, settingsitems = [];

			for (let key in settings) settingsitems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
				className: BDFDB.disCN.marginbottom8,
				type: "Switch",
				plugin: this,
				keys: ["settings", key],
				label: this.defaults.settings[key].description,
				value: settings[key]
			}));
			return settingspanel = BDFDB.PluginUtils.createSettingsPanel(this, settingsitems);
		}

		//legacy
		load () {}

		start () {
			if (!window.BDFDB) window.BDFDB = {myPlugins:{}};
			if (window.BDFDB && window.BDFDB.myPlugins && typeof window.BDFDB.myPlugins == "object") window.BDFDB.myPlugins[this.getName()] = this;
			let libraryScript = document.querySelector("head script#BDFDBLibraryScript");
			if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 600000) {
				if (libraryScript) libraryScript.remove();
				libraryScript = document.createElement("script");
				libraryScript.setAttribute("id", "BDFDBLibraryScript");
				libraryScript.setAttribute("type", "text/javascript");
				libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.min.js");
				libraryScript.setAttribute("date", performance.now());
				libraryScript.addEventListener("load", _ => {this.initialize();});
				document.head.appendChild(libraryScript);
			}
			else if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
			this.startTimeout = setTimeout(_ => {
				try {return this.initialize();}
				catch (err) {console.error(`%c[${this.getName()}]%c`, "color: #3a71c1; font-weight: 700;", "", "Fatal Error: Could not initiate plugin! " + err);}
			}, 30000);
		}
	
		initialize() {
			if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
				if (this.started) return;
				BDFDB.PluginUtils.init(this);

				const settings = BDFDB.DataUtils.get(this, "settings");
				/*if (settings.darkMode) {
					var bda_dark = document.getElementById('app-mount');
					if (!bda_dark.classList.contains('bda-dark')) bda_dark.classList.add('bda-dark');
				}*/
				if (!document.getElementById('HideBlockedMessagesCSS')) {
					var hideBlockedMessagesCSS = document.createElement("style");
					hideBlockedMessagesCSS.setAttribute("id", "HideBlockedMessagesCSS");
					hideBlockedMessagesCSS.setAttribute("type", "text/css");
					hideBlockedMessagesCSS.innerHTML = `body[hideblockedmessageson] .scrollerInner-2ircaP > .groupStart-23k01U:not(.message-2qnXI6):not(.wrapper-2a6GCs):not(.zalgo-jN1Ica) { display: none } body[hideblockedmessageson] #HideBlockedMessages > path { d: path("${this.icons.on}") }`;
					document.head.appendChild(hideBlockedMessagesCSS);
				}

				var hideBlockedMessagesToggle = document.getElementById('HideBlockedMessages');
				if (!hideBlockedMessagesToggle) {
					$('div.chat-3bRxxu > section.title-3qD0b-.container-1r6BKw.themed-ANHk51 > div.toolbar-1t6TWx')
						.prepend(`<div class="iconWrapper-2OrFZ1 da-iconWrapper clickable-3rdHwn da-clickable focusable-1YV_-H da-focusable" role="switch" aria-label="Hide blocked messages" aria-checked="false" tabindex="0"><svg version="1.1" id="HideBlockedMessages" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon-22AiRD da-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 100 100"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="${this.icons.off}"/></svg></div>`)
						.click((e) => {
							document.body.toggleAttribute('hideblockedmessageson');
						});
				}

				this.forceUpdateAll();
			} else {
				console.error(`%c[${this.getName()}]%c`, 'color: #3a71c1; font-weight: 700;', '', 'Fatal Error: Could not load BD functions!');
			}
		}

		onSettingsClosed (e) {
			if (this.SettingsUpdated) {
				delete this.SettingsUpdated;
				this.forceUpdateAll();
			}
		}

		stop() {
			if (window.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
				var hideMessagesCSS = document.getElementById('HideBlockedMessagesCSS');
				if (hideMessagesCSS) hideMessagesCSS.remove();
				var hideBlockedMessagesToggle = document.getElementById('HideBlockedMessages');
				if (hideBlockedMessagesToggle) hideBlockedMessagesToggle.parentElement.remove();
				this.started = false;
				BDFDB.PluginUtils.clear(this);
			}
		}

		processChannelEditorContainer(instance) {
			//if (instance && instance.node && instance.node.parentElement) {
				var hideBlockedMessagesToggle = document.getElementById('HideBlockedMessages');
				if (!hideBlockedMessagesToggle) {
					$('div.chat-3bRxxu > section.title-3qD0b-.container-1r6BKw.themed-ANHk51 > div.toolbar-1t6TWx')
						.prepend(`<div class="iconWrapper-2OrFZ1 da-iconWrapper clickable-3rdHwn da-clickable focusable-1YV_-H da-focusable" role="switch" aria-label="Hide blocked messages" aria-checked="false" tabindex="0"><svg version="1.1" id="HideBlockedMessages" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="icon-22AiRD da-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 100 100"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="${this.icons.off}"/></svg></div>`)
						.click((e) => {
							document.body.toggleAttribute('hideblockedmessageson');
						});
				} 
			//}
		}

		forceUpdateAll() {
			BDFDB.ModuleUtils.forceAllUpdates(this);
			BDFDB.MessageUtils.rerenderAll();
		}
	}
})();
