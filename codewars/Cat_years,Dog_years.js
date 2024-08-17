var humanYearsCatYearsDogYears = function(humanYears) {
	let cat = [15, 9, 4];
	let dog = [15, 9, 5];
	let catYears = 0;
	let dogYears = 0;
	for (let i = 0; i < humanYears; i++) {
	  if(i < cat.length)
		{
		  catYears += cat[i];
		  dogYears += dog[i];
		} else
		{
		  catYears += cat[2];
		  dogYears += dog[2];
		}
	}
	
	return [humanYears,catYears,dogYears];
  }
  