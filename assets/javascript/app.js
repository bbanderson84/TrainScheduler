

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

    console.log(name);

    destination = ("#trainDestination").val().trim();

    console.log(destination);

    nextArrival = ("#trainTime").val().trim();

    console.log(nextArrival);

    frequency = ("#trainFrequency").val().trim();

    console.log(minsAway);


    // code that handles the push to database
    database.ref().push({

        name: name,

        destination: destination,

        time: time,

        frequency: frequency,
        
    });

});

// initial loader code 

database.ref().on("child_added", function (){

    console.log(childSnapshot.val().name);

    console.log(childSnapshot.val().destination);

    console.log(childSnapshot.val().time);

    console.log(childSnapshot/val().frequency);

    // $("#")
});