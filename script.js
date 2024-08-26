for(let i = 1; i <= 20; i++){
	let output = "";
	if(i % 3 == 0 && i % 5 == 0){
		output = "FizzBuzz";
	} else if(i % 3 == 0){
		output = "Fizz";
	} else if(i % 5 == 0){
		output = "Buzz";
	} else {
		output = i;
	}
	alert(output);
}