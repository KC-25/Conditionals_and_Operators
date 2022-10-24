var numb = prompt("Pick a number between 1 and 100, no decimals.")

if (numb > 33 && numb < 66){
    alert("Your number between 33 and 66.")
}

else if(numb < 33){
    alert("You chose a number smallar than 33.")
}

else if (numb > 66){
    alert("You chose a number bigger than 66.")
}

else if (numb != 33) {
    alert("You chose a number close to the middle.")
}
else if (numb != 66) {
    alert("You chose a number close to the middle.")
}

else{
    alert("Why didn't you do what I said? How about try again.")
};

document.write("<h3>Is this your number?</h3>")
document.write(numb)