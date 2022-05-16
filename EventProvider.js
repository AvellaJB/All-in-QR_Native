import { createContext, useState } from "react";

export const EventContext = createContext();

export default function EventProvider({ children }) {
  const [event, setEvent] = useState({});
  const [activities, setActivities] = useState([]);
  const [currentActivitie, setCurrentActivitie] = useState();

  const value = {
    event,
    setEvent,
    activities,
    setActivities,
    currentActivitie,
    setCurrentActivitie,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}
