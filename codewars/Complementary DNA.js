function dnaStrand(dna){
	let myObj = {
	  "A": "T",
	  "T": "A",
	  "C": "G",
	  "G": "C"
	};
	return dna.replace(/A|T|C|G/g, x => myObj[x]);
  }