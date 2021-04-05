var cards = $("#promotions").children();
var ncards = $("#promotions").children().length;
var curr = 0;

$(document).ready(function() {
    swapImages();
    console.log($("#promotions").width() + " " + $("#promotions").width()/2);
    console.log($(".promo-card").width());
    setInterval(swapImages, 3000);

    function swapImages() {
        $.each(cards, function (i, card) { 
             if (i == curr - 1 || (i == ncards-1 && curr == 0)) {
                 $(card).addClass('left');
                 $(card).css({
                     'left' : $("#promotions").width()/2 - $(card).width() + 'px',
                     'z-index' : '0'
                });

                if ($(card).hasClass('right')) {
                    $(card).removeClass('right');
                }
                if ($(card).hasClass('active')) {
                    $(card).removeClass('active');
                }
             } else if (i == curr) {
                $(card).addClass('active');
                $(card).css({
                    'left' : $("#promotions").width()/2 - $(card).width()/2 + 'px',
                    'z-index' : '10'
                });

                if ($(card).hasClass('left')) {
                    $(card).removeClass('left');
                }
                if ($(card).hasClass('right')) {
                    $(card).removeClass('right');
                }
             } else {
                 $(card).addClass('right');

                 if ($(card).hasClass('active')) {
                     $(card).removeClass('active');
                 }
                 if ($(card).hasClass('left')) {
                     $(card).removeClass('left');
                 }

                 $(card).css({
                     'left' : $("#promotions").width()/2 + $(card).width()/4 + 'px',
                     'z-index' : ncards-i
                 });
             }
        });

        curr++;
        if (curr == ncards) {
            curr = 0;
        }
    }
})