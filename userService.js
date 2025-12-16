// UserService class to manage user color preferences
class UserService {
  constructor() {
    this.users = {};
    this.currentUser = null;
  }

  // Add or update a user
  addUser(username, favoriteColor = '#3498db') {
    this.users[username] = {
      favoriteColor: favoriteColor,
      lastLogin: new Date().toISOString()
    };
    return this.users[username];
  }

  // Set current user
  setCurrentUser(username) {
    if (this.users[username]) {
      this.currentUser = username;
      return true;
    }
    return false;
  }

  // Get current user's favorite color
  getCurrentUserColor() {
    if (this.currentUser && this.users[this.currentUser]) {
      return this.users[this.currentUser].favoriteColor;
    }
    return '#3498db'; // Default blue
  }

  // Update favorite color for current user
  updateFavoriteColor(color) {
    if (this.currentUser && this.users[this.currentUser]) {
      this.users[this.currentUser].favoriteColor = color;
      return true;
    }
    return false;
  }

  // Get all users
  getAllUsers() {
    return Object.keys(this.users);
  }
}

// Create a singleton instance
const userServiceInstance = new UserService();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = userServiceInstance;
}
