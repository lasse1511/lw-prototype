$(document).ready(function () {
    $('#addbtnbtn').click(function () {
        $('#labeldiv').append('<label> new label </label>')
    })


    $('#userBtn').click(function () {
        window.location = '/createOrder'
    })
})