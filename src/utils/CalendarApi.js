import axios from "axios";
import refreshToken from "./refreshToken";

let headersList = {
  Authorization: localStorage.getItem("accessToken"),
};

const addEvent = async ({ eventData }) => {
  if (localStorage.getItem("expires_at") < Date.now()) {
    await refreshToken();
  }
  let reqOptions = {
    url: "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    method: "POST",
    headers: headersList,
    data: JSON.stringify(eventData),
  };

  let response = await axios.request(reqOptions);

  console.log(response);
};

export default addEvent;
