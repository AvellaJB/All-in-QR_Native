import axios from "axios";
import { API_URL } from "@env";
import env from "../env";

const baseURL = env.API_URL;

const base = axios.create({ baseURL });

const servicesAPI = {
  checkEntrance(id) {
    return base
      .get(`/attendees/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log("errorServicesAPI", err));
  },
};

export default servicesAPI;
