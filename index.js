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

// Other JavaScript functions
function login() {
    var emailOrUsername = document.getElementById("email_or_username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    console.log("Email/Username:", emailOrUsername);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    window.location.reload();
}
//GOOGLE LOGIN
function loginWithGoogle(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send this directly to your server!
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  function loginWithGoogle() {
    gapi.load('auth2', function() {
      gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com'
      }).then(function(auth2) {
        auth2.signIn().then(function(googleUser) {
          console.log('Google user signed in:', googleUser);
          // You can handle the signed-in user here, e.g., send the user data to your server
        });
      });
    });
  }
// FACE BOOK LOGIN
window.fbAsyncInit = function() {
    FB.init({
      appId      : 'your-app-id',
      cookie     : true,
      xfbml      : true,
      version    : 'v12.0'
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      console.log('Logged into Facebook.');
      testAPI();
    } else {
      console.log('Please log into Facebook.');
    }
  }

  function testAPI() {
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
    });
  }
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  
function myFunctionconform() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 