//META{"name":"ClassicDiscord","website":"https://github.com/BannerBomb/BetterDiscordThemes","source":"https://betterdiscordaddons.000webhostapp.com/loadtheme?theme=ClassicDiscord.css"}*//

class ClassicDiscord {
	getName () { return "ClassicDiscord"; }

	getVersion () { return "1.0.0"; } 

	getAuthor () { return "BannerBomb"; }

	getDescription () { return "Fully brings back discord's old Dark and Light modes. Thanks to Ownsin#0001 for helping spot the bugs."; }

	constructor () {
		this.changelog = {
			"released":[["Initial release"]]
		};

		this.labels = {};

		this.patchModules = {
			"ChannelTextArea":"componentDidMount",
			"Message":"componentDidMount",
			"MessageContent":"componentDidMount",
			"StandardSidebarView":"componentWillUnmount"
		};
	}

	initConstructor () {

		this.giftButtonMarkup =
			`<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}">
				<svg name="Gift" class="${BDFDB.disCN.textareaicon}" width="16" height="16" viewBox="0 0 16 16">
					<path fill="currentColor" fill-rule="evenodd" d="M13.9499381,4.97031408 L15,4.97031408 C15.5522847,4.97031408 16,5.42245961 16,5.98020939 L16,8 L0,8 L0,5.98020939 C-6.76353751e-17,5.42245961 0.44771525,4.97031408 1,4.97031408 L1.97920984,4.97031408 C1.01782154,3.76290607 1.11036555,1.99225385 2.23546762,0.895004171 C3.42730882,-0.267332482 5.32651446,-0.233853688 6.47746213,0.969781151 C7.07300942,1.59259093 7.63216429,2.52072721 7.97475156,3.47225991 C8.3157709,2.50516262 8.88309781,1.55764854 9.48796509,0.925092131 C10.6389128,-0.278542708 12.5381184,-0.312021502 13.7299596,0.85031515 C14.8690241,1.96118164 14.9497436,3.76226816 13.9499381,4.97031408 Z M10.635938,5 C10.734461,4.96362465 10.837387,4.92192897 10.9436159,4.87518066 C11.6535979,4.56273792 12.4171451,4.06075227 12.7190202,3.74012812 C13.103105,3.33218843 13.0920422,2.68213425 12.6943108,2.28819147 C12.2965794,1.8942487 11.6627922,1.90559543 11.2787075,2.31353512 C10.9768324,2.63415927 10.514354,3.43434591 10.2346934,4.17301099 C10.1162728,4.48579438 10.0363609,4.77004854 10,5 L10.635938,5 Z M5.25139448,5 L6,5 C5.96063336,4.77507371 5.88337351,4.50341724 5.77235412,4.20642989 C5.49198082,3.45640483 5.02832378,2.64391205 4.72567933,2.318357 C4.34061573,1.90414358 3.7052133,1.89262234 3.30646827,2.29262359 C2.90772324,2.69262485 2.89663225,3.35267626 3.28169585,3.76688968 C3.58434031,4.09244473 4.34983347,4.60215046 5.06162485,4.91939828 C5.12617993,4.94817069 5.18951835,4.97505811 5.25139448,5 Z M1,10 L7,10 L7,16 L2,16 C1.44771525,16 1,15.5522847 1,15 L1,10 Z M9,10 L15,10 L15,15 C15,15.5522847 14.5522847,16 14,16 L9,16 L9,10 Z"></path>
				</svg>
			</div>`;

		this.gifButtonMarkup =
			`<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}">
				<svg class="${BDFDB.disCN.textareaicon} gifPickerIcon-132le6" width="24" height="18" viewBox="0 0 24 18">
					<path fill="currentColor" d="M3,0 L21,0 C22.6568542,-3.04359188e-16 24,1.34314575 24,3 L24,15 C24,16.6568542 22.6568542,18 21,18 L3,18 C1.34314575,18 2.02906125e-16,16.6568542 0,15 L0,3 C-2.02906125e-16,1.34314575 1.34314575,-5.83819232e-16 3,-8.8817842e-16 Z M11,5 L11,13 L13,13 L13,5 L11,5 Z M8,5 L4,5 C3.28,5 3,5.33333333 3,6 L3,12 C3,12.6666667 3.28,13 4,13 L8,13 C8.72,13 9,12.6666667 9,12 L9,8 L6,8 L6,10 L7,10 L7,11 L5,11 L5,7 L9,7 L9,6 C9,5.33333333 8.72,5 8,5 Z M21,7 L21,5 L15,5 L15,13 L17,13 L17,10 L20,10 L20,8 L17,8 L17,7 L21,7 Z"></path>
				</svg>
			</div>`;

		this.oldGiftButtonMarkup =
			`<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}">
				<svg width="24" height="24" name="Gift" class="${BDFDB.disCN.textareaicon}" aria-hidden="false" viewBox="0 0 24 24">
					<path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"></path>
				</svg>
			</div>`;

		this.oldGifButtonMarkup =
			`<div class="${BDFDB.disCNS.buttoncontents + BDFDB.disCNS.textareabutton + BDFDB.disCN.textareapickerbutton}">
				<svg width="24" height="24" name="InvertedGIFLabel" class="${BDFDB.disCN.textareaicon}" aria-hidden="false" viewBox="0 0 24 24">
					<path fill="currentColor" d="M22 4H2C0.896 4 0 4.896 0 6V19C0 20.105 0.896 21 2 21H22C23.104 21 24 20.105 24 19V6C24 4.896 23.104 4 22 4ZM9.375 10.75H5.875V14.25H7.625V13.375H6.75V11.625H9.375V14.25C9.375 15.215 8.59 16 7.625 16H5.875C4.91 16 4.125 15.215 4.125 14.25V10.75C4.125 9.785 4.91 9 5.875 9H9.375V10.75ZM13.75 10.75H12.875V14.25H13.75V16H10.25V14.25H11.125V10.75H10.25V9H13.75V10.75ZM19.875 10.75H16.375V11.625H19V13.375H16.375V16H14.625V10.75C14.625 9.785 15.41 9 16.375 9H19.875V10.75Z"></path>
				</svg>
			</div>`;
	}

