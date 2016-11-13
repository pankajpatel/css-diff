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
		var rules = a.stylesheet.rules.filter(function(item){
			return item.type == 'rule';
		})
		console.log(a.stylesheet.rules[2], b.stylesheet.rules[2])
		console.log(rules)
	});
});