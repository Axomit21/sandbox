function countBy(x, n) {
	let z = [];
	for (let i = 0; i < n; i++)
	  {
		z.push(x + x * i);
	  }
	return z;
  }