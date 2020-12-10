$(document).ready(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $(".save").on("click", function() {
        console.log(this);
        
    })
})



/**
 * use moment.js for time and date - use jquery 
 * grab selectors from html 
 * use the moment.js format from the docs inside a jquery ready function. 
 * it must display the time and the day 
 * create an on "click" to listen for the users text input
 *  must collect the values 
 * use local storage (getItem)
 * must change the color of the user input box - to indicate whether it is in the past, present, or future
 * must addClass, and remove 
 */