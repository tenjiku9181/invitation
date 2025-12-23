import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://invitation-server-nu.vercel.app/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers["Accept-Language"] = localStorage.getItem("invite-lang") || "en";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            console.log("API Error: " + error.response.data);
        } else {
            console.log("Network Error:" + error.message);
        }

        return Promise.reject(error);
    }
);


export default apiClient;