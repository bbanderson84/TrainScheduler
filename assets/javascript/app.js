$(document).ready(function () { 


// firebase config
var config = {
    apiKey: "AIzaSyDixVMvAe6e65HFvkreJBoK5CArp3G0K1s",
    authDomain: "train-scheduler-a5532.firebaseapp.com",
    databaseURL: "https://train-scheduler-a5532.firebaseio.com",
    projectId: "train-scheduler-a5532",
    storageBucket: "",
    messagingSenderId: "533795584715"
  };

  firebase.initializeApp(config);

// variable referencing the database
var database = firebase.database();



// Capture Button Click on the addTrain submit button
$("#addTrain").on("click", function (event) {

    event.preventDefault();

    var trainName = $("#trainName").val().trim();

    console.log(trainName);

    var destination = $("#trainDestination").val().trim();

    console.log(destination);

    var firstTime = $("#trainTime").val().trim();

    console.log(firstTime);

    var frequency = $("#trainFrequency").val().trim();

    console.log(frequency);


    // // code that handles the push to database
    database.ref().push({

        name: trainName,

        destination: destination,

        time: firstTime,

        frequency: frequency,

    });

    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#trainTime").val("");
    $("#trainFrequency").val("");

    return false;


});

// initial loader code 

database.ref().on("child_added", function(childSnapshot) {

    console.log(childSnapshot.val().name);

    console.log(childSnapshot.val().destination);

    console.log(childSnapshot.val().time);

    console.log(childSnapshot.val().frequency);

    

   var  trainName = childSnapshot.val().name;
   var destination = childSnapshot.val().destination;
   var firstTime = childSnapshot.val().firstTime;
   var frequency = childSnapshot.val().frequency;

//     //calculation variables 

    var tFrequency = frequency;
    var tTime = firstTime;

//     // calculate first train time
    var tTimeConverted = moment(tTime, "hh:mm").subtract(1, "years");
    console.log(tTimeConverted);

//     // calculate the curent time
    var currentTime = moment();
    console.log("Current time: " + moment(currentTime).format("hh:mm"));

//     // calculate the difference between the first train time and current time
    var diffTime = moment().diff(moment(tTimeConverted), "minutes");
    console.log("Difference in time: " + diffTime);
    
//     // calcluate the time apart, the remainder

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

//     // calculate the minutes until the next rain
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("Minutes until train: " + tMinutesTillTrain);

//     // calculate the next trains arrival time
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");

    var arrival = moment(nextTrain).format("hh:mm a");
    console.log("Arrival time: " + moment(nextTrain).format("HH:mm"));


    $("#trainInfo > tbody").append("<tr><td>" + trainName + "<tr><td>" + destination + "<tr><td>" + frequency + "<tr><td>" + arrival + "<tr><td>" + tMinutesTillTrain + "<tr><td>");

  
});

});