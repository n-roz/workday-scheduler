    // var today = moment().format("dddd MMMM Do YYYY");
    // document.getElementById("currentDay").append(today);
    // var currentTime = moment().hour();
    // console.log(currentTime);

    // var setHour = function(hourBlock) {
    //     var hourId = Number.parseInt(hourBlock.id)
    //     console.log(hourId);
    //     var textArea = hourBlock.querySelector('description')
    //     if (hourId < currentTime) {
    //         textArea.className = 'past';
    //     } else if (hourId === currentTime) {
    //         textArea.classList.remove('past');
    //         textArea.classList.add('present');
    //     } else {
    //         textArea.classList.remove('past');
    //         textArea.classList.remove('present');
    //         textArea.classList.add('future');
    //     }
    // }

    // // keep at bottom
    // document.querySelectorAll(".hour").forEach(setHour)

    // IGNORE ALL THE CODE ABOVE. THIS WAS PART OF MY DEVELOPMENT PROCESS AND I'M KEEPING 
    // THE CODE HERE FOR MY OWN BENEFIT

    // PSEUDO CODE //
    // add current day to display under header
    // add text content of current day and append to the <p> element in the header
    // add time blocks to div container using jquery (3 columns in a row, 9 rows):
    //  - first time
    //  - then task container
    //  - last save button
    // create formatting feature to color-code timeblocks:
    //  - gray for past
    //  - red for current
    //  - green for future
    // add functionality so when user clicks into timeblock:
    //  - can edit the text content on focus
    //  - lock the content on blur
    // when user clicks the save button the text for the event saves into local storage via an array object
    // when user refreshes page, get the object array from local storage and recreate the events on the page
    // END PSEUDO CODE //

    var saveButton = document.getElementsByClassName("saveBtn");
    var currentDay = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").html(currentDay);
    
    // save button
    $(document).ready(function() {
    $(".saveBtn").on("click", function () {
        var textBlock = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
    
    localStorage.setItem(timeBlock, textBlock);
    });
    });
    
    function trackTime() {
        var currentTime =  moment().hour();
    
    // timeblock loop
    $(".time-block").each(function()   {
        var timeBlock = parseInt($(this).attr("id").split("-")[1]);
        console.log(timeBlock, currentTime)
        if (timeBlock < currentTime) {
            $(this).addClass("past");
        }
        else if (timeBlock == currentTime) {
            $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present"); 
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })};

    // local storage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    trackTime();