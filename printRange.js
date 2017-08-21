function printRange(start,end,skip){
	if(skip===undefined){
		skip=1;
	}
	if(end===undefined){
		end = start;
		for (var i = 0; i < end; i += skip){
			console.log(i);
		}
	}
	else{
		for (var i = start; i < end; i+= skip){
			console.log(i);
		}
	}
}
