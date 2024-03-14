
        var header = docuallt.getElementById("myDIV");
        var btns = header.getElementsByClassName("nav-link");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }
                this.className += " active";
            });
        }

        $(document).ready(function () {
            $("#banner").owlCarousel(
                {
                    // animateOut: 'slideOutDown',
                    // animateIn: 'flipInX',
                    items: 1,
                    loop: true,
                    margin: 0,
                    stagePadding: 0,
                    smartSpeed: 450,
                    autoplay: true,
                    autoPlaySpeed: 1000,
                    autoPlayTimeout: 1000,
                    autoplayHoverPause: true,
                    onInitialized: counter,
                    dots: true,
                    nav: false,
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    animateOut: 'fadeOut'
                }
            );
            $("#owl-example").owlCarousel(
                {
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    items: 4,
                    loop: true,
                    margin: 0,
                    stagePadding: 0,
                    smartSpeed: 450,
                    autoplay: true,
                    autoPlaySpeed: 1000,
                    autoPlayTimeout: 1000,
                    autoplayHoverPause: true,
                    onInitialized: counter,
                    dots: true,
                    nav: false,
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    // animateOut: 'fadeOut'
                }
            );


            $("#owl-example1 ").owlCarousel(
                {
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    items: 4,
                    loop: true,
                    margin: 0,
                    stagePadding: 0,
                    smartSpeed: 450,
                    autoplay: true,
                    autoPlaySpeed: 1000,
                    autoPlayTimeout: 1000,
                    autoplayHoverPause: true,
                    onInitialized: counter,
                    dots: true,
                    nav: false,
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    // animateOut: 'fadeOut'
                }
            );

            $("#owl-example2 ").owlCarousel(
                {
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    items: 4,
                    loop: true,
                    margin: 0,
                    stagePadding: 0,
                    smartSpeed: 450,
                    autoplay: true,
                    autoPlaySpeed: 1000,
                    autoPlayTimeout: 1000,
                    autoplayHoverPause: true,
                    onInitialized: counter,
                    dots: true,
                    nav: false,
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    // animateOut: 'fadeOut'
                }
            );
            $("#owl-example3 ").owlCarousel(
                {
                    animateOut: 'slideOutDown',
                    animateIn: 'flipInX',
                    items: 4,
                    loop: true,
                    margin: 0,
                    stagePadding: 0,
                    smartSpeed: 450,
                    autoplay: true,
                    autoPlaySpeed: 1000,
                    autoPlayTimeout: 1000,
                    autoplayHoverPause: true,
                    onInitialized: counter,
                    dots: true,
                    nav: false,
                    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                    // animateOut: 'fadeOut'
                }
            );


        });
        function counter() {
            var buttons = $('.owl-dots button');
            buttons.each(function (index, item) {
                // $(item).find('span').text(index + 1);
            });
        }
  