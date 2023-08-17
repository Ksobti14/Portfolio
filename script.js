function goToGmail() {
    var email = document.getElementById("emailId").value;
    if (email) {
      var gmailUrl = "https://mail.google.com/mail/u/0/#inbox" + email;
      window.location.href = gmailUrl;
    }
  }