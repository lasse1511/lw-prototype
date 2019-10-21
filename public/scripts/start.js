$(document).ready(function () {
    $('.datepicker').datepicker();


    if (localStorage.getItem('loggedIn') == 'true') {
        $('#logoutBtn').addClass('btnShown')
        $('#logoutBtn').removeClass('btnHidden')
        $('#loginBtn').removeClass('btnShown')
        $('#loginBtn').addClass('btnHidden')
    }
    else if (localStorage.getItem('loggedIn') == 'false') {
        $('#logoutBtn').removeClass('btnShown')
        $('#logoutBtn').addClass('btnHidden')
        $('#loginBtn').addClass('btnShown')
        $('#loginBtn').removeClass('btnHidden')
    }
    else if (localStorage.getItem('loggedIn') == undefined) {
        localStorage.setItem('loggedin', 'true')
    }


    $('#addbtnbtn').click(function () {
        $('#labeldiv').append('<label> new label </label>')
    })

    if ($('#loginbackground')[0]) {
        if (localStorage.getItem('who') == 'user') {
            $('#loginbackground')[0].src = 'userbtn.png'
        }
        else {
            $('#loginbackground')[0].src = 'truck.png'
        }
    }

    $('#userBtn').click(function () {
        if (localStorage.getItem('loggedIn') == 'true') {
            window.location = '/createorder'
        }
        else {
            localStorage.setItem('who', 'user')
            window.location = '/login'
        }
    })

    $('#truckBtn').click(function () {
        if (localStorage.getItem('loggedIn') == 'true') {
            window.location = '/search'
        }
        else {
            localStorage.setItem('who', 'truck')
            window.location = '/login'
        }
    })

    $('#homeBtn').click(function () {
        window.location = '/'
    })

    $('#contactBtn').click(function () {
        window.location = '/contact'
    })
    $('#logoutBtn').click(function () {
        localStorage.setItem('loggedIn', 'false')
        window.location = '/login'
    })

    $('#loginBtn').click(function () {
        window.location = '/login'
    })
    $('#aboutBtn').click(function () {
        window.location = '/about'
    })

    $('#loginForm').click(function () {
        localStorage.setItem('loggedIn', 'true')
        if (localStorage.getItem('who') == 'user') {
            window.location = '/createorder'
            localStorage.removeItem('who')
        }
        else if (localStorage.getItem('who') == 'truck') {
            window.location = '/search'
            localStorage.removeItem('who')

        }
        else {
            window.location = '/'
        }

    })


    if ($('#Pickup_Company')[0]) {
        $('#Pickup_Company').focus();
    }
    $('#row1').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row1').removeClass('ghostRow')
        $('#row1').addClass('activeRow')
    })
    $('#row1').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row1').removeClass('ghostRow')
        $('#row1').addClass('activeRow')
    })
    $('#row2').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row2').removeClass('ghostRow')
        $('#row2').addClass('activeRow')
    })
    $('#row2').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row2').removeClass('ghostRow')
        $('#row2').addClass('activeRow')
    })
    $('#row3').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row3').removeClass('ghostRow')
        $('#row3').addClass('activeRow')
    })
    $('#row3').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row3').removeClass('ghostRow')
        $('#row3').addClass('activeRow')
    })
    $('#row4').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row4').removeClass('ghostRow')
        $('#row4').addClass('activeRow')
    })
    $('#row4').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row4').removeClass('ghostRow')
        $('#row4').addClass('activeRow')
    })
    $('#row5').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row5').removeClass('ghostRow')
        $('#row5').addClass('activeRow')
    })
    $('#row5').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row5').removeClass('ghostRow')
        $('#row5').addClass('activeRow')
    })
    $('#row6').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row6').removeClass('ghostRow')
        $('#row6').addClass('activeRow')
    })
    $('#row6').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row6').removeClass('ghostRow')
        $('#row6').addClass('activeRow')
    })
    $('#row7').click(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row7').removeClass('ghostRow')
        $('#row7').addClass('activeRow')
    })
    $('#row7').children().children().focus(function () {
        $("[class*='activeRow']").removeClass('activeRow');
        $('#row7').removeClass('ghostRow')
        $('#row7').addClass('activeRow')
    })

})