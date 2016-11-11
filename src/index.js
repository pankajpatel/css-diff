var css = require('css');
var cssParse = require('css-parse');
// var obj = css.parse('body { font-size: 12px; }', options);
// css.stringify(obj, options);

fs = require('fs');
fs.readFile('test/a.css', 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
  	}
	fs.readFile('test/b.css', 'utf8', function (e,d) {
		if (err) {
			return console.log(err);
		}
		var a = css.parse(data);
		var b = css.parse(d);
		console.log(JSON.stringify( a ), JSON.stringify( b ) )
	});
});