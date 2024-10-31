function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    errorMessage.innerHTML = "";

    if (username.trim() === "") {
        errorMessage.innerHTML = "Username must be filled out";
        return false;
    }

    if (password.trim() === "") {
        errorMessage.innerHTML = "Password must be filled out";
        return false;
    }

    // You can add more complex validation here, such as checking password strength

    // Simulating login logic
    // Replace with actual authentication logic
    if (username === "user" && password === "password") {
        alert("Login successful!"); // Replace with redirect or other action
        return true;
    } else {
        errorMessage.innerHTML = "Invalid username or password";
        return false;
    }
}