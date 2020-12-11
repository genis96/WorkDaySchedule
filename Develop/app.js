  window.onload = () => { 
    eightAm();
    nineAm();
    tenAm();
    elevenAm();
    twelveAm();
    onePm();
    twoPm();
    threePm();
    fourPm();
    colorChanges();
}

let currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);
let currTime = moment().format("LT");
$("#currTime").append(currTime);

let now = new Date().getHours();
// if (now > x) {
//     $("#mainBtn").addClass("past");
//   } else if (now >= x && now < x) {
//     $("#mainBtn").addClass("present");
//   } else if (now < x) {
//     $("#mainBtn").addClass("future");
//   }

function colorChanges() {
    //can i store the nums in a let & just use an if statement once..?
    // let x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
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
    console.log(this)
}

function eightAm() {
    let userInput = document.querySelector('#text-input-8');
    let userOutput = document.querySelector('#text-input-8');
    let saveBtn = document.querySelector('#btn8');
    
    $(saveBtn).on("click", updateUI);
    userOutput.textContent = localStorage.getItem("content");
    userInput.value = localStorage.getItem("content");
    
    function updateUI() {
        localStorage.setItem("content", userInput.value);
        userOutput.textContent = userInput.value;
    }

}

function nineAm() {
  let userInput2 = document.querySelector("#text-input-9");
  let userOutput2 = document.querySelector("#text-input-9");
  let saveBtn2 = document.querySelector("#btn9");

  $(saveBtn2).on("click", updateUI2);

  userOutput2.textContent = localStorage.getItem("content2");
  userInput2.value = localStorage.getItem("content2");

  function updateUI2() {
    localStorage.setItem("content2", userInput2.value);
    userOutput2.textContent = userInput2.value;
    }
}

function tenAm() {
  let userInput3 = document.querySelector("#text-input-10");
  let userOutput3 = document.querySelector("#text-input-10");
  let saveBtn3 = document.querySelector("#btn9");

  $(saveBtn3).on("click", updateUI3);

  userOutput3.textContent = localStorage.getItem("content3");
  userInput3.value = localStorage.getItem("content3");

  function updateUI3() {
    localStorage.setItem("content3", userInput3.value);
    userOutput2.textContent = userInput3.value;
    }
}
function elevenAm() {
  let userInput4 = document.querySelector("#text-input-11");
  let userOutput4 = document.querySelector("#text-input-11");
  let saveBtn4 = document.querySelector("#btn11");

  $(saveBtn4).on("click", updateUI4);

  userOutput4.textContent = localStorage.getItem("content4");
  userInput4.value = localStorage.getItem("content4");

  function updateUI4() {
    localStorage.setItem("content4", userInput4.value);
    userOutput4.textContent = userInput4.value;
    }
}
function twelveAm() {
  let userInput5 = document.querySelector("#text-input-12");
  let userOutput5 = document.querySelector("#text-input-12");
  let saveBtn5 = document.querySelector("#btn9");

  $(saveBtn5).on("click", updateUI5);

  userOutput5.textContent = localStorage.getItem("content5");
  userInput5.value = localStorage.getItem("content5");

  function updateUI5() {
    localStorage.setItem("content5", userInput5.value);
    userOutput5.textContent = userInput5.value;
    }
}

function onePm() {
  let userInput6 = document.querySelector("#text-input-1");
  let userOutput6 = document.querySelector("#text-input-1");
  let saveBtn6 = document.querySelector("#btn1");

  $(saveBtn6).on("click", updateUI6);

  userOutput6.textContent = localStorage.getItem("content6");
  userInput6.value = localStorage.getItem("content6");

  function updateUI6() {
    localStorage.setItem("content6", userInput6.value);
    userOutput6.textContent = userInput6.value;
    }
}
function twoPm() {
  let userInput7 = document.querySelector("#text-input-2");
  let userOutput7 = document.querySelector("#text-input-2");
  let saveBtn7 = document.querySelector("#btn2");

  $(saveBtn7).on("click", updateUI7);

  userOutput7.textContent = localStorage.getItem("content3");
  userInput7.value = localStorage.getItem("content7");

  function updateUI7() {
    localStorage.setItem("content2", userInput7.value);
    userOutput7.textContent = userInput7.value;
    }
}
function threePm() {
  let userInput8 = document.querySelector("#text-input-3");
  let userOutput8 = document.querySelector("#text-input-3");
  let saveBtn8 = document.querySelector("#btn3");

  $(saveBtn8).on("click", updateUI8);

  userOutput8.textContent = localStorage.getItem("content3");
  userInput8.value = localStorage.getItem("content8");

  function updateUI8() {
    localStorage.setItem("content2", userInput8.value);
    userOutput8.textContent = userInput8.value;
    }
}
function fourPm() {
  let userInput9 = document.querySelector("#text-input-4");
  let userOutput9 = document.querySelector("#text-input-4");
  let saveBtn9 = document.querySelector("#btn4");

  $(saveBtn9).on("click", updateUI9);

  userOutput9.textContent = localStorage.getItem("content3");
  userInput9.value = localStorage.getItem("content9");

  function updateUI9() {
    localStorage.setItem("content2", userInput9.value);
    userOutput9.textContent = userInput9.value;
    }
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