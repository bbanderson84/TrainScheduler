

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


  // Initial values
  var trainName = "";

  var destination = "";

  var frequency = "";

  var nextArrival = 0;

  var minsAway = 0;

// Capture Button Click on the addTrain submit button
$("addTrain").on("click", function (event) {

    event.preventDefault();

    name = ("#trainName").val().trim();

    destination = ("#trainDestination").val().trim();

    frequency = ("#trainTime").val().trim();

    // code that handles the push to database
    database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment,
        
    });

});