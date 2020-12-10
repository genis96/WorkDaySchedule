  window.onload = () => { 
    timeAmPm();
    colorChanges();
}

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);
var currTime = moment().format("LT");
$("#currTime").append(currTime);

let now = new Date().getHours();


function colorChanges() {
    if (now > 8) {
        $("#btn8").addClass("past");
      } else if (now >= 8 && now < 9) {
        $("#btn8").addClass("present");
      } else if (now < 8) {
        $("#btn8").addClass("future");
      }
      if (now > 9) {
        $("#btn9").addClass("past");
      } else if (now >= 9 && now < 10) {
        $("#btn9").addClass("present");
      } else if (now < 9) {
        $("#btn9").addClass("future");
      }
      if (now > 10) {
        $("#btn10").addClass("past");
      } else if (now >= 10 && now < 11) {
        $("#btn10").addClass("present");
      } else if (now < 10) {
        $("#btn10").addClass("future");
      }
      if (now > 11) {
        $("#btn11").addClass("past");
      } else if (now >= 11 && now < 12) {
        $("#btn11").addClass("present");
      } else if (now < 11) {
        $("#btn11").addClass("future");
      }
      if (now > 12) {
        $("#btn12").addClass("past");
      } else if (now >= 12 && now < 13) {
        $("#btn12").addClass("present");
      } else if (now < 12) {
        $("#btn12").addClass("future");
      }
      if (now > 13) {
        $("#btn1").addClass("past");
      } else if (now >= 13 && now < 14) {
        $("#btn1").addClass("present");
      } else if (now < 13) {
        $("#btn1").addClass("future");
      }
      if (now > 14) {
        $("#btn2").addClass("past");
      } else if (now >= 14 && now < 15) {
        $("#btn2").addClass("present");
      } else if (now < 14) {
        $("#btn2").addClass("future");
      }
      if (now > 15) {
        $("#btn3").addClass("past");
      } else if (now >= 15 && now < 16) {
        $("#btn3").addClass("present");
      } else if (now < 15) {
        $("#btn3").addClass("future");
      }
      if (now > 16) {
        $("#btn4").addClass("past");
      } else if (now >= 16 && now < 17) {
        $("#btn4").addClass("present");
      } else if (now < 16) {
        $("#btn4").addClass("future");
      }
    console.log(this)
}

function timeAmPm() {
    let userInput = document.querySelector('#text-input-8');
    let userOutput = document.querySelector('#text-input-8');
    let saveBtn = document.querySelector('#tmainBtn');

    $(saveBtn).on("click", updateUI);

    userOutput.text = localStorage.getItem("content");
    userInput.val = localStorage.getItem("content");
}



/**
 * use moment.js for time and date 
 * grab selectors from html 
 * use the moment.js format from the docs inside a jquery ready function. 
 * it must display the time and the day 
 * create an on "click" to listen for the users text input
 *  must collect the values 
 * use local storage (getItem)
 * must change the color of the user input box - to indicate whether it is in the past, present, or future
 * must addClass, and remove 
 * 
 * 
 * // $(document).ready(function() {
//     //moment.js
//     $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
//     //save btn for the user text input + time
//     $("save").on("click", function() {
//         //Get the current value of the first element in the set of matched elements or set the value of every matched element. - .val() 
//         let txt = $(this).siblings("#text-input").val();
//         let time = $(this).parent().attr("id");
//         localStorage.setItem(time, txt);
//         //getItem for the localStorage for each hour 
//     })  

// })
 *     $("#h8 .text-input").val(localStorage.getItem("hour8"));
    $("#h9 .text-input").val(localStorage.getItem("hour9"));
    $("#h10 .text-input").val(localStorage.getItem("hour10"));
    $("#h11 .text-input").val(localStorage.getItem("hour11"));
    $("#h12 .text-input").val(localStorage.getItem("hour12"));
    $("#h13 .text-input").val(localStorage.getItem("hour13"));
    $("#h14 .text-input").val(localStorage.getItem("hour14"));
    $("#h15 .text-input").val(localStorage.getItem("hour15"));
    $("#h16 .text-input").val(localStorage.getItem("hour16"));
    $("#h17 .text-input").val(localStorage.getItem("hour17"));
    $("#h18 .text-input").val(localStorage.getItem("hour18"));
    console.log(this);
 */