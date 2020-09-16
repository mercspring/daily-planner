console.log(moment().format('LT'))
$("#currentDay").text(moment().format('ll'))

var timeSlots = [8,9,10,11,12,13,14,15,16,17,18];
var timeSlots = [ {militaryTime:  9, standardTime: "9am"},
{militaryTime: 10, standardTime: "10am"},
{militaryTime: 11, standardTime: "11am"},
{militaryTime: 12, standardTime: "12pm"},
{militaryTime: 13, standardTime: "1pm"},
{militaryTime: 14, standardTime: "2pm"},
{militaryTime: 15, standardTime: "3pm"},
{militaryTime: 16, standardTime: "4pm"},
{militaryTime: 17, standardTime: "5pm"},]
timeSlots.forEach(color)
function color(hourBlock){
// console.log(currentHourBlock, hourBlock)



}
// Create my time blocks
timeSlots.forEach(function(hourBlock){

var currentHourBlock = moment().hour()
row = $('<div class="row no-gutters">');
mainCol = $('<div class="col-10">');
saveCol = $('<div class="col-1">');
hourCol = $('<div class="col-1">');
textArea = $('<textarea>');
hourCol.text(hourBlock.standardTime);
hourCol.addClass("hour");
saveCol.addClass("saveBtn");
// Change time blocks based on time of day
if(hourBlock.militaryTime < currentHourBlock){
    textArea.addClass("past")
}else if(currentHourBlock === hourBlock.militaryTime) {

    textArea.addClass("present")
} else{

    textArea.addClass("future")
}

row.append(hourCol)
row.append(mainCol)
row.append(saveCol)
mainCol.append(textArea)
$('.container').append(row);
})
console.log(timeSlots)