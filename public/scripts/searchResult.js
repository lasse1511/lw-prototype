$(document).ready(function () {
    $('#searchbtn').click(function () {
        $.get("/getJobs", null, function (foundJobs) {
            $('#resulttable').empty();
            var tableHeader = "<thead><tr><th scope='col-md-2'>Opsamling</th><th scope='col-md-2'>Destination</th><th scope='col-md-2'>Gods</th><th scope='col-md-2'>Specielle Krav</th><th></th></tr></thead>"
            $('#resulttable').append(tableHeader);
            foundJobs.forEach(job => {
                var tr = "<tbody id=" + job.id + "><tr>"
                tr = tr + "<td colspan='5'><h5>" + job.owner + " Ordre: " + job.id + "</h5></td></tr><tr class='tableBody'>"
                tr = tr + "<td scope='row'><div class='pickup'>" + job.pickUpLocation + "</div><div>" + job.pickUpDate + "</div></td>"
                tr = tr + "<td scope='row'><div class='destination'>" + job.destination + "</div><div>" + job.ETADate + "</div></td>"
                tr = tr + "<td scope='row'><div class='sizeAndQuantity'>" + job.quantity + "</div></td>"
                tr = tr + "<td scope='row'><div class='special'></div></td>"
                tr = tr + "<td scope='row'><button class='customBtn btn btn-primary' type='button' data-toggle='modal' data-target='#bidModal' data-jobowner=" + job.owner + " data-jobid=" + job.id + ">Afgiv Bud</button></td>"
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