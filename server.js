// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// When an application is deployed, there's often a PORT defined by the environment of the server you're using
// So this gives the option of being deployed by employing process.env with a dotenv file that hides the PORT number, or using localhost at PORT 3000
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
    {
        id: "ryan",
        name: "Ryan",
        email: "ryan@gmail.com",
        phone: "(703)-867-5309",
        party: 1
    },
    {
        id: "isabel",
        name: "Isabel",
        email: "isabel@gmail.com",
        phone: "(943)-867-5309",
        party: 15
    },
    {
        id: "paul",
        name: "Paul",
        email: "paul@gmail.com",
        phone: "(442)-867-5309",
        party: 12
    },
    {
        id: "jackson",
        name: "Jackson",
        email: "jackson@gmail.com",
        phone: "(565)-867-5309",
        party: 0
    }
];
// Add empty array to receive waitlisted reservation objects when the max reservations (10) has been reached
var waitlist = [
    {
        id: "charles",
        name: "Charles",
        email: "charles@gmail.com",
        phone: "(434)-867-5309",
        party: 0
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/viewjs", function (req, res) {
    res.sendFile(path.join(__dirname, "view.js"));
});

app.get("/makejs", function (req, res) {
    res.sendFile(path.join(__dirname, "make.js"));
});

// Displays all reservations
app.get("/api/reservations", function (req, res) {
    return res.json([reservations, waitlist]);
    // return {
    //     reservation: reservations,
    //     waitlist: waitlist
    // };
});

// Displays a single reservation, or returns false
app.get("/api/reservations/:reservation", function (req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for (var i = 0; i < reservation.length; i++) {
        if (chosen === reservation[i].id) {
            return res.json(reservation[i]);
        }
    }
    // Could change to a more """catered""" message
    return res.json(false);
});

// Create New Reservation - takes in JSON input
app.post("/api/reservations", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    newReservation.id = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    // HERE if reservations.lenght >= 10 then go to waitlist
    if (reservations.length >= 10) {
        waitlist.push(newReservation);
        // push reservation to waitlist
    }
    else {
        reservations.push(newReservation);
        // push reservation to active tables
    }


    // res.json(newcharacter); /// send to HTML
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
