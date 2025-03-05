import axios from "axios";

class APIService {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  async postData(endpoint, data) {
    try {
      const response = await this.axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
        console.error("error posting data:", error);
      }
    }
  }
export default APIService;
