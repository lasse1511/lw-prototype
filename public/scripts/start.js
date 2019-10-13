$(document).ready(function () {

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


    $('#userBtn').click(function () {
        if (localStorage.getItem('loggedIn') == 'true') {
            window.location = '/createorder'
        }
        else {
            window.location = '/login'
        }
    })

    $('#truckBtn').click(function () {
        if (localStorage.getItem('loggedIn') == 'true') {

            window.location = '/search'
        }
        else {
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
        window.location = '/'
    })



})