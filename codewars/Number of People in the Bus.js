var number = function(busStops){
	let passengers = 0;
	for (let i = 0; i < busStops.length; i++)
	  {
		passengers = passengers + busStops[i][0] - busStops[i][1];
	  }
	return passengers;
  }