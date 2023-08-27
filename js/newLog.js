// Write a message to the console.
function register(){
  const username = document.getElementById("usernameInput").value;
  const password = document.getElementById("myInput").value;
  const user = document.getElementById("user");
  const myI = document.getElementById("pinvalid");
  const s = document.getElementById("wpress");
  var letter = document.getElementById("letter");
  var Form = document.getElementById("regForm");
  //usernameInput.value = true;
 //myInput.value = true;
  //console.log(username);
  // When the user starts to type something inside the password field
  // Validate lowercase letters
  //var password = document.getElementById('password').value;
  if (password.length < 8) {
    myI.className += " invalid";
  } else if (!/[A-Z]/.test(password)) {
    myI.className += " invalid";
  } else if (!/[a-z]/.test(password)) {
    myI.className += " invalid";
  } else if (!/\d/.test(password)) {
    myI.className += " invalid";
  } else {
    myI.setAttribute("class","input-group");
      alert("You've just signed up!");
      //Form.setAttribute("action","index.html")
      window.location.href = "index.html";
  }
    //Username Validation 
    if (username.length < 6) {
      user.innerHTML = "Username must be at least 6 characters!";
    } else if (!/[a-zA-Z]/.test(username)) {
      user.innerHTML = "Username must contain only letters!";
    } else {
      user.innerHTML = "";
    } 
}

document.querySelector("body")
function checkBox() {
  const i = document.getElementById("faeye");
  const x = document.getElementById("myInput");
  const s = document.getElementById("wpress");
  if (x.type === "password") {
    i.className ="fa fa-eye";
    x.type = "text";
    //s.disabled =  true;
  } else{
    i.className ="fa fa-eye-slash";
    x.type = "password";
    //s.disabled = false;
  }  
}

var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}


var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  var nBtn = document.getElementById("nextBtn");
  if (nBtn.innerHTML === "Submit"){
    nBtn.setAttribute("onclick", "register()")
  } else {
    nBtn.setAttribute("onclick", "nextPrev(1)")
  }
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      document.getElementById("myInput").className = "form-control apples";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}