import axios from "axios";
const url = "http://localhost";
const port = 8080;
const path = "auth/";
const base = `${url}:${port}/${path}`;

class Authentication {
  private setCookie: any;
  constructor() {
    if (!localStorage.getItem("tastlyAuth")) {
      localStorage.setItem("tastlyAuth", JSON.stringify({ accessToken: "", refreshToken: "" }));
    }
  }
  get accessToken() {
    if (localStorage.getItem("tastlyAuth")) {
      let token = JSON.parse(localStorage.getItem("tastlyAuth") as string);
      return token.accessToken;
    } else {
      localStorage.setItem("tastlyAuth", JSON.stringify({ accessToken: "", refreshToken: "" }));
      return "";
    }
  }

  get refreshToken() {
    if (localStorage.getItem("tastlyAuth")) {
      let token = JSON.parse(localStorage.getItem("tastlyAuth") as string);
      return token.refreshToken;
    } else {
      localStorage.setItem("tastlyAuth", JSON.stringify({ accessToken: "", refreshToken: "" }));
      return "";
    }
  }

  set accessToken(newToken: string) {
    if (localStorage.getItem("tastlyAuth")) {
      let token = JSON.parse(localStorage.getItem("tastlyAuth") as string);
      token.accessToken = newToken;
      localStorage.setItem("tastlyAuth", token);
    } else {
      localStorage.setItem("tastlyAuth", JSON.stringify({ accessToken: newToken, refreshToken: "" }));
    }
  }

  set refreshToken(newToken: string) {
    if (localStorage.getItem("tastlyAuth")) {
      let token = JSON.parse(localStorage.getItem("tastlyAuth") as string);
      token.refreshToken = newToken;
      localStorage.setItem("tastlyAuth", token);
    } else {
      localStorage.setItem("tastlyAuth", JSON.stringify({ accessToken: "", refreshToken: newToken }));
    }
  }

  get authHeader() {
    let xAccess = JSON.parse(localStorage.getItem("tastlyAuth")!);
    return { "x-access": xAccess.accessToken };
  }
  async register(user: any, profile: any) {
    console.log("Register User");
    const { username, password, email } = user;
    const { firstName, LastName, bd_year, bd_month, bd_day } = profile;
    let signup = await axios.post(base + "signup", { user, profile });
    this.storeToken(signup.data);
  }
  async post(url: string, body = {}) {
    return axios.post(base + url, body, { headers: this.authHeader });
  }
  async login(user: any) {
    console.log("User Loggin");
    let login = await axios.post(base + "login", user);
    console.log(login);
    this.storeToken(login.data);
    return login;
  }
  async postRefresh() {
    console.log("this.refreshToken");
    try {
      let xAccess = JSON.parse(localStorage.getItem("tastlyAuth")!);
      let token = await axios.post(
        base + "refreshtoken",
        { refreshToken: this.refreshToken },
        { headers: this.authHeader }
      );
      this.storeToken(token);
      return token;
    } catch (err) {
      return false;
    }
  }
  storeToken(token: any) {
    let { accessToken, refreshToken } = token;
    let tastlyJSON = JSON.stringify({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    localStorage.setItem("tastelyAuth", tastlyJSON);
  }
}
export default new Authentication();
