
let num = 0;
try{
document.getElementById("submitBtn").addEVentListener("click", fuzz());
}
catch(err){document.getELementById("mainContainer").innerHTML=err.message;}

throw "Error";


fuzz()
{
num=document.getElementById("FizzBuzzNumber");
num=Number(num);

if(num%3)
{

}

if(num%5)
{

}

if(num%3&&num%5)
{

}
}
