var today = moment().format("dddd MMMM Do YYYY");
document.getElementById("currentDay").append(today);
var currentTime = moment().hour();
console.log(currentTime);

var setHour = function(hourBlock) {
    var hourId = Number.parseInt(hourBlock.id)
    console.log(hourId);
    var textArea = hourBlock.querySelector('description')
    if (hourId < currentTime) {
        textArea.className = 'past';
    } else if (hourId === currentTime) {
        textArea.classList.remove('past');
        textArea.classList.add('present');
    } else {
        textArea.classList.remove('past');
        textArea.classList.remove('present');
        textArea.classList.add('future');
    }
}


// keep at bottom
document.querySelectorAll(".hour").forEach(setHour)