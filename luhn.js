function check(){

    var value = document.getElementById("cardNumber").value;

    var textview = document.getElementById('outputText');
    

		var sumTotal = 0, theDigit = 0, atSecondDigit = false;

		value = value.replace(/\D/g, "");

		for(var n = value.length - 1; n >= 0; n--){
			var exactChar = value.charAt(n),
			theDigit = parseInt(exactChar, 10);

			if(atSecondDigit){
				if((theDigit *= 2) > 9){
					theDigit -= 9;
				}
			}

			sumTotal += theDigit;
			atSecondDigit = !atSecondDigit;
		}


		if(sumTotal % 10 == 0){
			textview.innerHTML = "Valid";
			textview.style.color = "#00FF00";	
		}
		else{
			textview.innerHTML = "Invalid";
			textview.style.color = "#FF0000";	
		}
}