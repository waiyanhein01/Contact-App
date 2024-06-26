import axios from "axios";
import { API_ENDPOINT } from "../lib/constant";

export const api = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        Authorization: localStorage.getItem("auth") && `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
    }
})