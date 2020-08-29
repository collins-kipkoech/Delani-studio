function validate(){
    var name = document.forms["myForm"]["name-input"].value;
    var email = document.forms["myForm"]["email-input"].value;
    var message = document.forms["myForm"]["message-input"].value;

    if(name == ""){
      alert("Please enter your name");
      return false;
    }
    else if(email == ""){
      alert("Please enter your email");
      return false;
    }
    else if(message == ""){
      alert("Please enter your feedback");
      return false;
    }
    else{
      alert (name + ", we have received your message. Thank you for reaching out to us.");
      return true;
    }
  };