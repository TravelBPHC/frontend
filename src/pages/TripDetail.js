import {
  Text,
  createStyles,
  Grid,
  Button,
  Card,
  CardSection,
  Title,
} from "@mantine/core";
import axios from "axios";
import dayjs from "dayjs";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomDiv from "../components/CustomDiv";
import useError from "../hooks/useError";
import Error from "../components/Error";

const useStyles = createStyles((theme) => ({
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 28 * 0.85,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 28 * 0.7,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 16,
    },
  },

  wrapper: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
    width: "50%",
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: "60%",
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "70%",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "85%",
    },
  },

  button: {
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

  text: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },

  sidePanel: {
    position: "sticky",
    top: 64,
    display: "flex",
    flexDirection: "column",
    height: window.innerHeight * 0.8,

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      top: 64 * 0.85,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      top: 64 * 0.7,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "none",
    },
  },
}));

function TripDetail() {
  const { classes } = useStyles();
  let navigate = useNavigate();
  const [post, setPost] = React.useState(null);
  const { id } = useParams();
  const [errorOpen, setErrorOpen, errorMessage, setErrorMessage] = useError();

  React.useEffect(() => {
    getPost();
  }, []);

  const getPost = React.useCallback(async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/api/trip/${id}`,
        {
          headers: { Authorization: localStorage.getItem("SavedToken") },
        }
      );
      setPost(data.data);
    } catch (error) {
      if (typeof error === "object") setErrorMessage(error.message);
      else setErrorMessage(error);
      setErrorOpen(true);
    }
  }, [post]);

  if (post) {
    navigate("/create-post", {
      state: {
        flag: true,
        data: post,
      },
    });
  }
  return (
    <Error
      errorOpen={errorOpen}
      setErrorOpen={setErrorOpen}
      isUser={false}
      error={errorMessage}
    />
  );
}

export default TripDetail;
