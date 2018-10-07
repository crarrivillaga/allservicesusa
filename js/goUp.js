$(document).ready(function(){
   $('#sky').click(function(){
       $('body, html').animate({
           scrollTop: '0px'
       }, 300); //300, velocidad en la que sube                    
   }); 
   
   $(window).scroll(function(){
       if($(this).scrollTop() > 0){
           $('#sky').slideDown(300);
       }else{
           $('#sky').slideUp(300);
       } 
   });
});