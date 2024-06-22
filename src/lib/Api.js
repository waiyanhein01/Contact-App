import axios from "axios";
import { API_ENDPOINT } from "./constant";

export const Api = axios.create({
    baseURL: API_ENDPOINT
})