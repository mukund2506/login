function checkPassword() {
    var passwordInput = document.getElementById("password");
    var confirmPasswordDiv = document.getElementById("confirmPasswordDiv");

    if (passwordInput.value !== "") {
        confirmPasswordDiv.style.display = "block";
    } else {
        confirmPasswordDiv.style.display = "none";
    }
}

// Placeholder functions for login with Google and Facebook
function loginWithGoogle() {
    console.log("Logging in with Google... (Placeholder)");
    // Additional implementation for Google login goes here
}

function loginWithFacebook() {
    console.log("Logging in with Facebook... (Placeholder)");
    // Additional implementation for Facebook login goes here
}

// Other JavaScript functions (unchanged)
function login() {
    var emailOrUsername = document.getElementById("email_or_username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    console.log("Email/Username:", emailOrUsername);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    window.location.reload();
}
