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

  getOneEvent(id) {
    return base.get("/events/" + id).then((res) => res.data);
  },

  listActivities(id) {
    return base.get(`/activities/${id}`).then((res) => res.data);
  },
};

export default servicesAPI;
