document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  

    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all the fields.");
      return;
    }

    if (username === "Karan" && password === "Karan@123") {
      alert("Login successful!");

    } else {
      alert("Invalid username or password.");
    }
  });
  