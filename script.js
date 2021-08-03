<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validator</title>
    <link rel="icon" type="image/png" href="favicon.png">
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Sign Up Today!</h1>
    <!-- Form -->
    <form id="form" >
      <!-- Full Name -->
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" 
               placeholder="Full Name" required minlength="3" maxlength="100">
      </div>
      <!-- Phone Number -->
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" 
               placeholder="555-555-5555" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
      </div>
      <!-- Email Address -->
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" 
               placeholder="email@address.com" required>
      </div>
      <!-- Website URL -->
      <div class="form-group">
        <label for="website">Website URL</label>
        <input type="url" id="website" name="website" 
               placeholder="http://jacinto.design" required>
      </div>
      <!-- Password -->
      <div class="form-group">
        <label for="password1">Password</label>
        <input type="password" id="password1" placeholder="Create Password (Min. 8 characters)" 
               required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
               title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number.">
      </div>
      <!-- Confirm Password -->
      <div class="form-group">
        <label for="password2">Confirm Password</label>
        <input type="password" id="password2" placeholder="Confirm Password"
               required pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" name="password">
      </div>
      <button type="submit">Register</button>
    </form>
    <!-- Error/Success Message -->
    <div class="message-container">
      <h3 id="message">Don't Hesitate!</h3>
    </div>
  </div>
  <!-- Script -->
  <script src="script.js"></script>
</body>
</html>
