//META{"name":"ClassicDiscord","website":"https://github.com/BannerBomb/BetterDiscordThemes","source":"https://raw.githubusercontent.com/BannerBomb/BetterDiscordThemes/master/plugins/ClassicDiscord.plugin.js"}*//
var ClassicDiscord = (_ => {
	return class ClassicDiscord {
		getName() { return "ClassicDiscord"; }

		getVersion() { return "1.1.9"; } 

		getAuthor() { return "BannerBomb"; }

		getDescription() { return "Fully brings back discord's old Dark and Light modes. Thanks to Ownsin#0001 for helping spot the bugs."; }
	
		getRawUrl() { return "https://raw.githubusercontent.com/BannerBomb/BetterDiscordThemes/master/plugins/ClassicDiscord.plugin.js"; }

		constructor() {
			this.changelog = {
				"fixed": [
					["Textbox Icons", "I have fixed the textbox icons again."]
				],
				"progress": [
					["Note", "I don't plan on updating this plugin as much as I used to because I have other things I have been busy with now."]
				]
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
					ChannelEditorContainer: "componentDidMount",
					//MemberListItem: "render"
				}
			}
		}

		initConstructor() {
			this.icons = {
				oldIcons: {
					gift: `<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}"><svg name="Gift" class="${BDFDB.disCN.textareaicon}" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M13.9499381,4.97031408 L15,4.97031408 C15.5522847,4.97031408 16,5.42245961 16,5.98020939 L16,8 L0,8 L0,5.98020939 C-6.76353751e-17,5.42245961 0.44771525,4.97031408 1,4.97031408 L1.97920984,4.97031408 C1.01782154,3.76290607 1.11036555,1.99225385 2.23546762,0.895004171 C3.42730882,-0.267332482 5.32651446,-0.233853688 6.47746213,0.969781151 C7.07300942,1.59259093 7.63216429,2.52072721 7.97475156,3.47225991 C8.3157709,2.50516262 8.88309781,1.55764854 9.48796509,0.925092131 C10.6389128,-0.278542708 12.5381184,-0.312021502 13.7299596,0.85031515 C14.8690241,1.96118164 14.9497436,3.76226816 13.9499381,4.97031408 Z M10.635938,5 C10.734461,4.96362465 10.837387,4.92192897 10.9436159,4.87518066 C11.6535979,4.56273792 12.4171451,4.06075227 12.7190202,3.74012812 C13.103105,3.33218843 13.0920422,2.68213425 12.6943108,2.28819147 C12.2965794,1.8942487 11.6627922,1.90559543 11.2787075,2.31353512 C10.9768324,2.63415927 10.514354,3.43434591 10.2346934,4.17301099 C10.1162728,4.48579438 10.0363609,4.77004854 10,5 L10.635938,5 Z M5.25139448,5 L6,5 C5.96063336,4.77507371 5.88337351,4.50341724 5.77235412,4.20642989 C5.49198082,3.45640483 5.02832378,2.64391205 4.72567933,2.318357 C4.34061573,1.90414358 3.7052133,1.89262234 3.30646827,2.29262359 C2.90772324,2.69262485 2.89663225,3.35267626 3.28169585,3.76688968 C3.58434031,4.09244473 4.34983347,4.60215046 5.06162485,4.91939828 C5.12617993,4.94817069 5.18951835,4.97505811 5.25139448,5 Z M1,10 L7,10 L7,16 L2,16 C1.44771525,16 1,15.5522847 1,15 L1,10 Z M9,10 L15,10 L15,15 C15,15.5522847 14.5522847,16 14,16 L9,16 L9,10 Z"></path></svg></div>`,
					gif: `<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}"><svg name="InvertedGIFLabel" class="${BDFDB.disCN.textareaicon} gifPickerIcon-132le6" width="24" height="18" viewBox="0 0 24 18"><path fill="currentColor" d="M3,0 L21,0 C22.6568542,-3.04359188e-16 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 2.02906125e-16,16.6568542 0,15 L0,3 C-2.02906125e-16,1.34314575 1.34314575,-5.83819232e-16 3,-8.8817842e-16 Z M11,5 L11,13 L13,13 L13,5 L11,5 Z M8,5 L4,5 C3.28,5 3,5.33333333 3,6 L3,12 C3,12.6666667 3.28,13 4,13 L8,13 C8.72,13 9,12.6666667 9,12 L9,8 L6,8 L6,10 L7,10 L7,11 L5,11 L5,7 L9,7 L9,6 C9,5.33333333 8.72,5 8,5 Z M21,7 L21,5 L15,5 L15,13 L17,13 L17,10 L20,10 L20,8 L17,8 L17,7 L21,7 Z"></path></svg></div>`,
					gear: `<div class="${BDFDB.disCNS.buttoncontents} buttonInner-LmnaN_"><svg name="Gear" width="18" height="18" viewBox="0 0 18 18"><path fill="currentColor" d="M7.15546853,6.47630098e-17 L5.84453147,6.47630098e-17 C5.36185778,-6.47630098e-17 4.97057344,0.391750844 4.97057344,0.875 L4.97057344,1.9775 C4.20662236,2.21136254 3.50613953,2.61688993 2.92259845,3.163125 L1.96707099,2.61041667 C1.76621819,2.49425295 1.52747992,2.46279536 1.30344655,2.52297353 C1.07941319,2.58315171 0.88846383,2.73002878 0.77266168,2.93125 L0.117193154,4.06875 C0.00116776262,4.26984227 -0.0302523619,4.50886517 0.0298541504,4.73316564 C0.0899606628,4.9574661 0.236662834,5.14864312 0.437644433,5.26458333 L1.39171529,5.81583333 C1.21064614,6.59536289 1.21064614,7.40609544 1.39171529,8.185625 L0.437644433,8.736875 C0.236662834,8.85281521 0.0899606628,9.04399223 0.0298541504,9.2682927 C-0.0302523619,9.49259316 0.00116776262,9.73161606 0.117193154,9.93270833 L0.77266168,11.06875 C0.88846383,11.2699712 1.07941319,11.4168483 1.30344655,11.4770265 C1.52747992,11.5372046 1.76621819,11.5057471 1.96707099,11.3895833 L2.92259845,10.836875 C3.50613953,11.3831101 4.20662236,11.7886375 4.97057344,12.0225 L4.97057344,13.125 C4.97057344,13.6082492 5.36185778,14 5.84453147,14 L7.15546853,14 C7.63814222,14 8.02942656,13.6082492 8.02942656,13.125 L8.02942656,12.0225 C8.79337764,11.7886375 9.49386047,11.3831101 10.0774016,10.836875 L11.032929,11.3895833 C11.2337818,11.5057471 11.4725201,11.5372046 11.6965534,11.4770265 C11.9205868,11.4168483 12.1115362,11.2699712 12.2273383,11.06875 L12.8828068,9.93270833 C12.9988322,9.73161606 13.0302524,9.49259316 12.9701458,9.2682927 C12.9100393,9.04399223 12.7633372,8.85281521 12.5623556,8.736875 L11.6082847,8.185625 C11.7893539,7.40609544 11.7893539,6.59536289 11.6082847,5.81583333 L12.5623556,5.26458333 C12.7633372,5.14864312 12.9100393,4.9574661 12.9701458,4.73316564 C13.0302524,4.50886517 12.9988322,4.26984227 12.8828068,4.06875 L12.2273383,2.93270833 C12.1115362,2.73148712 11.9205868,2.58461004 11.6965534,2.52443187 C11.4725201,2.46425369 11.2337818,2.49571128 11.032929,2.611875 L10.0774016,3.16458333 C9.49400565,2.61782234 8.79351153,2.2117896 8.02942656,1.9775 L8.02942656,0.875 C8.02942656,0.391750844 7.63814222,6.47630098e-17 7.15546853,6.47630098e-17 Z M8.5,7 C8.5,8.1045695 7.6045695,9 6.5,9 C5.3954305,9 4.5,8.1045695 4.5,7 C4.5,5.8954305 5.3954305,5 6.5,5 C7.03043298,5 7.53914081,5.21071368 7.91421356,5.58578644 C8.28928632,5.96085919 8.5,6.46956702 8.5,7 Z" transform="translate(2.5 2)"></path></svg></div>`,
					crown: `<svg name="Crown" class="ownerIcon-1cARO0 ${BDFDB.disCNS.memberownericon}" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#faa61a" fill-rule="nonzero" d="M2,11 L0,0 L5.5,7 L9,0 L12.5,7 L18,0 L16,11 L2,11 L2,11 Z M16,14 C16,14.5522847 15.5522847,15 15,15 L3,15 C2.44771525,15 2,14.5522847 2,14 L2,13 L16,13 L16,14 Z" transform="translate(3 4)"></path><rect width="24" height="24"></rect></g></svg>`,
				},
				newIcons: {
					gift: `<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}"><svg width="24" height="24" name="Gift" class="${BDFDB.disCN.textareaicon}" aria-hidden="false" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"></path></svg></div>`,
					gif: `<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}"><svg width="24" height="24" name="InvertedGIFLabel" class="${BDFDB.disCN.textareaicon}" aria-hidden="false" viewBox="0 0 24 24"><path fill="currentColor" d="M22 4H2C0.896 4 0 4.896 0 6V19C0 20.105 0.896 21 2 21H22C23.104 21 24 20.105 24 19V6C24 4.896 23.104 4 22 4ZM9.375 10.75H5.875V14.25H7.625V13.375H6.75V11.625H9.375V14.25C9.375 15.215 8.59 16 7.625 16H5.875C4.91 16 4.125 15.215 4.125 14.25V10.75C4.125 9.785 4.91 9 5.875 9H9.375V10.75ZM13.75 10.75H12.875V14.25H13.75V16H10.25V14.25H11.125V10.75H10.25V9H13.75V10.75ZM19.875 10.75H16.375V11.625H19V13.375H16.375V16H14.625V10.75C14.625 9.785 15.41 9 16.375 9H19.875V10.75Z"></path></svg></div>`,
					gear: `<div class="${BDFDB.disCNS.buttoncontents}"><svg name="Gear" aria-hidden="false" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg></div>`,
					crown: `<svg aria-label="Server Owner" name="Crown" class="${BDFDB.disCNS.memberownericon}" aria-hidden="false" width="24" height="24" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z" fill="currentColor"></path></svg>`,
				}
			}

			this.defaults = {
				settings: {
					darkMode: {
						value: false,
						description: "Make certain elements dark by default."
					}
					/*useRichTextBox: {
						value: false,
						description: "Preview emojis, mentions, and markdown syntax as you type."
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
				if (settings.darkMode) {
					var bda_dark = document.getElementById('app-mount');
					if (!bda_dark.classList.contains('bda-dark')) bda_dark.classList.add('bda-dark');
				}

				/*if (settings.useRichTextBox) {
					BDFDB.LibraryModules.SettingsUtils.updateLocalSettings({ useRichChatTextBox: settings.useRichTextBox })
				}*/

				var classicDiscordStylesheet = document.getElementById('ClassicDiscord');
				if (classicDiscordStylesheet) classicDiscordStylesheet.remove();
				BDFDB.LibraryRequires.request("https://betterdiscordaddons.000webhostapp.com/loadtheme?theme=ClassicDiscord.css", (error, response, body) => {
					if (body) {
						classicDiscordStylesheet = document.createElement("style");
						classicDiscordStylesheet.setAttribute("id", "ClassicDiscord");
						classicDiscordStylesheet.setAttribute("type", "text/css");
						classicDiscordStylesheet.innerHTML = body;
						document.head.appendChild(classicDiscordStylesheet);
					}
				});
				var classicDiscordStylesheet_Overrid = document.getElementById('ClassicDiscord_Override');
				if (classicDiscordStylesheet_Overrid) classicDiscordStylesheet_Overrid.remove();
				var is_rich_textbox = document.querySelector('.slateContainer-3Qkn2x');//BDFDB.disCN.textareaslatecontainer);
				if (is_rich_textbox) {
					var classicDiscordStylesheet_Override = document.createElement("style");
					classicDiscordStylesheet_Override.setAttribute("id", "ClassicDiscord_Override");
					classicDiscordStylesheet_Override.setAttribute("type", "text/css");
					classicDiscordStylesheet_Override.innerHTML = `${BDFDB.dotCN.textareascrollablecontainer} { overflow-x: hidden !important; overflow-y: scroll !important; max-height: 144px !important; border-radius: 8px !important; scrollbar-width: none !important }`;
					document.head.appendChild(classicDiscordStylesheet_Override);
				}

				var gear_icon = document.querySelector('button[aria-label="User Settings"]');
				if (gear_icon) gear_icon.innerHTML = this.icons.oldIcons.gear;

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
				var bda_dark = document.getElementById('app-mount');
				if (bda_dark.classList.contains('bda-dark')) bda_dark.classList.remove('bda-dark');
				var classicDiscordStylesheet = document.getElementById('ClassicDiscord');
				var classicDiscordStylesheet_Override = document.getElementById('ClassicDiscord_Override');
				if (classicDiscordStylesheet) classicDiscordStylesheet.remove();
				if (classicDiscordStylesheet_Override) classicDiscordStylesheet_Override.remove();
				var gift_icon = document.querySelector(`${BDFDB.dotCN.textareapickerbuttons} button[aria-label="Send a gift"]`);
				var gif_icon = document.querySelector(`${BDFDB.dotCN.textareapickerbuttons} button[aria-label="Open GIF picker"]`);
				var gear_icon = document.querySelector('button[aria-label="User Settings"]');
				//var crown_icon = document.querySelector('svg[name="Crown"]');
				if (gift_icon) gift_icon.innerHTML = this.icons.newIcons.gift;
				if (gif_icon) gif_icon.innerHTML = this.icons.newIcons.gif;
				if (gear_icon) gear_icon.innerHTML = this.icons.newIcons.gear;
				//if (crown_icon) crown_icon.outerHTML = this.icons.newIcons.crown;
				this.started = false;
				BDFDB.unloadMessage(this);
			}
		}

		processChannelEditorContainer(instance) {
			if (instance && instance.node && instance.node.parentElement) {
				var gift_icon = instance.node.parentElement.querySelector(`${BDFDB.dotCN.textareapickerbuttons} button[aria-label="Send a gift"]`);
				var gif_icon = instance.node.parentElement.querySelector(`${BDFDB.dotCN.textareapickerbuttons} button[aria-label="Open GIF picker"]`);
				if (gift_icon) gift_icon.innerHTML = this.icons.oldIcons.gift;
				if (gif_icon) gif_icon.innerHTML = this.icons.oldIcons.gif;
				if (instance.node.parentElement.parentElement && instance.node.parentElement.parentElement.parentElement && instance.node.parentElement.parentElement.parentElement.parentElement && instance.node.parentElement.parentElement.parentElement.parentElement.parentElement && instance.node.parentElement.parentElement.parentElement.parentElement.parentElement.tagName === 'FORM') {
					$('.form-2fGMdU > div').replaceWith(function() {
						return $('.channelTextArea-rNsIhG.channelTextArea-2VhZ6z', this);
					});
				}
			}
			// I know I shouldn't do this
			var gear_icon = document.querySelector('button[aria-label="User Settings"]');
			if (gear_icon && gear_icon.innerHTML !== this.icons.oldIcons.gear) gear_icon.innerHTML = this.icons.oldIcons.gear;
		}

		forceUpdateAll() {
			BDFDB.ModuleUtils.forceAllUpdates(this);
			BDFDB.MessageUtils.rerenderAll();
		}

		/*processMemberListItem(instance, wrapper, returnvalue) {
			if (instance.props) {
				var crown_icon = document.querySelector('svg[name="Crown"]');
				if (crown_icon) crown_icon.outerHTML = this.icons.oldIcons.crown;
			}
		}*/
	}
})();
