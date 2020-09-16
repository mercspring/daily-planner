console.log(moment().format('LT'))
$("#currentDay").text(moment().format('ll'))

var timeSlots = [8,9,10,11,12,13,14,15,16,17,18];
timeSlots.forEach(color)
function color(hourBlock){
// console.log(currentHourBlock, hourBlock)



}
// Create my time blocks
timeSlots.forEach(function(hourBlock){

var currentHourBlock = moment().hour()
row = $('<div class="row">');
mainCol = $('<div class="col-10">');
saveCol = $('<div class="col-1">');
hourCol = $('<div class="col-1">');
textArea = $('<textarea>');
if(hourBlock < currentHourBlock){
    textArea.css("background-color", "gray")
}
row.append(hourCol)
row.append(mainCol)
row.append(saveCol)
mainCol.append(textArea)
$('.container').append(row);
})
// Change time blocks based on time of day
console.log(timeSlots)