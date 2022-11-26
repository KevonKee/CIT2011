const PlayersData = Array();
var playertotal = 100;
var intervals;
var ele;
var idpass;
var outoftime = "no";
var answerrr = "a";
var points;
var canswers = 0;
var ianswers = 0;
var games = 0;
var arr = ["Lore100", "Champions100", "Abilities100", "Items100", "Arcane100", "Lore200", "Champions200", "Abilities200", "Items200", "Arcane200",
  "Lore300", "Champions300", "Abilities300", "Items300", "Arcane300",
  "Lore400", "Champions400", "Abilities400", "Items400", "Arcane400", "Lore500", "Champions500", "Abilities500", "Items500", "Arcane500"
];
var randid1;
var randid2;
var randid3;
var wager = 0;
// Register function that accepts the data that was entered into the form and validates it then sends it to a global array called players data
function register() {


  PlayersData.firstname = document.getElementById("fname").value;
  PlayersData.lastname = document.getElementById("lname").value;
  PlayersData.dateofbirth = document.getElementById("dob").value;
  PlayersData.emailaddress = document.getElementById("email").value;
  PlayersData.ageyears = parseInt(document.getElementById("age").value);
  PlayersData.gender = document.getElementById("gender").value;
  PlayersData.streetname = document.getElementById("street").value;
  PlayersData.cityname = document.getElementById("city").value;
  PlayersData.townname = document.getElementById("town").value;
  PlayersData.countryname = document.getElementById("country").value;
  PlayersData.educationlvl = document.getElementById("edulvl").value;
  PlayersData.imageofself = document.getElementById("imgself").value;
  PlayersData.score = playertotal;
  PlayersData.incorrect = ianswers;
  PlayersData.correct = canswers;
  PlayersData.games = games;



  console.log(PlayersData);



}
//   Calculate the persons age based on the date of birth entered
function getage() {
  let today = new Date().getFullYear();
  var ageinput = document.getElementById("dob").value;
  var dateObj = new Date(ageinput);
  var birthyear = dateObj.getFullYear();
  document.getElementById('age').value = (today - birthyear);
}


// Function that disables the player registration area and the submit button
function disable() {
  var element1 = document.getElementById("fname");
  element1.setAttribute('disabled', '');
  var element2 = document.getElementById("lname");
  element2.setAttribute('disabled', '');
  var element3 = document.getElementById("dob");
  element3.setAttribute('disabled', '');
  var element4 = document.getElementById("email");
  element4.setAttribute('disabled', '');
  var element5 = document.getElementById("age");
  element5.setAttribute('disabled', '');
  var element6 = document.getElementById("gender");
  element6.setAttribute('disabled', '');
  var element7 = document.getElementById("street");
  element7.setAttribute('disabled', '');
  var element8 = document.getElementById("city");
  element8.setAttribute('disabled', '');
  var element9 = document.getElementById("town");
  element9.setAttribute('disabled', '');
  var element10 = document.getElementById("country");
  element10.setAttribute('disabled', '');
  var element11 = document.getElementById("edulvl");
  element11.setAttribute('disabled', '');
  var element12 = document.getElementById("imgself");
  element12.setAttribute('disabled', '');
  var element13 = document.getElementById("playbutton");
  element13.removeAttribute('disabled');
  var element14 = document.getElementById("endbutton");
  element14.removeAttribute('disabled');
  var element15 = document.getElementById("submit");
  element15.setAttribute('disabled', '');
  var element16 = document.getElementById("checkbutton");
  element16.removeAttribute('disabled');
  document.getElementById("resultarea").classList.remove("invisible");
  document.getElementById("results").classList.remove("invisible");
  document.getElementById("quit").classList.remove("invisible");
  document.getElementById("playbutton").classList.remove("invisible");

}

// Validation for the form inputs using custom bootstrap validation
function submit1() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

        } else {
          event.preventDefault()
          submit2()
        }


        form.classList.add('was-validated')


      }, false)
    })

}

// calls the disable and register function when the form is submitted and valid
function submit2() {
  document.getElementById('form1').addEventListener('submit', register());
  document.getElementById('form1').addEventListener('submit', disable());


}

