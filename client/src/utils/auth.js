// import library to decode token's expiration time
import decode from "jwt-decode";

class AuthService {
  getUser() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // if there is a token that is NOT expired, return true
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // decode token to get its expiration time set by the server
    const decoded = decode(token);

    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    // if token hasn't expired, return false
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
