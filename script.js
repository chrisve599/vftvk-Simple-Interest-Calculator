function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

   
    if(principal <= 0 || principal == "")
    {
        alert("Enter positive value for Principal");
        document.getElementById("principal").focus();
        return false;
    }

    // p = document.getElementById("principal").value;

    document.getElementById("result").innerHTML="If you deposit <span class='result'> "+principal+"</span>,\<br\>at an interest rate of <span class='result'> "+rate+"%</span>\<br\>You will receive an amount of <span class='result'> "+interest+"</span>,\<br\>in the year <span class='result'> "+year+"</span>\<br\>"
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        