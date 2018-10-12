var getLarge = 0
var getWidth = 0
var getHeight = 0
var result1 = 0
var result2 = 0

const feet = 1728
const pulgada = 2.54
const pricePerFeet = 17

document.getElementById('result').style.display = 'none';
document.getElementById('format').style.display = 'none';
document.getElementById('price').style.display = 'none';
document.getElementById('errorMessage').style.display = 'none';

function getResult(){
   var allowed = true
   var inputL = document.getElementById('large').value;
   var inputW = document.getElementById('width').value;
   var inputH = document.getElementById('height').value;

   if (inputL == '') {
      allowed = false;
   }
   if (inputW == '') {
      allowed = false;
   }
   if (inputH == '') {
      allowed = false;
   }

   if(!allowed){
      document.getElementById('errorMessage').style.display = 'block';      
   }else{
      document.getElementById('errorMessage').style.display = 'none';
      
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
      // var final = Math.round(result2)
      var result2Rounded = result2.toFixed(1)
      console.log('result2 ' + result2)
      // result2 = Math.round(result2)
      console.log('result2 ' + result2)

      var precio = result2 * pricePerFeet
      // console.log('preciofull ' + precio)
      // precio = precio.toFixed(2)
      precio = Math.round(precio)
      // console.log('preciofinal ' + precio)

      
      document.getElementById('result').style.display = 'block';
      document.getElementById('format').style.display = 'block';
      document.getElementById('price').style.display = 'block';

      document.getElementById('result').innerHTML = result2Rounded;
      document.getElementById('priceNumber').innerHTML ='$' + precio + ' USD';
   }
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