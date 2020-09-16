// const moment = require("moment")

console.log(moment().format('LT'))
$("#currentDay").text(moment().format('ll'))

// var timeSlots = [8,9,10,11,12,13,14,15,16,17,18];
var timeSlots = [{ militaryTime: 9, standardTime: "9am", dataAttr: "nineAM" },
{ militaryTime: 10, standardTime: "10am", dataAttr: "tenAM" },
{ militaryTime: 11, standardTime: "11am", dataAttr: "elevenAM" },
{ militaryTime: 12, standardTime: "12pm", dataAttr: "twelvePM" },
{ militaryTime: 13, standardTime: "1pm", dataAttr: "onePM" },
{ militaryTime: 14, standardTime: "2pm", dataAttr: "twoPM" },
{ militaryTime: 15, standardTime: "3pm", dataAttr: "threePM" },
{ militaryTime: 16, standardTime: "4pm", dataAttr: "fourPM" },
{ militaryTime: 17, standardTime: "5pm", dataAttr: "fivePM" }]

var savedEntries;


getSavedEntries();
console.log(savedEntries[timeSlots[0].dataAttr])

function getSavedEntries() {
    var today = moment().format('L');
    if (!localStorage.getItem(today)) {
        savedEntries = {daySaved: moment().format('L'), nineAM: "", tenAM: "", elevenAM: "", twelvePM: "", onePM: "", twoPM: "", threePM: "", fourPM: "", fivePM: "" };
    } else {
        savedEntries = JSON.parse(localStorage.getItem(today));
    }
}

// Create my time blocks
timeSlots.forEach(function (hour) {

    // Get Current Hour
    var currentHourBlock = moment().hour()

    // Create Elements and assign classes
    row = $('<div class="row no-gutters">');
    mainCol = $('<div class="col-10">');
    saveCol = $('<div class="col-1">');
    hourCol = $('<div class="col-1 hour">');
    saveBtn = $('<button class="saveBtn fa fa-lock">');
    textArea = $('<textarea>');

    hourCol.text(hour.standardTime);
    saveBtn.attr("data-hour", hour.dataAttr)
    textArea.attr("id", hour.dataAttr)
    textArea.val(savedEntries[hour.dataAttr])

    // Change time blocks based on time of day
    if (hour.militaryTime < currentHourBlock) {
        textArea.addClass("past")
    } else if (currentHourBlock === hour.militaryTime) {

        textArea.addClass("present")
    } else {

        textArea.addClass("future")
    }

    row.append(hourCol)
    row.append(mainCol)
    row.append(saveCol)
    saveCol.append(saveBtn)
    mainCol.append(textArea)
    $('.container').append(row);
})

$('.saveBtn').on("click", function(){
    var today = moment().format('L');
    var hour = $(this).attr('data-hour');
    console.log(hour);
    console.log($(`#${hour}`).val());
    savedEntries[hour] = $(`#${hour}`).val();
    savedEntries["daySaved"] = today; 
    localStorage.setItem(today,JSON.stringify(savedEntries));
})


console.log(timeSlots)