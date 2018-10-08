$(document).ready(function(){
   $(window).scroll(function(){
      if($(this).scrollTop() > 90){
          $('.icon-menu-second').slideDown(300);
      }else{
          $('.icon-menu-second').addClass('icon-menu').slideUp(300);
      } 
  });
})