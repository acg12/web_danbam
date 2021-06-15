var cards = $("#promotions").children();
var ncards = $("#promotions").children().length;
var tabs = $("#tabs-cont").children();
var ntabs = tabs.length;
var curr = 0;

$(document).ready(function() {
    swapImages();
    setInterval(swapImages, 3000);

    function swapImages() {
        for (let i = 0; i < cards.length; i++) { 
            var card = cards.eq(i)
            // if dia adalah card yg muncul sblm yg active
            // ATAU yg active adalah 0, maka sblm nya adalah nomer ncards - 1
            // maka taruh di kiri
            if (i == curr - 1 || (i == ncards-1 && curr == 0)) {
                $(card).addClass('left');
                $(card).css({
                    left : $("#promotions").width()/2 - $(card).width() + 'px',
                    zIndex : '0'
                });

                if ($(card).hasClass('right')) {
                    $(card).removeClass('right');
                }
                if ($(card).hasClass('active')) {
                    $(card).removeClass('active');
                }
            }
            // dia yg active sekarang
            else if (i == curr) {
                $(card).addClass('active');
                $(card).css({
                    left : $("#promotions").width()/2 - $(card).width()/2 + 'px',
                    zIndex : '10'
                });

                if ($(card).hasClass('left')) {
                    $(card).removeClass('left');
                }
                if ($(card).hasClass('right')) {
                    $(card).removeClass('right');
                }
            } 
            // else dia ke kanan semua
            else {
                $(card).addClass('right');

                if ($(card).hasClass('active')) {
                    $(card).removeClass('active');
                }
                if ($(card).hasClass('left')) {
                    $(card).removeClass('left');
                }

                $(card).css({
                    left : $("#promotions").width()/2 + $(card).width()/4 + 'px',
                    zIndex : ncards-i
                });
            }
        };

        for(let i = 0; i < tabs.length; i++) {
            var tab = tabs.eq(i)

            if (i == curr) {
                $(tab).addClass('active-tab');
            } else {
                if ($(tab).hasClass('active-tab')) {
                    $(tab).removeClass('active-tab');
                }
            }
        };

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

lightbites.onclick = function(e) {
    // ambil content menu lightbites
    var lb_content = document.getElementById("light-bites");

    // buat choice disamping
    for(let i = 0; i < choices.length; i++) {
        var choice = choices.item(i)
        // kalo bukan choice lightbites jadiin semua non active
        if (choice != lightbites) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        } else {
            choice.classList.add("choice-active")
        }
    }

    for(let i = 0; i < menu_child.length; i++) {
        var item = menu_child.item(i)

        // kalo bukan lightbites content
        if (item != lb_content) {
            $(item).fadeOut();
        }
    }
    
    $(lb_content).fadeIn(800);
}

maincourse.onclick = function(e) {
    var mc_content = document.getElementById("main-course");

    for(let i = 0; i < choices.length; i++) {
        var choice = choices.item(i)

        if (choice != maincourse) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        } else {
            choice.classList.add("choice-active")
        }
    }

    for(let i = 0; i < menu_child.length; i++) {
        var item = menu_child.item(i)

        if (item != mc_content) {
            $(item).fadeOut();
        }
    }

    $(mc_content).fadeIn(800);
}

drinks.onclick = function(e) {
    var dr_content = document.getElementById("drinks");
    
    for(let i = 0; i < choices.length; i++) {
        var choice = choices.item(i)

        if (choice != drinks) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        } else {
            choice.classList.add("choice-active")
        }
    }

    for(let i = 0; i < menu_child.length; i++) {
        var item = menu_child.item(i)

        if (item != dr_content) {
            $(item).fadeOut();
        }
    }

    $(dr_content).fadeIn(800);
}

desserts.onclick = function(e) {
    var de_content = document.getElementById("desserts");
    
    for(let i = 0; i < choices.length; i++) {
        var choice = choices.item(i)

        if (choice != desserts) {
            if (choice.classList.contains("choice-active")) {
                choice.classList.remove("choice-active");
            }
        } else {
            choice.classList.add("choice-active")
        }
    }

    for(let i = 0; i < menu_child.length; i++) {
        var item = menu_child.item(i)

        if (item != de_content) {
            $(item).hide();
        }
    }

    $(de_content).fadeIn(800);
}