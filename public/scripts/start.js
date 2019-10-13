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
})