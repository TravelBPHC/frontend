import axios from "axios";

export async function sendSubscriptionToBackEnd(subscription) {
  console.log(subscription);
  try {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_ROOT_URL}/user/subscribe`,
      headers: { Authorization: localStorage.getItem("SavedToken") },
      data: JSON.parse(subscription),
    });

    console.log("sendSubscriptionToBackEnd response", response);
  } catch (error) {
    console.log("error in sendSubscriptionToBackEnd", error);
  }
}
