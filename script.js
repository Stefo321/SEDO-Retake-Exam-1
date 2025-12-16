// Color validation function
function isValidColor(color) {
  var hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  var namedColors = ['red', 'green', 'blue', 'black', 'white', 'yellow', 'purple', 'orange'];
  return hexPattern.test(color) || namedColors.includes(color.toLowerCase());
}

// Apply color to box
function applyColor(color) {
  if (isValidColor(color)) {
    document.getElementById('box').style.backgroundColor = color;
    document.getElementById('error-message').textContent = '';
    return true;
  } else {
    document.getElementById('error-message').textContent = 'Invalid color format. Use #FFF, #FFFFFF, or named colors.';
    document.getElementById('error-message').style.color = 'red';
    return false;
  }
}

// DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize UserService (from userService.js - global variable)
  // Note: userServiceInstance is available globally from userService.js
  
  // Update user status display
  function updateUserStatus() {
    const statusDiv = document.getElementById('user-status');
    if (userServiceInstance.currentUser) {
      statusDiv.textContent = `Logged in as: ${userServiceInstance.currentUser}`;
      statusDiv.style.color = 'green';
    } else {
      statusDiv.textContent = 'Not logged in';
      statusDiv.style.color = 'gray';
    }
  }
  
  // Login button
  document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username-input').value.trim();
    if (username) {
      if (!userServiceInstance.users[username]) {
        userServiceInstance.addUser(username);
      }
      userServiceInstance.setCurrentUser(username);
      updateUserStatus();
      document.getElementById('error-message').textContent = `Welcome ${username}!`;
      document.getElementById('error-message').style.color = 'green';
    }
  });
  
  // Apply color button
  document.getElementById('apply-btn').addEventListener('click', function() {
    const color = document.getElementById('color-input').value;
    applyColor(color);
  });
  
  // Reset button
  document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('box').style.backgroundColor = '#ddd';
    document.getElementById('color-input').value = '';
    document.getElementById('error-message').textContent = '';
  });
  
  // Save as favorite button
  document.getElementById('save-favorite-btn').addEventListener('click', function() {
    const color = document.getElementById('color-input').value;
    if (applyColor(color) && userServiceInstance.currentUser) {
      userServiceInstance.updateFavoriteColor(color);
      document.getElementById('error-message').textContent = 'Color saved as favorite!';
      document.getElementById('error-message').style.color = 'green';
    } else if (!userServiceInstance.currentUser) {
      document.getElementById('error-message').textContent = 'Please login first to save favorites';
      document.getElementById('error-message').style.color = 'red';
    }
  });
  
  // Load favorite button
  document.getElementById('load-favorite-btn').addEventListener('click', function() {
    if (userServiceInstance.currentUser) {
      const favoriteColor = userServiceInstance.getCurrentUserColor();
      document.getElementById('color-input').value = favoriteColor;
      applyColor(favoriteColor);
      document.getElementById('error-message').textContent = 'Loaded favorite color';
      document.getElementById('error-message').style.color = 'green';
    } else {
      document.getElementById('error-message').textContent = 'Please login first to load favorites';
      document.getElementById('error-message').style.color = 'red';
    }
  });
  
  // Initial status update
  updateUserStatus();
});
