var getLarge = 0
var getWidth = 0
var getHeight = 0
var result1 = 0
var result2 = 0

const feet = 1728
const pulgada = 2.54

document.getElementById('result').style.display = 'none';
document.getElementById('format').style.display = 'none';

function getResult(){
   getLarge = document.getElementById('large').value;
   getWidth = document.getElementById('width').value;
   getHeight = document.getElementById('height').value;

   var large = parseInt(getLarge);
   // if(isNaN(large)) num = 0;

   var width = parseInt(getWidth);
   // if(isNaN(width)) num = 0;

   var height = parseInt(getHeight);
   // if(isNaN(height)) num = 0;

   result1 = large * width * height
   result2 = result1 / feet
   var final = Math.round(result2)

   
   document.getElementById('result').style.display = 'block';
   document.getElementById('format').style.display = 'block';
   document.getElementById('result').innerHTML = final;
}

function getConvertion(){
   var getCm = document.getElementById('cm').value

   var convert = getCm / pulgada
   var final = convert.toFixed(2)

   document.getElementById('in').value = final
}

function reset(){
   document.getElementById('cm').value = ""
   document.getElementById('in').value = ""
}