import axios from "axios";
import { API_URL } from "@env";

const baseURL = API_URL;

const base = axios.create({ baseURL });

const servicesAPI = {};

export default servicesAPI;
