jQuery(function($) {

    'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1099"
    });

    // Sticky Navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.main-nav').addClass('is-sticky');
        } else {
            $('.main-nav').removeClass('is-sticky');
        }
    });

    $(function() {
        $('body').addClass('pre-loaded');
    });


    $(document).ready(function() {

        // magnific-popup
        $(".video-modal").magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // modal
        $(".modal-action").click(function() {
            var modal_action = $(this).attr("data-modal-action");
            $(".modal-wrapper[data-modal-wrapper=" + modal_action + "]").addClass("modal-wrapper-active");
        })

        $(".modal-close").click(function() {
            var modal_close = $(this).attr("data-modal-close");
            $(".modal-wrapper[data-modal-wrapper=" + modal_close + "]").removeClass("modal-wrapper-active");
        })

        // home-feature-carousel
        $('.home-feature-carousel').owlCarousel({
            loop: false,
            margin: 35,
            nav: true,
            navText: [
                "<span class='flaticon-left-arrow'></span>",
                "<span class='flaticon-right-arrow'></span>"
            ],
            dots: false,
            smartSpeed: 2500,

            responsive: {

                0: {
                    items: 1
                },

                768: {
                    items: 2
                },

                1000: {
                    items: 3
                }
            }
        })

        // counter -> homepage 1
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // home-client-carousel
        $('.client-carousel').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: false,
            smartSpeed: 1500,

            responsive: {

                0: {
                    items: 1
                },

                768: {
                    items: 1
                },

                1000: {
                    items: 1
                }
            }
        })

        // carousel -> control
        var clientCarousel = $('.client-carousel');
        clientCarousel.owlCarousel();
        $(".carousel-control-item-left").click(function() {
            clientCarousel.trigger('next.owl.carousel');
        })
        $(".carousel-control-item-right").click(function() {
            clientCarousel.trigger('prev.owl.carousel');
        })

        // carousel -> home client 2
        var carousel1 = $(".client-details-carousel");
        var carousel2 = $(".client-thumbnail-carousel");

        var syncedSecondary = true;

        carousel1.owlCarousel({
            items: 1,
            slideSpeed: 8000,
            nav: true,
            autoplay: false,
            dots: false,
            loop: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: [
                "<span class='flaticon-left-arrow'></span>",
                "<span class='flaticon-right-arrow'></span>"
            ],
        }).on('changed.owl.carousel', syncPosition);

        carousel2
            .on('initialized.owl.carousel', function() {
                carousel2.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                dots: false,
                nav: false,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 4,
                responsive: {

                    0: {
                        items: 1,
                    },

                    768: {
                        items: 2,
                    },

                    992: {
                        items: 3,
                    },

                    1200: {
                        items: 4,
                    }

                    // 1600: {
                    //     items: 5,
                    // },
                }
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }

            //end block
            carousel2
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = carousel2.find('.owl-item.active').length - 1;
            var start = carousel2.find('.owl-item.active').first().index();
            var end = carousel2.find('.owl-item.active').last().index();

            if (current > end) {
                carousel2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                carousel2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                carousel1.data('owl.carousel').to(number, 100, true);
            }
        }

        carousel2.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            carousel1.data('owl.carousel').to(number, 300, true);
        });

        // home-logo-carousel
        $('.home-logo-carousel').owlCarousel({
            loop: true,
            margin: 50,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2520,
            smartSpeed: 1500,

            responsive: {

                0: {
                    items: 2
                },

                768: {
                    items: 3
                },

                1000: {
                    items: 5
                }
            }
        })

        // home-business-carousel-2
        $('.business-carousel').owlCarousel({
            loop: false,
            margin: 25,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            navText: [
                "<span class='flaticon-left-arrow'></span>",
                "<span class='flaticon-right-arrow'></span>"
            ],

            responsive: {

                0: {
                    items: 1
                },

                768: {
                    items: 1
                },

                1000: {
                    items: 1
                }
            }
        })

        // faq-accordion
        $(".faq-accordion-header").click(function() {

            $(this).parent(".faq-accordion-item").toggleClass("faq-accordion-item-active").siblings().removeClass("faq-accordion-item-active")
        })

        // authentication-tab
        $(".authentication-tab-item").click(function() {
            var tab_modal = $(this).attr("data-authentcation-tab");
            $(this).addClass("authentication-tab-active").siblings().removeClass("authentication-tab-active");
            $(".authentication-tab-details-item[data-authentcation-details=" + tab_modal + "]").addClass("authentication-tab-details-active").siblings().removeClass("authentication-tab-details-active");
        })

        // Subscribe form
        $(".newsletter-form").validator().on("submit", function(event) {
            if (event.isDefaultPrevented()) {
                // handle the invalid form...
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly.");
            } else {
                // everything looks good!
                event.preventDefault();
            }
        });

        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }

        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function() {
                $("#validator-newsletter").addClass('hide');
            }, 4000)
        }

        function formErrorSub() {
            $(".newsletter-form").addClass("animate__animated animate__shakeX");
            setTimeout(function() {
                $(".newsletter-form").removeClass("animate__animated animate__shakeX");
            }, 1000)
        }

        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }

        // AJAX MailChimp
        // $(".newsletter-form").ajaxChimp({
        //     url: "https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        //     callback: callbackFunction
        // });

    });

    // $(window).on('load', function(){

    // 	// preloader
    // 	$('.preloader').fadeOut();
    // });

})

