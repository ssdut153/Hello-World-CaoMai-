$(document).ready(function () {
	var html = $('html');
	var blessings=$('div.blessings');
	var header = $('header');
	var styles = function () {
		var height = 0;
		if(parseInt(html.css('width')) >= 641) {
			height = parseInt(html.css('height')) - parseInt(header.css('height'))  - 60;
		} else {
			height = parseInt(html.css('height')) - parseInt(header.css('height'))  - 40;
		}
		blessings.css('height', height + 'px');
	};
	styles();
	$(window).load(styles).resize(styles);
});