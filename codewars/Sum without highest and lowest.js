function sumArray(array) {
	if (array === null || array === undefined || array.length < 3)
	  return 0;

	return array.reduce((a,b) => a + b, 0) - Math.min(...array) - Math.max(...array);
  }

let sumArray = array => Array.isArray(array) && array.length > 1 ? array.reduce((a, b) => a + b, 0) - Math.min(...array) - Math.max(...array) : 0;