	//legacy
	load () {}

	start () {
		if (!global.BDFDB) global.BDFDB = {myPlugins:{}};
		if (global.BDFDB && global.BDFDB.myPlugins && typeof global.BDFDB.myPlugins == "object") global.BDFDB.myPlugins[this.getName()] = this;
		var libraryScript = document.querySelector('head script#BDFDBLibraryScript');
		if (!libraryScript || (performance.now() - libraryScript.getAttribute("date")) > 600000) {
			if (libraryScript) libraryScript.remove();
			libraryScript = document.createElement("script");
			libraryScript.setAttribute("id", "BDFDBLibraryScript");
			libraryScript.setAttribute("type", "text/javascript");
			libraryScript.setAttribute("src", "https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js");
			libraryScript.setAttribute("date", performance.now());
			libraryScript.addEventListener("load", () => {this.initialize();});
			document.head.appendChild(libraryScript);
			this.libLoadTimeout = setTimeout(() => {
				libraryScript.remove();
				BDFDB.LibraryRequires.request("https://mwittrien.github.io/BetterDiscordAddons/Plugins/BDFDB.js", (error, response, body) => {
					if (body) {
						libraryScript = document.createElement("script");
						libraryScript.setAttribute("id", "BDFDBLibraryScript");
						libraryScript.setAttribute("type", "text/javascript");
						libraryScript.setAttribute("date", performance.now());
						libraryScript.innerText = body;
						document.head.appendChild(libraryScript);
					}
					this.initialize();
				});
			}, 15000);
		}
		else if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) this.initialize();
		this.startTimeout = setTimeout(() => {this.initialize();}, 30000);
	}

	initialize () {
		if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			if (this.started) return;
			BDFDB.loadMessage(this);

			var classicDiscordStylesheet = document.getElementById('ClassicDiscord');
			if (classicDiscordStylesheet) classicDiscordStylesheet.remove();
			classicDiscordStylesheet = document.createElement("link");
			classicDiscordStylesheet.setAttribute("id", "ClassicDiscord");
			classicDiscordStylesheet.setAttribute("type", "text/css");
			classicDiscordStylesheet.setAttribute("rel", "stylesheet");
			classicDiscordStylesheet.setAttribute("href", "https://betterdiscordaddons.000webhostapp.com/loadtheme?theme=ClassicDiscord.css");
			document.head.appendChild(classicDiscordStylesheet);

			BDFDB.WebModules.forceAllUpdates(this);
		} else {
			console.error(`%c[${this.getName()}]%c`, 'color: #3a71c1; font-weight: 700;', '', 'Fatal Error: Could not load BD functions!');
		}
	}

	stop () {
		if (global.BDFDB && typeof BDFDB === "object" && BDFDB.loaded) {
			var classicDiscordStylesheet = document.getElementById('ClassicDiscord');
			if (classicDiscordStylesheet) classicDiscordStylesheet.remove();
			var buttons = document.querySelectorAll(`${BDFDB.dotCN.textareapickerbuttons} button[tabindex="2"], ${BDFDB.dotCN.textareapickerbuttons} .buttonContainer-21MN7J button[tabindex="3"]`);
			if (buttons[0]) buttons[0].innerHTML = this.oldGiftButtonMarkup;
			if (buttons[1]) buttons[1].innerHTML = this.oldGifButtonMarkup;

			//BDFDB.unloadMessage(this);
		}
	}


	// begin of own functions
	processChannelTextArea (instance, wrapper, returnvalue) {
		if (instance.props && instance.props.type && instance.props.type == "normal" && !instance.props.disabled) {
			let textarea = wrapper.querySelector("textarea");
			if (textarea) {
				var buttons = wrapper.querySelectorAll(`${BDFDB.dotCN.textareapickerbuttons} button[tabindex="2"], ${BDFDB.dotCN.textareapickerbuttons} .buttonContainer-21MN7J button[tabindex="3"]`);
				if (buttons[0]) buttons[0].innerHTML = this.giftButtonMarkup;
				if (buttons[1]) buttons[1].innerHTML = this.gifButtonMarkup;
			}
		}
	}
}
