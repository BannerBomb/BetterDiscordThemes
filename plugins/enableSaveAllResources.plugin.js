//META { "name": "enableSaveAllResources", "website": "https://github.com/BannerBomb/BetterDiscordThemes" } *//
var enableSaveAllResources = (function() {
	var listener, path, readdir, _fs, _path, _electron, _remote, _bw;

	class enableSaveAllResources {
		getName() {
			return "Enable SaveAllResources"
		}
		getDescription() {
			return "Loads Save all Resources which is accessible from the DevTools. This tool allows you to compress discord's workspace files (e.g, css, js, html, svg ... etc) and downloads them."
		}
		getAuthor() {
			return "BannerBomb"
		}
		getVersion() {
			return "1.0.0"
		}

		start() {
			_bw.webContents.on("save-all-resources-opened", listener);
			if (_bw.webContents.isDevToolsOpened()) listener();
		}

		stop() {
			_bw.webContents.removeListener("save-all-resources-opened", listener);
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

	// Should you have SaveAllResources installed in a different location, you can
	// override the full path in an `saveAllResources.plugin.json` file as `json.path`.
	path = BdApi.getData("saveAllResources", "path") || function() {
		switch (process.platform) {
			case 'win32':
				return _path.resolve(process.env.LOCALAPPDATA, "Google/Chrome/User Data");
			case 'linux':
				return _path.resolve(process.env.HOME, ".config/google-chrome");
			case 'darwin':
				return _path.resolve(process.env.HOME, "Library/Application Support/Google/Chrome");
		}
	}() + "/Default/Extensions/abpdnfjocnmdomablahdcfnoggeeiedb/";

	listener = async function() {
		_remote.BrowserWindow.removeDevToolsExtension("Save All Resources");
		var version, bOk = true;
		try {
			// Since chrome does the updating, a new version might have been installed and the previous one might no longer be present.
			[version] = (await readdir(path)).slice(-1);
		} catch (err) {
			if ("ENOENT" !== err.code) throw err;
			bOk = false;
		}
		if (bOk && _remote.BrowserWindow.addDevToolsExtension(_path.join(path, version)))
			console.log("Successfully installed save all resources.");
		else
			console.error("Couldn't find saveAllResources in chrome extensions! You may install it from here https://chrome.google.com/webstore/detail/save-all-resources/abpdnfjocnmdomablahdcfnoggeeiedb");
	}

	return enableSaveAllResources;
})();
