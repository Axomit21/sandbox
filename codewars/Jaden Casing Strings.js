String.prototype.toJadenCase = function () {
	let toUpper = match => match.toUpperCase();
	return this.replace(/(?:^|\s)\w/g, toUpper);
  };

  String.prototype.toJadenCase = function () {
	return this.split(" ").map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(" ");
  };

  String.prototype.toJadenCase = function () {
	return this.replace(/(^|\s)\w/g, x => x.toUpperCase());
  };