// function that makes the play area visible
function PlayGame() {
  document.getElementById("playarea").classList.remove("invisible");
  alert("Click a question to begin!");
  document.getElementById("questions").classList.add("invisible");
  document.getElementById("timer").classList.add("invisible");

}

function Endgame() {
  document.getElementById("playarea").classList.add("invisible");
}


function L1() {
  ele = document.getElementById("Lore100");
  idpass = ele.id;
  points = document.getElementById("Lore100").innerText;
  document.getElementById('questions').innerText = "Lore question 1";
  answerrr = "L1";
  document.getElementById('answers').innerText = "L1";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function L2() {
  ele = document.getElementById("Lore200");
  idpass = ele.id;
  points = document.getElementById("Lore200").innerText;
  document.getElementById('questions').innerText = "Lore question 2";
  answerrr = "L2";
  document.getElementById('answers').innerText = "L2";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function L3() {
  ele = document.getElementById("Lore300");
  idpass = ele.id;
  points = document.getElementById("Lore300").innerText;
  document.getElementById('questions').innerText = "Lore question 3";
  answerrr = "L3";
  document.getElementById('answers').innerText = "L3";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function L4() {
  ele = document.getElementById("Lore400");
  idpass = ele.id;
  points = document.getElementById("Lore400").innerText;
  document.getElementById('questions').innerText = "Lore question 4";
  answerrr = "L4";
  document.getElementById('answers').innerText = "L4";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function L5() {
  ele = document.getElementById("Lore500");
  idpass = ele.id;
  points = document.getElementById("Lore500").innerText;
  document.getElementById('questions').innerText = "Lore question 5";
  answerrr = "L5";
  document.getElementById('answers').innerText = "L5";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function C1() {
  ele = document.getElementById("Champions100");
  idpass = ele.id;
  points = document.getElementById("Champions100").innerText;
  document.getElementById('questions').innerText = "Champions question 1";
  answerrr = "C1";
  document.getElementById('answers').innerText = "C1";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();


}

function C2() {
  ele = document.getElementById("Champions200");
  idpass = ele.id;
  points = document.getElementById("Champions200").innerText;
  document.getElementById('questions').innerText = "Champions question 2";
  answerrr = "C2";
  document.getElementById('answers').innerText = "C2";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function C3() {
  ele = document.getElementById("Champions300");
  idpass = ele.id;
  points = document.getElementById("Champions300").innerText;
  document.getElementById('questions').innerText = "Champions question 3";
  answerrr = "C3";
  document.getElementById('answers').innerText = "C3";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function C4() {
  ele = document.getElementById("Champions400");
  idpass = ele.id;
  points = document.getElementById("Champions400").innerText;
  document.getElementById('questions').innerText = "Champions question 4";
  answerrr = "C4";
  document.getElementById('answers').innerText = "C4";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function C5() {
  ele = document.getElementById("Champions500");
  idpass = ele.id;
  points = document.getElementById("Champions500").innerText;
  document.getElementById('questions').innerText = "Champions question 5";
  answerrr = "C5";
  document.getElementById('answers').innerText = "C5";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function I1() {
  ele = document.getElementById("Items100");
  idpass = ele.id;
  points = document.getElementById("Items100").innerText;
  document.getElementById('questions').innerText = "Item question 1";
  answerrr = "I1";
  document.getElementById('answers').innerText = "It1";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function I2() {
  ele = document.getElementById("Items200");
  idpass = ele.id;
  points = document.getElementById("Items200").innerText;
  document.getElementById('questions').innerText = "Item question 2";
  answerrr = "I2";
  document.getElementById('answers').innerText = "It2";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function I3() {
  ele = document.getElementById("Items300");
  idpass = ele.id;
  points = document.getElementById("Items300").innerText;
  document.getElementById('questions').innerText = "Item question 3";
  answerrr = "I3";
  document.getElementById('answers').innerText = "It3";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function I4() {
  ele = document.getElementById("Items400");
  idpass = ele.id;
  points = document.getElementById("Items400").innerText;
  document.getElementById('questions').innerText = "Item question 4";
  answerrr = "I4";
  document.getElementById('answers').innerText = "It4";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function I5() {
  ele = document.getElementById("Items500");
  idpass = ele.id;
  points = document.getElementById("Items500").innerText;
  document.getElementById('questions').innerText = "Item question 5";
  answerrr = "I5";
  document.getElementById('answers').innerText = "It5";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function AB1() {
  ele = document.getElementById("Abilities100");
  idpass = ele.id;
  points = document.getElementById("Abilities100").innerText;
  document.getElementById('questions').innerText = "Abilities question 1";
  answerrr = "AB1";
  document.getElementById('answers').innerText = "Ab1";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function AB2() {
  ele = document.getElementById("Abilities200");
  idpass = ele.id;
  points = document.getElementById("Abilities200").innerText;
  document.getElementById('questions').innerText = "Abilities question 2";
  answerrr = "AB2";
  document.getElementById('answers').innerText = "Ab2";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function AB3() {
  ele = document.getElementById("Abilities300");
  idpass = ele.id;
  points = document.getElementById("Abilities300").innerText;
  document.getElementById('questions').innerText = "Abilities question 3";
  answerrr = "AB3";
  document.getElementById('answers').innerText = "Ab3";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function AB4() {
  ele = document.getElementById("Abilities400");
  idpass = ele.id;
  points = document.getElementById("Abilities400").innerText;
  document.getElementById('questions').innerText = "Abilities question 4";
  answerrr = "AB4";
  document.getElementById('answers').innerText = "Ab4";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function AB5() {
  ele = document.getElementById("Abilities500");
  idpass = ele.id;
  points = document.getElementById("Abilities500").innerText;
  document.getElementById('questions').innerText = "Abilities question 5";
  answerrr = "AB5";
  document.getElementById('answers').innerText = "Ab5";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function A1() {
  ele = document.getElementById("Arcane100");
  idpass = ele.id;
  points = document.getElementById("Arcane100").innerText;
  document.getElementById('questions').innerText = "Arcane question 1";
  answerrr = "A1";
  document.getElementById('answers').innerText = "A1";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function A2() {
  ele = document.getElementById("Arcane200");
  idpass = ele.id;
  points = document.getElementById("Arcane200").innerText;
  document.getElementById('questions').innerText = "Arcane question 2";
  answerrr = "A2";
  document.getElementById('answers').innerText = "A2";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function A3() {
  ele = document.getElementById("Arcane300");
  idpass = ele.id;
  points = document.getElementById("Arcane300").innerText;
  document.getElementById('questions').innerText = "Arcane question 3";
  answerrr = "A3";
  document.getElementById('answers').innerText = "A3";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function A4() {
  ele = document.getElementById("Arcane400");
  idpass = ele.id;
  points = document.getElementById("Arcane400").innerText;
  document.getElementById('questions').innerText = "Arcane question 4";
  answerrr = "A4";
  document.getElementById('answers').innerText = "A4";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60;
  updateTimer();



}

function A5() {
  ele = document.getElementById("Arcane500");
  idpass = ele.id;
  points = document.getElementById("Arcane500").innerText;
  document.getElementById('questions').innerText = "Arcane question 5";
  answerrr = "A5";
  document.getElementById('answers').innerText = "A5";
  document.getElementById("questions").classList.remove("invisible");
  document.getElementById("form2").classList.remove("invisible");
  document.getElementById("timer").classList.remove("invisible");
  doubjepcheck();
  minute = 60
  updateTimer();


}


function CheckAnswer() {

  if (document.getElementById("AnswerInput").value == answerrr && outoftime == "no") {
    alert("Correct!");
    if (wager != 0) {
      playertotal = playertotal + parseInt(wager);
    }
    if (wager == 0) {
      playertotal = playertotal + parseInt(points);
    }

    document.getElementById("Playagain").classList.remove("invisible");
    var disablebtn = document.getElementById(idpass);
    disablebtn.setAttribute('disabled', '');
    alert("Press play again!");
    canswers = canswers + 1;
    clearInterval(intervals);
    console.log(playertotal);


  }
  if (document.getElementById("AnswerInput").value != answerrr || outoftime == "yes") {
    alert("Incorrect!");
    if (wager != 0) {
      playertotal = playertotal - parseInt(wager);
    }
    if (wager == 0) {
      playertotal = playertotal - parseInt(points);
    }


    document.getElementById("revealbutton").classList.remove("invisible");
    document.getElementById("nobuttons").classList.remove("invisible");
    document.getElementById("Playagain").classList.remove("invisible");
    ianswers = ianswers + 1;
    clearInterval(intervals);

    console.log(playertotal);


  }
  games = games + 1;
  PlayersData.score = playertotal;
  PlayersData.incorrect = ianswers;
  PlayersData.correct = canswers;
  PlayersData.games = games;
  document.getElementById("AnswerInput").value = "";
  showall();

}

function nobutton() {
  alert("Press play again!");

}

function hideans() {
  document.getElementById("revealbutton").classList.add("invisible");
  document.getElementById("answers").classList.add("invisible");
  document.getElementById("nobuttons").classList.add("invisible");
}

function Answerreveal() {
  document.getElementById("answers").classList.remove("invisible");
  var disablebtn = document.getElementById(idpass);
  disablebtn.setAttribute('disabled', '');
  alert("Press play again!");
}

function doubjep() {
  wager = prompt("Enter wager amount");
  while (wager > PlayersData.score || wager < 0) {
    wager = prompt("Enter a valid wager amount!");
  }
}

function doubjepcheck() {
  if (idpass == randid1 || idpass == randid2 || idpass == randid3) {
    doubjep();
  }
}

function rando() {
  randid1 = arr[Math.floor(Math.random() * arr.length)];
  randid2 = arr[Math.floor(Math.random() * arr.length)];
  randid3 = arr[Math.floor(Math.random() * arr.length)];
}

function findpercentagescore() {
  var textar = document.getElementById("showpercentage");
  textar.value = "";
  var today = new Date();
  var percentscore = (PlayersData.correct / PlayersData.games) * 100;
  document.getElementById("showpercentage").value =
    'Total questions: ' + PlayersData.games + '\n' +
    'Total correct: ' + PlayersData.correct + '\n' +
    'Total incorrect: ' + PlayersData.incorrect + '\n' +
    'Percentage: ' + percentscore + '\n' +
    'Name: ' + PlayersData.firstname + '' + PlayersData.lastname + '\n' +
    'Town: ' + PlayersData.townname + '\n' +
    'Date: ' + today + '\n';
}

function showall() {
  var textar = document.getElementById("showallplayers");
  textar.value = "";
  var today = new Date();
  var percentscore = (PlayersData.correct / PlayersData.games) * 100;
  document.getElementById("showallplayers").value =
    'Name: ' + PlayersData.firstname + '' + PlayersData.lastname + '\n' +
    'Age: ' + PlayersData.ageyears + '\n' +
    'Town: ' + PlayersData.townname + '\n' +
    'Date: ' + today + '\n' +
    'Total questions: ' + PlayersData.games + '\n' +
    'Total correct: ' + PlayersData.correct + '\n' +
    'Total incorrect: ' + PlayersData.incorrect + '\n' +
    'Final total: ' + PlayersData.score + ' , ' + 'Percentage: ' + percentscore + '%';

}

function updateTimer() {


  if (minute == 60) {
    clearInterval(intervals);
    intervals = setInterval('updateTimer()', 1000);

  }
  if (minute > 0) {

    minute = minute - 1;

    m = minute;

    document.getElementById("timer").innerHTML =

      '<div>' + m + ' <span> Seconds </span></div>';

  }
  if (minute == 0) {
    clearInterval(intervals);
    outoftime = "yes";
    CheckAnswer();
  }

}

// function showfreq() {
//   // document.getElementById('center').style.width = "599px";
//   document.getElementById("showcharts").innerHTML =
//     '<div>' + '<p>Gender frequency</p>' + '<img src="images/square.png" alt="">' +
//     '<p > Age frequency</p>' + '<img src="images/square.png" alt="">' + '</div>';
// }
// setInterval('showfreq()', 5000);
