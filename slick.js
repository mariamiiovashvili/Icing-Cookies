$(function(){
    $('.multiple-items').slick({
     infinite: false,
     slidesToShow: 3,
     slidesToScroll: 2,
     
     
    
     
     dots:true,
     
     responsive: [
         {
           breakpoint: 922,
           settings: {
             
             slidesToShow: 3,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
   });    
 });