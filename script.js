//function to calculate interest
function compute()
{  
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate / 100;
    
    //retrieve current date and time
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    //display results after calculating interest
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "<br> If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}
//function to change value of slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}



	
