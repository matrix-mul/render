import axios from "axios"
const instance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 2000,
    headers: {
        "Content-Type": "application/json"
    },
})
instance.defaults.maxContentLength = 10 * 1024 * 1024;
instance.defaults.maxBodyLength = 10 * 1024 * 1024;

export default instance;