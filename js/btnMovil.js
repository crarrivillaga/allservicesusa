$(document).ready(function(){
   $('.movil').hide()
   var cont = 1

   $('.icon-menu').click(function(){
      if(cont==1){
         $('.movil').fadeIn();
         $('body').css('overflow','hidden');
         cont = 0;
      }else{
         cont = 1
         $('body').css('overflow','auto');
         $('.movil').fadeOut();
      }
   })

   $('.icon-x').click(function(){
      cont = 1
      $('.movil').fadeOut();
      $('body').css('overflow','auto');
   })
})