function validateForm() {
    // var x = document.forms["myForm"]["fname"].value;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // } 

    var form = document.forms["contactForm"]
    var error = null
    var msg = null
    
    var name = form["name"].value
    var email = form["email"].value
    var gender = form["gender"]

    if(name.length == 0) {
      alert("Name must be filled!")
    } else if(email.length == 0) {
      alert("Email must be filled!")
    } else if(!gender[0].checked && !gender[1].checked && !gender[2].checked) {
      alert("Gender must be chosen!")
    } else {
      return true
    }
    return false
}