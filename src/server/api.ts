import axios from "axios";
import * as secureLocalStorage from "expo-secure-store"

const apiLocal = "http://localhost:7043/api/"
export const api = axios.create({
    baseURL: apiLocal
});

api.interceptors.request.use((config) => {
    const token = secureLocalStorage.getItem("Token");

    if (token) {
        config.headers.Authorization = "Bearer" + token;
    }

    return config;
})