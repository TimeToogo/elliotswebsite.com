/*!
 Title: Dev Portfolio Template
 Version: 1.2.1
 Last Change: 08/27/2017
 Author: Ryan Fitzgerald
 Repo: https://github.com/RyanFitzgerald/devportfolio-template
 Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

 Description: This file contains all the scripts associated with the single-page
 portfolio website.
 */

(function ($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header a, a.smooth-scroll').click(function (e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').click(function () {
        var scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function () {

        $this = $(this); // Store reference to this
        $userContent = $this.children('div'); // user content

        // Create each timeline block
        $userContent.each(function () {
            $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $this.find('.vtimeline-point').each(function () {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $this.find('.vtimeline-content').each(function () {
            var date = $(this).data('date');
            if (date) { // Prepend if exists
                $(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
            }
        });

    });

    // Open mobile menu
    $('#mobile-menu-open').click(function () {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function () {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function (e) {
        e.preventDefault();
        $(this).fadeOut(300, function () {
            $('#more-projects').fadeIn(300);
        });
    });

    $('.download-button').on('click', function () {
        $.when(
            $.getScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js'),
            $.getScript('https://unpkg.com/jspdf@latest/dist/jspdf.min.js'),
            $.Deferred(function (deferred) {
                $(deferred.resolve);
            })
        ).done(function () {

            html2canvas(document.body, {
                onrendered: function (canvas) {
                    var doc = new jsPDF('p', 'mm', 'a4');
                    var imgData = canvas.toDataURL('image/jpeg');

                    var imgWidth = doc.internal.pageSize.width;
                    var pageHeight = doc.internal.pageSize.height;

                    var imgHeight = canvas.height * imgWidth / canvas.width;
                    var heightLeft = imgHeight;
                    var position = 0;

                    doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;

                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        doc.addPage();
                        doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }

                    doc.save('elliot-levin-resume.pdf');
                }
            });
        });
    });

})(jQuery);