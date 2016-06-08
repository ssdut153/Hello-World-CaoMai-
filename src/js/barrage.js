$(document).ready(function () {
	var all = ['Hello world, I am Cao Mai !',
		'你好世界，我是曹迈！',
		'こにじわ世界、私は曹迈です！',
		'bonjour, monde, Je suis Cao Mai !',
		'Ciao Mondo, Io Sono Cao Mai !',
		'Hola a todo el mundo, Soy Cao Mai !',
		'hallo welt, Ich bin Cao Mai !'];
	var now = 0;
	$(window).load(function () {
		var init = function() {
			setInterval(function () {
				if (now < all.length) {
					var _color = $.getRandomColor();
					var _lable = $('<div style="right: 20px; top: 0; opacity: 1; color: ' + _color + ';">' + all[now] + '</div>');
					$(".mask").append(_lable.show());
					now++;
					$.init_barrage(_lable);
				}
				else {
					now = 0;
				}
			}, 500000 / $('div.blessings').width());
		};
		init();
		$(".barrage,.s_close").toggle("slow");
	});
	$('form.addblessing').submit(function () {
		var $this = $(this);
		var blessing = $this.serialize();
		if (blessing === '') {
			return 0;
		}
	});
});
(function ($) {
	$.init_barrage = function (_label) {
		var blessings = $('div.blessings');
		var _height = _label.height();
		var _random = Math.floor(blessings.height() / _height);
		var _top = _random * Math.random() * _height;
		_top = _top > blessings.height() - _height ? blessings.height() - _height : _top;
		var _left = blessings.width() + _label.width();
		_label.css({left: _left, top:_top, color: $.getRandomColor()});
		var time =  (Math.random() + 2) * 10000;
		_label.animate({left: "-" + _left + "px"}, time, function () {
			$(this).remove();
		});
	};
	$.getRandomColor = function () {
		return '#' + (function (h) {
					return new Array(7 - h.length).join("0") + h;
				}
			)((Math.random() * 0x1000000 << 0).toString(16));
	};
})(jQuery);
