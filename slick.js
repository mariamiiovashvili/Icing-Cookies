$(function(){
    $('.multiple-items').slick({
     infinite: false,
     slidesToShow: 3,
     slidesToScroll: 2,
     
     
    
     
     dots:true,
     
     responsive: [
        
         {
          breakpoint: 880,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
         {
           breakpoint: 470,
           settings: {
             
             slidesToShow: 1,
             slidesToScroll: 2
           }
         }
     ]
   });    
 });