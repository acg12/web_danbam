function validateForm() {
    var form = document.forms["contactForm"]
    
    var name = form["name"].value
    var email = form["email"].value
    var gender = form["gender"].value
    var branch = form["branch"].value
    var message = form["message"].value
    var offer = form["offer"]

    if(name == "" || email == "" || gender == "" || branch == "" || message == "") {
      alert("All fields must be filled!")
    } else if(email.search("@") == -1 || email.search(".com") == -1) {
      alert("Email must be in valid format!")
    } else if(!isAlpha(name)) {
      alert("Name must only consist of letters!")
    } else if(!validMessage(message)) {
      alert("Message must be longer than 5 characters!")
    } else if(!firstCapital(name)) {
      alert("Name must start with capital letter!")
    } else {
      alert("Thank you for contacting us! Our team will get back to you as soon as possible!")
      document.getElementById("btn-reset").click();
    }
}

function isAlpha(name) {
  for(let i = 0; i < name.length; i++) {
    var c = name.charAt(i);
    if(!(c >= 'A' && c <= 'Z') && !(c >= 'a' && c <= 'z')) {
      return false;
    }
  }
  return true;
}

function validMessage(msg) {
  return (msg.length > 5) ? true : false;
}

function firstCapital(name) {
  var c = name.charAt(0);
  if(!(c >= 'A' && c <= 'Z')) {
    return false;
  }
  return true;
}