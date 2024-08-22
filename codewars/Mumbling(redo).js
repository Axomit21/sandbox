function accum(s) {
	let str = [];
	let char = [];
  let elem = "";
	for(let i = 0; i < s.length; i++)
	  {
		char.push(s[i].toUpperCase());
		for (let j = 0; j < i; j++)
		  {
			char.push(s[i].toLowerCase());
		  }
    elem = char.join("");
    str.push(elem);
    char = [];
    elem = "";
	  }
  
	  return str.join("-");
  }