let currently = $("#currentDay");
let nowHour = moment().format("H");

setInterval(() => {
    let now =moment();
    let date = now.format("dddd, MMMM, hh:mm a");
    currently.text(date);
}, 100);

$(".saveBtn").click(function () { 
    $('input[type="text"]').each(function () { 
        const id = $(this).attr('id'); 
        const value = $(this).val(); 
        localStorage.setItem(id, value);
    });
});

$('input[type="text"]').each(function () { 
    const getting = $(this).attr('id'); 
    const letsGrab = localStorage.getItem(getting); 
    document.getElementById(getting).value = letsGrab; 
});



timeCheck(9, "#nineAm");
timeCheck(10, "#tenAm");
timeCheck(11, "#eleven");
timeCheck(12, "#noon");
timeCheck(1, "#onePm");
timeCheck(2, "#twoPm");
timeCheck(3, "#threePm");
timeCheck(4, "#fourPm");
timeCheck(5, "#fivePm");


function timeCheck(time, theId) {
    if (nowHour > time) { 
        $(theId).addClass("past"); 
    }
    if (nowHour < time) {
        $(theId).addClass("future");
    }
    if (nowHour == time) {
        $(theId).addClass("present");
    }
}