function validateForm() {

    var form = document.forms["contactForm"]
    var error = null
    var msg = null
    
    var name = form["name"].value
    var email = form["email"].value
    var gender = form["gender"]
    var branch = form["branch"]
    var subject = form["subject"].value

    if(name.length == 0) {
      alert("Name field must be filled!")
    } else if(email.length == 0) {
      alert("Email field must be filled!")
    } else if(!gender[0].checked && !gender[1].checked && !gender[2].checked) {
      alert("Gender must be chosen!")
    } else if(branch.selectedIndex == 0) {
      alert("Branch location must be chosen!")
    } else if(subject.length == 0){
      alert("Type your message!")
    } else {
      alert("Success!")
    }
}