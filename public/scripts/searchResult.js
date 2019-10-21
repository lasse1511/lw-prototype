$(document).ready(function () {
    $('#searchbtn').click(function () {
        $.get("/getJobs", null, function (foundJobs) {
            $('#resulttable').empty();
            var tableHeader = "<thead><tr><th scope='col-md-2'>Opsamling</th><th scope='col-md-2'>Destination</th><th scope='col-md-2'>Gods</th><th scope='col-md-2'>Specielle Krav</th></tr></thead>"
            $('#resulttable').append(tableHeader);
            foundJobs.forEach(job => {
                var tr = "<tbody data-toggle='modal' data-target='#bidModal' id=" + job.id + "><tr>"
                tr = tr + "<td colspan='4'><h5>" + job.owner + " Ordre: " + job.id + "</h5></td></tr><tr class='tableBody'>"
                tr = tr + "<td scope='row'><div class='pickup'>" + job.pickUpLocation + "</div><div>" + job.pickUpDate + "</div></td>"
                tr = tr + "<td scope='row'><div class='destination'>" + job.destination + "</div><div>" + job.ETADate + "</div></td>"
                tr = tr + "<td scope='row'><div class='sizeAndQuantity'>" + job.quantity + "</div></td>"
                tr = tr + "<td scope='row'><div class='special'></div>"
                // tr = tr + "<td scope='row'>"
                tr = tr + "</td>"
                tr = tr + "</tr></tbody>"
                $('#resulttable').append(tr);
            });
        });
    })

    $('#bidModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var jobid = button.data('jobid') // Extract info from data-* attributes
        var owner = button.data('owner')
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('#bidModalLabel').text('New message to ' + jobid)
        modal.find('.modal-body input').val(jobid)
    })

    $('#acceptBidBtn').click(function () {
        $.post("/postBid", { id: 1, bid: 2000 }, function (result) {

        });
    });
})

// $(document).on('DOMNodeInserted', function (e) {

//     //Adds click handlers on the tbody class
//     var tbodys = document.getElementsByClassName('tbody')
//     for (let i = 0; i < tbodys.length; i++) {
//         tbodys[i].removeEventListener('click', function (e) {})
//         tbodys[i].addEventListener('click', function () {
//             handleClick(e)
//         });
//     };

//     function handleClick(e) {
//         $('#tbtn'+e.target.id).click()
//         console.log(e.target.id)
//     }

// });