import axios from "axios";

const refreshToken = async () => {
  const result = await axios.post("https://oauth2.googleapis.com/token", {
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
    client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    grant_type: "refresh_token",
    refresh_token: localStorage.getItem("refreshToken"),
  });
  console.log(result);
  localStorage.setItem("accessToken", "Bearer " + result.data.access_token);
  localStorage.setItem(
    "expires_at",
    Date.now() + (result.data.expires_in - 30) * 1000
  );
};

export default refreshToken;