const CCardBtn = document.querySelector('#changeCardBtn');
const generate = document.querySelector('#generate');
let cardTypes = ['#VISA', '#MASTERCARD', '#AMERICAN', '#JCB', '#DISCOVER'];
if (CCardBtn != null) {
    CCardBtn.addEventListener('click', (e) => {
        d = e.target.innerHTML;
        fetch(`forms/changeCard.php?card=${d}`, {
                method: "GET"
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                data = JSON.parse(data);
                if (data.status == 'success') {
                    swal('Done!', data.message, 'success').then(() => {
                        document.querySelector('#card_number').innerHTML = "<b>" + data.new_number + "</b>";
                        document.querySelector("#exp").innerHTML = data.exp_month + "/" + data.exp_year;
                        document.querySelector("#logo").src = data.path_logo;
                        var svc = document.querySelector('#svc');
                        if (svc.innerHTML != "***")
                            svc.innerHTML = data.svc;

                        localStorage.setItem("cvv", data.svc);

                        cardTypes.forEach(e => {
                            document.querySelector(e).style.background = "white";
                            document.querySelector(e).style.color = "black";
                        });

                        current_card = "#" + d.split(" ")[0];
                        localStorage.setItem("currentCard", current_card);
                        document.querySelector(current_card).style.background = "linear-gradient(90deg, #f20f10 0%, #ec600d 100%)";
                        document.querySelector(current_card).style.color = "white";
                    })

                } else {
                    swal('Error!', data.message, 'error')
                }
            })
            .catch(function(error) {
                console.error(error);
            });


    });



    generate.addEventListener('click', () => {
        d = localStorage.getItem("currentCard").split("#")[1];
        if (d == "AMERICAN")
            d = "AMERICAN EXPRESS";
        fetch(`forms/changeCard.php?card=${d}`, {
                method: "GET"
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                data = JSON.parse(data);
                console.log(data);
                if (data.status == 'success') {
                    swal('Done!', data.message, 'success').then(() => {
                        document.querySelector('#card_number').innerHTML = "<b>" + data.new_number + "</b>";
                        document.querySelector("#exp").innerHTML = data.exp_month + "/" + data.exp_year;
                        document.querySelector("#logo").src = data.path_logo;
                        var svc = document.querySelector('#svc');
                        if (svc.innerHTML != "***")
                            svc.innerHTML = data.svc;

                        localStorage.setItem("cvv", data.svc);
                        cardTypes.forEach(e => {
                            document.querySelector(e).style.background = "white";
                            document.querySelector(e).style.color = "black";
                        });


                        current_card = "#" + d.split(" ")[0];
                        localStorage.setItem("currentCard", current_card);
                        document.querySelector(current_card).style.background = "linear-gradient(90deg, #f20f10 0%, #ec600d 100%)";
                        document.querySelector(current_card).style.color = "white";
                    })

                } else {
                    swal('Error!', data.message, 'error')
                }
            })
            .catch(function(error) {
                console.error(error);
            });


    });

}


