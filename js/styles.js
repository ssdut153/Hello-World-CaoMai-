$(document).ready(function () {
	var html = $('html');
	var blessings=$('div.blessings');
	var header = $('header');
	var footer=$('footer');
	var styles = function () {
		var height = 0;
		if(parseInt(html.css('width')) >= 641) {
			height = html.height() - header.height()-footer.height()  - 60;
		} else {
			height = html.height() - header.height()-footer.height()   - 40;
		}
		blessings.css('height', height + 'px');
	};
	styles();
	$(window).load(styles).resize(styles);
});