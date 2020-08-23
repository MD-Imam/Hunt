  
// fixed/sticky menu

$(window).scroll(function(){
    var scrollamount = $(window).scrollTop()
    
    if(scrollamount > 0){
      $(".menu").addClass("fixed")
    }else{
      $(".menu").removeClass("fixed")
    }
  
      
  
  
  
    if(scrollamount > 500){
      $(".btop").fadeIn();
    }else{
      $(".btop").fadeOut();
    }
  })

// -----------------------------------
//          protfolio part
// -----------------------------------
$('.mini').slick({
    dots: false,
   
    autoplay: true,
    autoplaySpeed: 1200,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    // prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    // nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint:400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// -----------------------------------
//          protfolio part
// -----------------------------------
// -----------------------------------
//          banner part
// -----------------------------------
$('#banner-part').slick({
    dots: false,
    fade:true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    // prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    // nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// -----------------------------------
//        banner part
// -----------------------------------
// -----------------------------------
//          our services part
// -----------------------------------
$('#our-services .total').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,

    prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint:576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// -----------------------------------
//          our services part
// -----------------------------------
// -----------------------------------
//          our services part bottom
// -----------------------------------
$('.regular').slick({
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor:'.around',

    prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-down next" aria-hidden="true"></i>',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            
            slidesToShow: 3,
            vertical: false,
            slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
});









$('.around').slick({
    asNavFor:'.regular',
    dots: false,
    infinite: true,
    speed: 900,
    // autoplay: true,
    autoplaySpeed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // vertical: true,
    centerMode: true,
    centerPadding: 0,
    arrows:false,
    fade:true,
   
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});








// -----------------------------------
//          our services part bottom
// -----------------------------------
// -----------------------------------
//          pricing part 
// -----------------------------------
$('#pricing-part .34').slick({
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,

    autoplaySpeed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
       
            slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
});
// -----------------------------------
//          pricing part
// -----------------------------------
// -----------------------------------
//          theme  part
// -----------------------------------
$('.oil').slick({
    dots: false,
    infinite: true,
    speed: 300,
    // autoplay: true,

    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
          
            slidesToScroll: 1
        }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
});
// -----------------------------------
//         theme   part
// -----------------------------------\


// counter up
$('.counter').counterUp({
    delay: 10,
    time: 1000
});