let input = document.querySelector("input");
let message = document.querySelector("h3");

const pi = 3.14;

function berekenOmtrek()
{
    return input.value * pi;
}

function berekenOppervlakte()
{
    let inputt = input.value;
    return (inputt * inputt * pi * 0.25);
}

function showMessage()
{
    message.innerText = "De omtrek van de circel is: " + berekenOmtrek() + " en de oppervlakte is: " + berekenOppervlakte();
}