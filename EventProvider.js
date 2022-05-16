import { createContext, useState } from "react";
import axios from "axios";

import env from "./env";

const baseURL = env.API_URL;

const base = axios.create({ baseURL });

export const EventContext = createContext();

export default function EventProvider({ children }) {
  const [event, setEvent] = useState({});

  const value = { event, setEvent };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}
