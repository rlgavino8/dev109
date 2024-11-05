// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
upRight(pHeight, pColorEven, pColorOdd, pSymbol);
downRight(pHeight, pColorEven, pColorOdd, pSymbol);

}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=0;i<pHeight;i++){
var whiteSpace = "";
rLine +="<p>";
for (w=0;w<pHeight-i;w++) {whiteSpace +="<span style='color:" + "#FFFFFF" + ";'>" + pSymbol +"</span>".repeat(pHeight-w);}
rLine +=whiteSpace;
//Create each line on the Rhombus
for(j=0;j<=i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
}
rLine +="<span style='color:" + "#FFFFFF" + ";'>" + pSymbol +"</span>";  
for(k=i-1;k<2*i;k++){
  //Is the position even or odd so we change the color
if (k%2)
//even
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
}  
  
  
  
  
rLine +="</p>";
console.log(rLine);

}

document.getElementById("upRight").innerHTML = rLine;
}


function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
var rLine ="";
for (i=pHeight;i > 0;i--){
var whiteSpace = "";
rLine +="<p>";
rLine +="<span style='color:" + "#FFFFFF" + ";'>" + pSymbol +"</span>";  
for (w=0;w<pHeight-i;w++) {whiteSpace +="<span style='color:" + "#FFFFFF" + ";'>" + pSymbol +"</span>".repeat(pHeight-w);}
rLine +=whiteSpace;
//Create each line on the Rhombus
for(j=0;j<i;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}
rLine +="<span style='color:" + "#FFFFFF" + ";'>" + pSymbol +"</span>";
  
for(j=i-1;j<2*i-1;j++){

//Is the position even or odd so we change the color
if (j%2)
//even
rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
else
//odd
rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

}  
  
rLine +="</p>";
// console.log(rLine);

}

document.getElementById("downRight").innerHTML = rLine;
}
