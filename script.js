// init Isotope
var $grid = $('.collection-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});

var filterbtns = $('.filter-button-group').find('button');

function resetFilterBtns() {
    filterbtns.each(function () {
        $(this).removeClass('active-filter-btn');
    });
}
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Display 4 slides at a time
    spaceBetween: 20, // Space between slides
    loop: true, // Enable loop mode
    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
    },
});
// Add event listeners for custom buttons on mobile and tablet views
const customPrevButton = document.querySelector('.custom-swiper-button-prev');
const customNextButton = document.querySelector('.custom-swiper-button-next');

customPrevButton.addEventListener('click', () => {
    swiper.slidePrev();
});

customNextButton.addEventListener('click', () => {
    swiper.slideNext();
});


