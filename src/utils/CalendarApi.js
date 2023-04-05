import axios from "axios";
import refreshToken from "./refreshToken";

let headersList = {
  Authorization: localStorage.getItem("accessToken"),
};

const addEvent = async (startTime, endTime, title, id) => {
  if (localStorage.getItem("expires_at") < Date.now()) {
    await refreshToken();
    headersList = {
      Authorization: localStorage.getItem("accessToken"),
    };
  }
  let reqOptions = {
    url: "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    method: "POST",
    headers: headersList,
    data: JSON.stringify({
      start: {
        dateTime: startTime,
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endTime,
        timeZone: "Asia/Kolkata",
      },
      summary: title,
      id: id,
    }),
  };

  let response = await axios.request(reqOptions);

  console.log(response);
};

const checkEvent = async (id) => {
  if (localStorage.getItem("expires_at") < Date.now()) {
    await refreshToken();
    headersList = {
      Authorization: localStorage.getItem("accessToken"),
    };
  }
  let reqOptions = {
    url: `https://www.googleapis.com/calendar/v3/calendars/primary/events/${id}`,
    method: "GET",
    headers: headersList,
  };

  try {
    let response = await axios.request(reqOptions);
    console.log(response.status);
    return true;
  } catch (error) {
    console.log(error.response.status);
    return false;
  }
};

export { addEvent, checkEvent };
