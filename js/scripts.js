$(document).ready(function() {
    // $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    //     $('.carousel-caption').addClass('zoom')
    // });
    // $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    //     $('.carousel-item').addClass('fade');
    //     // alert("test")
    // });
    // console.log($('window'))
    $(window).bind('scroll', () => {
        if ($(window).scrollTop() > $('.introduce').position()['top']) {
            $('.header').addClass('sticky');
        } else if ($(window).scrollTop() == 0) {
            $('.header').removeClass('sticky');
        }
    });
});

  
// var x = window.matchMedia("(max-width: 600px)")
// x.addEventListener('change', (e) => {
//     if (e.matches) {
//         // alert("test")
//         let caption = document.getElementsByClassName('carousel-caption');
//         Array.prototype.forEach.call([...caption], child => child.classList.remove('animate__zoomInDown'));
//         // caption.forEach(element => element.children.classList.remove('animate__animated animate__zoomInDown'));
//         // caption.children.classList.remove('animate__animated animate__zoomInDown');
//     }

//     else {
//         let caption = document.getElementsByClassName('carousel-caption');
//         Array.prototype.forEach.call([...caption], child => child.classList.add('animate__zoomInDown'));
//     }
// });
