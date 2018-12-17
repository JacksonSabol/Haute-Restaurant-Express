$("#add-btn").on("click", function (event) {
    event.preventDefault();

    var newReservation = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        party: $("#party-size").val().trim()
    };
    $("#name").empty();
    $("#email").empty();
    $("#phone").empty();
    $("#party-size").empty();
    // Question: What does this code do??
    $.post("/api/reservations", newReservation)
        .then(function (data) {
            console.log(data);
            // alert("Adding reservations...");
        });

});
