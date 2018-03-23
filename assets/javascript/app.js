$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;
    var clockRunning = false;
    var time = 10;

    $(".visibility").hide();

    $("#start").on("click", function () {
        run();
    })
    
    function run() {
        intervalId = setInterval(decrement, 1000);
       $("#button").hide();
    }
    

    function decrement() {
        time--;
        $("#time").html("<h2>Time Remaining: " + time + " Seconds!</h2>");
        $(".visibility").show();
        if (time === 0) {
            stop();
            check()
            display();
       }
    }
   
    function stop() {
        clearInterval(intervalId);
        
    };

    $("#submit").on("click", function () {
        stop();
        check()
        display();
    });

    function check() {
        if ($("#choice3").is(":checked")) {
            correct++;
        } else if ($("#choice1, #choice2, #choice4").is(":checked")) {
            incorrect++;
            // alert("notugri");
        } else {
            unanswered++;
        };
        //////////////////////////////////
        if ($("#choice6").is(":checked")) {
            // alert("Tugri");
            correct++;
        } else if ($("#choice5, #choice7, #choice8").is(":checked")) {

            incorrect++;
        } else {
            unanswered++;
        };
        //////////////////////////////////////
        if ($("#choice9").is(":checked")) {
            correct++;
        } else if ($("#choice10, #choice11, #choice12").is(":checked")) {
            incorrect++;
        } else {
            unanswered++;
        };

        if ($("#choice16").is(":checked")) {
            correct++;
        } else if ($("#choice13, #choice14, #choice15").is(":checked")) {
            incorrect++;
        } else {
            unanswered++;
        };

        if ($("#choice19").is(":checked")) {
            correct++;
        } else if ($("#choice17, #choice18, #choice20").is(":checked")) {
            incorrect++;
        } else {
            unanswered++;
        };

        if ($("#choice21").is(":checked")) {
            correct++;
        } else if ($("#choice22, #choice23, #choice24").is(":checked")) {
            incorrect++;
        } else {
            unanswered++;
        };

        if ($("#choice26").is(":checked")) {
            correct++;
        } else if ($("#choice27, #choice25, #choice28").is(":checked")) {
            incorrect++;
        } else {
            unanswered++;
        };
    };

    function display() {
        var html =
            "<h2 class='done'>All Done!</h2>" +
            "<h2 class='all'>Correct Answers: " + correct + "</h2>" +
            "<h2 class='all'>Incorrect Answers: " + incorrect + "</h2>" +
            "<h2 class='all'>Unanswered: " + unanswered + "</h2>" + 
            "<button id='restart'>Restart </button>";
        $("#game").html(html);
    };
    $("#restart").on("click", function() {
        start();
    })
});