const copyLinkBtn = document.querySelector('#copyLinkBtn');
if (copyLinkBtn != null) {
    copyLinkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Get the text element
        var textElement = document.getElementById("linkTextBox");

        // Select the text in the element
        textElement.select();

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Alert the user that the text has been copied
        swal('Text copied to clipboard!', '', 'success')
    })

}



const freezCard = document.querySelector('#freezCard');
if (freezCard != null) {
    freezCard.addEventListener('click', (e) => {
        fetch("forms/freez.php?t=fr", {
                method: "GET"
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                data = JSON.parse(data);
                if (data.status == 'success') {
                    swal('Done!', 'Card freezed successfully', 'success').then(() => {
                        location.reload();
                    })

                } else {
                    swal('Error!', data.message, 'error')
                }
            })
            .catch(function(error) {
                console.error(error);
            });
    });

}

const defreezCard = document.querySelector('#defreezCard');
if (defreezCard != null) {
    defreezCard.addEventListener('click', (e) => {
        fetch("forms/freez.php?t=de", {
                method: "GET"
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                data = JSON.parse(data);
                if (data.status == 'success') {
                    swal('Done!', 'Card defreezed successfully', 'success').then(() => {
                        location.reload();
                    })

                } else {
                    swal('Error!', data.message, 'error')
                }
            })
            .catch(function(error) {
                console.error(error);
            });
    });

}

const blockCard = document.querySelector('#blockCard');
if (blockCard != null) {
    blockCard.addEventListener('click', (e) => {
        fetch("forms/block.php?t=bl", {
                method: "GET"
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                data = JSON.parse(data);
                if (data.status == 'success') {
                    swal('Done!', 'Card blocked successfully', 'success').then(() => {
                        location.reload();
                    })

                } else {
                    swal('Error!', data.message, 'error')
                }
            })
            .catch(function(error) {
                console.error(error);
            });
    });

}

const unBlockCard = document.querySelector('#unBlockCard');
if (unBlockCard != null) {
    unBlockCard.addEventListener('click', (e) => {
        fetch("forms/block.php?t=un", {
                method: "GET"
            })
            .then(function(response) {
                return response.text();
            })
            .then(function(data) {
                data = JSON.parse(data);
                if (data.status == 'success') {
                    swal('Done!', 'Card unblocked successfully', 'success').then(() => {
                        location.reload();
                    })

                } else {
                    swal('Error!', data.message, 'error')
                }
            })
            .catch(function(error) {
                console.error(error);
            });
    });
}








const Rsvc = document.querySelector('#Rsvc');
if (Rsvc != null) {
    Rsvc.addEventListener('click', () => {
        var svc = document.querySelector('#svc');
        var svcClass = document.getElementsByClassName('svcClass');

        if (svc.innerHTML != "***") {
            svc.innerHTML = "***";
            for (let i = 0; i < 2; i++) {
                svcClass[i].classList.remove('fa-eye');
                svcClass[i].classList.add('fa-eye-slash');
            }
        } else {
            let x = localStorage.getItem("cvv");
            svc.innerHTML = x;
            for (let i = 0; i < 2; i++) {
                svcClass[i].classList.remove('fa-eye-slash');
                svcClass[i].classList.add('fa-eye');
            }

        }
    });
}