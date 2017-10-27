'use strict';
const BluespessClient = require('bluespess-client');
const $ = require('jquery');

var client = new BluespessClient();
global.client = client;

if(global.is_bs_editor_env) {
	module.exports = client;
} else {
	$(window).on("load", () => {
		client.login();
	});
}
