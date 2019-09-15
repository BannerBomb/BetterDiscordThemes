//META { "name": "enableMergely", "website": "https://github.com/BannerBomb/BetterDiscordThemes" } *//
var enableSaveAllResources = (function() {
	var listener, path, readdir, _fs, _path, _electron, _remote, _bw;

	class enableSaveAllResources {
		getName() {
			return "Enable Mergely"
		}
		getDescription() {
			return "Loads Mergely. Merge and diff documents online. Mergely is an online diff/merge editor and javascript library that highlights changes in similar texts. I can be used within your own web application to compare files, text, C, C++, Java, HTML, XML, CSS, and Javascript right from the developer console!"
		}
		getAuthor() {
			return "BannerBomb"
		}
		getVersion() {
			return "0.0.1"
		}

		start() {
			_bw.webContents.on("mergely-opened", listener);
			if (_bw.webContents.isDevToolsOpened()) listener();
		}

		stop() {
			_bw.webContents.removeListener("mergely-opened", listener);
		}
	}

	_fs = require("fs");
	_path = require("path");
	_electron = require("electron");
	({
		remote: _remote
	} = _electron);

	_bw = _remote.getCurrentWindow();

	readdir = require("util").promisify(_fs.readdir);

	_electron.webFrame.registerURLSchemeAsPrivileged("chrome-extension");

	// Should you have mergely installed in a different location, you can
	// override the full path in an `saveAllResources.plugin.json` file as `json.path`.
	path = BdApi.getData("mergely", "path") || function() {
		switch (process.platform) {
			case 'win32':
				return _path.resolve(process.env.LOCALAPPDATA, "Google/Chrome/User Data");
			case 'linux':
				return _path.resolve(process.env.HOME, ".config/google-chrome");
			case 'darwin':
				return _path.resolve(process.env.HOME, "Library/Application Support/Google/Chrome");
		}
	}() + "/Default/Extensions/cgkjmjoahmmhidniejilekodndcobogn/";

	listener = async function() {
		_remote.BrowserWindow.removeDevToolsExtension("Mergely");
		var version, bOk = true;
		try {
			// Since chrome does the updating, a new version might have been installed and the previous one might no longer be present.
			[version] = (await readdir(path)).slice(-1);
		} catch (err) {
			if ("ENOENT" !== err.code) throw err;
			bOk = false;
		}
		if (bOk && _remote.BrowserWindow.addDevToolsExtension(_path.join(path, version)))
			console.log("Successfully installed mergely.");
		else
			console.error("Couldn't find mergely in chrome extensions! You may install it from here https://github.com/BannerBomb/BetterDiscordThemes");
	}

	return enableSaveAllResources;
})();
