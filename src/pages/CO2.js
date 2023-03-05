import {
  Button,
  Center,
  createStyles,
  Divider,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { about, sol } from "../utils/CO2data";

const useStyles = createStyles((theme) => ({
  Button: {
    width: "50%",
    alignSelf: "center",
    height: 80,
    borderRadius: 20,
    marginTop: 20,
    backgroundImage: "linear-gradient(to right, #FD008C, #7901FF, #0097FF)",
    opacity: 0.8,
    transitionDuration: "0.3s",
    display: "flex",
    justifyContent: "center",

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
}));

function CO2() {
  const { classes } = useStyles();
  return (
    <>
      <Title order={1}>What is Carbon emission?</Title>
      <Divider />
      <Text sx={{ marginTop: 20, marginBottom: 40, whiteSpace: "pre-line" }}>
        {about}
      </Text>
      <Title order={1}>How do I reduce Carbon emission?</Title>
      <Divider />
      <Text sx={{ marginTop: 20, marginBottom: 40, whiteSpace: "pre-line" }}>
        {sol}
      </Text>
      <Center>
        <a
          href={"https://sankalptaru.org/taxfreetrees/"}
          target="_blank"
          className={classes.Button}
        >
          <Center>
            <Text c={"white"}>Plant a Tree to save our Planet!*</Text>
          </Center>
        </a>
      </Center>
      <Center>
        <Text fz={"xs"} c="dimmed">
          *Note we don't own the linked site and should just be considered as an
          example
        </Text>
      </Center>
    </>
  );
}

export default CO2;
