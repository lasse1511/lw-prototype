var url = "/";
$(document).ready(function () {
    $('#searchbtn').click(function () {
        $('#resultul').empty();
        $.get(url, null, function (foundJobs) {
            $('#resultul').empty();
            // foundJobs.forEach(element => {
            //     $('#resultul ul li:last').append(
            //         "<li>hej</li> "
            //     )
            // });
        });

    })
})




