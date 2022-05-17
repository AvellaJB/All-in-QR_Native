import { createContext, useState } from "react";

export const EventContext = createContext();

export default function EventProvider({ children }) {
  const [event, setEvent] = useState({});
  const [activities, setActivities] = useState([]);
  const [currentActivitie, setCurrentActivitie] = useState();
  const [currentAttendee, setCurrentAttendee] = useState();

  const value = {
    event,
    setEvent,
    activities,
    setActivities,
    currentAttendee,
    currentActivitie,
    setCurrentAttendee,
    setCurrentActivitie,
  };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}
