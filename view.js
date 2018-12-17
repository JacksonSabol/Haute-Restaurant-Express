$(document).ready(function () {
    $.get("/api/reservations", function (data) {
        var reservations = data[0];
        var waitlist = data[1];

        for (var i = 0; i < reservations.length; i++) {
            console.log(reservations[i]);
            var listGroupItem = $("<li class='list-group-item'>");

            listGroupItem.append($("<h2>").text("Name: " + reservations[i].name));
            listGroupItem.append($("<h3>").text("Email: " + reservations[i].email));
            listGroupItem.append($("<h3>").text("Phone Number: " + reservations[i].phone));
            listGroupItem.append($("<h3>").text("Number in Party: " + reservations[i].party));

            $("#reservation-section").append(listGroupItem);
        }
        if (waitlist) {
            $("#waitlist").text("Waitlist Reservation");
            for (var i = 0; i < waitlist.length; i++) {
                console.log(waitlist[i]);
                var listGroupItem = $("<li class='list-group-item'>");

                listGroupItem.append($("<h2>").text("Name: " + waitlist[i].name));
                listGroupItem.append($("<h3>").text("Email: " + waitlist[i].email));
                listGroupItem.append($("<h3>").text("Phone Number: " + waitlist[i].phone));
                listGroupItem.append($("<h3>").text("Number in Party: " + waitlist[i].party));

                $("#waitlist-section").append(listGroupItem);
            }
        }
    });
});