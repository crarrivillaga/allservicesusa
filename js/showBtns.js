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

       if($(this).scrollTop() > 90){
          $('.icon-menu-second').slideDown(300);
        }else{
          $('.icon-menu-second').addClass('icon-menu').slideUp(300);
        } 
   });
});