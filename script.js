// This is the time displayed in the header.
var datetime = null,
    date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update,1000);
});


var time = moment();

function dayScheduler() {
    thisHour = time.hours();
    $(".timeSlot").each(function () {
        var workHour = parseInt($(this).attr("id"));
        console.log(workHour);
        console.log(thisHour);
        if (workHour > thisHour) {
            $(this).addClass("future")
        }
        else if (workHour === thisHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}
dayScheduler();

// this is the fuction that saves what was written
function save() {
    $(".timeSlot").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}
save();




var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {

    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);

});