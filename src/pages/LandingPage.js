import {
  Text,
  createStyles,
  Grid,
  Button,
  Header,
  Title,
  BackgroundImage,
  Center,
  Notification,
} from "@mantine/core";
import React from "react";
import BG from "../assets/bg.jpg";
import { useGoogleLogin } from "@react-oauth/google";
import { IconBrandGoogle } from "@tabler/icons";
import { sendSubscriptionToBackEnd } from "../utils/subscription";
import useError from "../hooks/useError";
import Error from "../components/Error";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  Textbox: {
    height: window.innerHeight,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  Title: {
    fontSize: 44,

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 44 * 0.85,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 44 * 0.7,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 28,
    },
  },

  SubTitle: {
    fontSize: 36,
    fontWeight: 300,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36 * 0.85,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 36 * 0.7,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 20,
    },
  },

  ButtonGroup: {
    marginTop: 30,
  },

  Button: {
    width: "100%",
    height: 80,
    borderRadius: 20,
    marginTop: 20,
    backgroundImage: "linear-gradient(to right, #FD008C, #7901FF, #0097FF)",
    opacity: 0.8,
    transitionDuration: "0.3s",

    "&:hover": {
      opacity: 1,
    },

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      height: 70,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      height: 60,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 50,
    },
  },

  BG: {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.4,
    filter: "blur(5px)",
    WebkitFilter: "blur(5px)",
    zIndex: -1,
  },
}));

function LandingPage({ loggedIn, setLoggedIn }) {
  const { classes } = useStyles();
  const [errorOpen, setErrorOpen, errorMessage, setErrorMessage] = useError();

  const googlelogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (TokenResponse) => {
      console.log(TokenResponse);
      try {
        const result = await axios({
          method: "post",
          url: `${process.env.REACT_APP_ROOT_URL}/user/auth`,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: {
            code: TokenResponse.code,
          },
        });
        console.log(result.data);
        let data = result.data;
        console.log("Signed in as: ", data);
        localStorage.setItem("SavedToken", "Bearer " + data.token);
        localStorage.setItem("accessToken", "Bearer " + data.g_access_token);
        localStorage.setItem("refreshToken", data.g_refresh_token);
        localStorage.setItem(
          "expires_at",
          Date.now() + (data.expires_in - 30) * 1000
        );

        setLoggedIn(true);
      } catch (error) {
        setErrorMessage(error.message);
        setErrorOpen(true);
      }
    },
    onError: (error) => {
      setErrorMessage(error);
      setErrorOpen(true);
    },

    // scope: ["https://www.googleapis.com/auth/calendar"],
  });

  React.useEffect(() => {}, [loggedIn]);

  return (
    <>
      <BackgroundImage src={BG} className={classes.BG} />
      <div className={classes.Textbox}>
        <Title order={1} color="#fff" className={classes.Title}>
          Travel@BPHC
        </Title>
        <Title order={2} color="#fff" className={classes.SubTitle}>
          Travelling together was never simpler!
        </Title>
        <Button.Group className={classes.ButtonGroup}>
          <Button onClick={() => googlelogin()} leftIcon={<IconBrandGoogle />}>
            BITS Mail Login
          </Button>
        </Button.Group>
      </div>
      <Error
        errorOpen={errorOpen}
        setErrorOpen={setErrorOpen}
        isUser={false}
        error={errorMessage}
      />
    </>
  );
}

export default LandingPage;
