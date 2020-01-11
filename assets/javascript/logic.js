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

colorChecks(9, "#nineAm"); 
colorChecks(10, "#tenAm"); 
colorChecks(11, "#eleven"); 
colorChecks(12, "#noon"); 
colorChecks(13, "#onePm");
colorChecks(14, "#twoPm"); 
colorChecks(15, "#threePm"); 
colorChecks(16, "#fourPm"); 
colorChecks(17, "#fivePm"); 

function colorChecks(time, theId) { 
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