document.getElementById("Sign_Up-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var country = document.getElementById("country").value;
    var agree = document.getElementById("agree_txt").checked;


    var usernameRegex = /^[a-z](?!.*__)[a-z\d_]{2,12}[a-z\d]$/;
    if (!usernameRegex.test(username)) {
      alert("Please enter a valid username.");
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Please enter a valid password.");
      return;
    }
  
    if (country === "Empty") {
      alert("Please select a country.");
      return;
    }
  
    if (!agree) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    alert("Registration successful!");
  });
  