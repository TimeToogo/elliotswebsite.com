$(document).ready(function () {
    $('header a[href]').each(function () {
        $(this).toggleClass('active', $(this).get(0).href === window.location.href);
    });

    $('.years-from[data-date]').each(function () {
        var now = new Date();

        //Format: yyyy-mm-dd
        var dateParts = $(this).attr('data-date').split('-');
        var birthDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

        var age = now.getFullYear() - birthDate.getFullYear();

        var monthDiff = now.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
            age--;
        }

        $(this).text(age);
    });
});