$(document).ready(function () {
    $('#addbtnbtn').click(function () {
        $('#labeldiv').append('<label> new label </label>')
    })


    $('#userBtn').click(function () {
        window.location = '/createorder'
    })

    $('#truckBtn').click(function() {
        window.location = '/search'
    })

    $('#homeBtn').click(function() {
        window.location = '/'
    })

    $('#contactBtn').click(function() {
        window.location = '/contact'
    })
    $('#logoutBtn').click(function() {
        window.location = '/login'
    })
    $('#aboutBtn').click(function() {
        window.location = '/about'
    })
})