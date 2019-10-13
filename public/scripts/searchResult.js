var url = "/getJobs";
$(document).ready(function () {
    $('#searchbtn').click(function () {
        $.get(url, null, function (foundJobs) {
            $('#resulttable').empty();
            var tableHeader = "<thead><tr><th scope='col-md-2'>Opsamling</th><th scope='col-md-2'>Destination</th><th scope='col-md-2'>Gods</th><th scope='col-md-2'>Specielle Krav</th><th></th></tr></thead>"
            $('#resulttable').append(tableHeader);
            foundJobs.forEach(job => {
                var tr="<tbody><tr>"
                tr = tr+"<td scope='row'><div class='pickup'>"+job.pickUpLocation+"</div><div>"+job.pickUpDate+"</div></td>"
                tr = tr+"<td scope='row'><div class='destination'>"+job.destination+"</div><div>"+job.ETADate+"</div></td>"
                tr = tr+"<td scope='row'><div class='sizeAndQuantity'>"+job.quantity+"</div></td>"
                tr = tr+"<td scope='row'><div class='special'></div></td>"
                tr = tr+"<td scope='row'><button class='custombtn'>Afgiv Bud</button></td>"
                tr = tr+"</tr></tbody>"  
                $('#resulttable').append(tr);
            });
        });

    })
})




