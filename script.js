$(document).ready(function() {
    var now = moment().format('MMMM Do YYYY');
    var dateHeading = $(".todaysDate");
    dateHeading.text(now); 


})



var timeNow =  moment().hours();

$(".time").each(function() {

var timeBlock = parseInt($(this).attr("id")) 

if(timeNow===timeBlock) {

$(this).addClass("present") }

else if (timeNow > timeBlock) {

$(this).addClass("past") }

else {

$(this).addClass("future") }


});






