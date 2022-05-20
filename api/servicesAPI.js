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
    return base.get("/events/native/" + id).then((res) => res.data);
  },

  listActivities(id) {
    return base.get(`/activities/native/${id}`).then((res) => res.data);
  },

  updateAttendee(id, body) {
    return base.put(`/attendees/native/${id}`, body);
  },

  listActivitiesByRoleID(body) {
    return base.post(`/activities/byRole`, body);
  },
};

export default servicesAPI;
