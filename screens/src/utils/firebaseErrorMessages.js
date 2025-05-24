// src/utils/firebaseErrorMessages.js
export function getAuthErrorMessage(errorCode) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "The password is too weak. Use at least 6 characters.";
    case "auth/missing-password":
      return "Please enter a password.";
    default:
      return "An error occurred. Please try again.";
  }
}