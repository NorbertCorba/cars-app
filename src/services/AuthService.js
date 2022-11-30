import { httpService } from "./HttpService";

class AuthService {
  constructor() {
    this.axiosInstance = httpService.axiosInstance;
    this.setAxiosAuthorizationHeader();
  }

  setAxiosAuthorizationHeader(tokenParam = null) {
    let token = tokenParam ? tokenParam : localStorage.getItem("token");

    if (token) {
      this.axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }

  async register(data) {
    let response = await httpService.axiosInstance.post("/register", data);
    if (response.data) {
      localStorage.removeItem("token");
      console.log(response);
      localStorage.setItem("token", response.data.authorization.token);
      this.setAxiosAuthorizationHeader(response.data.authorization.token);
      return response;
    }
  }

  async login(data) {
    const response = await this.axiosInstance.post("/login", data);
    localStorage.setItem("token", response.data.authorization.token);
    this.setAxiosAuthorizationHeader(response.data.authorization.token);

    return response;
  }

  async logout() {
    let response = await httpService.axiosInstance.post("/logout");
    if (response.data) {
      localStorage.removeItem("token");

    }
  }
  async refresh() {
    const response = await this.axiosInstance.post("/refresh");
    localStorage.setItem("token", response.data.authorization.token);
    this.setAxiosAuthorizationHeader(response.data.authorization.token);

    return response;
  }
}

export const authService = new AuthService();
