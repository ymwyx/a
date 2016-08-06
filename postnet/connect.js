
$(document).ready(function () {
    $("#ok").click(function () {
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/getZip",
            async: true,
            data: "code=" + $('#input_code').val(),
            success: function (data) {
                $("#a").html(data);
            }
        })
    });
});
