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

var lightbites = document.getElementById("menu-light");
var maincourse = document.getElementById("menu-main");
var drinks = document.getElementById("menu-drinks");
var desserts = document.getElementById("menu-desserts");
var choices = document.getElementById("menu").children;

var allmenu = document.getElementById("categ-cont");
var menu_child = allmenu.children;

console.log(menu_child);

lightbites.onclick = function(e) {
    var lb_content = document.getElementById("light-bites");
    if (lb_content.classList.contains("menu-non-active")) {
        lb_content.classList.remove("menu-non-active");        
    }
    lb_content.classList.add("menu-active");

    if (!lightbites.classList.contains("choice-active")) {
        lightbites.classList.add("choice-active");
    }

    Array.prototype.forEach.call(choices, (choice, i) => {
        if (choice != lightbites) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        }
    })

    Array.prototype.forEach.call(menu_child, (item, i) => {
        if (item != lb_content) {
            if (item.classList.contains("menu-active")) {
                item.classList.remove("menu-active");
            }

            if (!item.classList.contains("menu-non-active")) {
                item.classList.add("menu-non-active");
            }
        }
    })
}

maincourse.onclick = function(e) {
    var mc_content = document.getElementById("main-course");
    if (mc_content.classList.contains("menu-non-active")) {
        mc_content.classList.remove("menu-non-active");        
    }
    mc_content.classList.add("menu-active");

    if (!maincourse.classList.contains("choice-active")) {
        maincourse.classList.add("choice-active");
    }

    Array.prototype.forEach.call(choices, (choice, i) => {
        if (choice != maincourse) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        }
    })

    Array.prototype.forEach.call(menu_child, (item, i) => {
        if (item != mc_content) {
            if (item.classList.contains("menu-active")) {
                item.classList.remove("menu-active");
            }

            if (!item.classList.contains("menu-non-active")) {
                item.classList.add("menu-non-active");
            }
        }
    })
}

drinks.onclick = function(e) {
    var dr_content = document.getElementById("drinks");
    if (dr_content.classList.contains("menu-non-active")) {
        dr_content.classList.remove("menu-non-active");        
    }
    dr_content.classList.add("menu-active");

    if (!drinks.classList.contains("choice-active")) {
        drinks.classList.add("choice-active");
    }

    Array.prototype.forEach.call(choices, (choice, i) => {
        if (choice != drinks) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        }
    })

    Array.prototype.forEach.call(menu_child, (item, i) => {
        if (item != dr_content) {
            if (item.classList.contains("menu-active")) {
                item.classList.remove("menu-active");
            }

            if (!item.classList.contains("menu-non-active")) {
                item.classList.add("menu-non-active");
            }
        }
    })
}

desserts.onclick = function(e) {
    var de_content = document.getElementById("desserts");
    if (de_content.classList.contains("menu-non-active")) {
        de_content.classList.remove("menu-non-active");        
    }
    de_content.classList.add("menu-active");

    if (!desserts.classList.contains("choice-active")) {
        desserts.classList.add("choice-active");
    }

    Array.prototype.forEach.call(choices, (choice, i) => {
        if (choice != desserts) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        }
    })

    Array.prototype.forEach.call(menu_child, (item, i) => {
        if (item != de_content) {
            if (item.classList.contains("menu-active")) {
                item.classList.remove("menu-active");
            }

            if (!item.classList.contains("menu-non-active")) {
                item.classList.add("menu-non-active");
            }
        }
    })
}