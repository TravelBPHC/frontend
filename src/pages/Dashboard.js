import {
  Text,
  createStyles,
  TextInput,
  Button,
  Avatar,
  Grid,
  Divider,
  Dialog,
  Loader,
  Center,
  Collapse,
  Flex,
  Switch,
} from "@mantine/core";
import React from "react";
import {
  IconLock,
  IconEdit,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons";
import axios from "axios";
import CustomDiv from "../components/CustomDiv";
import { useMediaQuery } from "@mantine/hooks";
import { UserContext } from "../utils/Context";
import useError from "../hooks/useError";
import Error from "../components/Error";
import { register, askPermission } from "../serviceWorkerRegistration";

const useStyles = createStyles((theme) => ({
  Title: {
    fontSize: 36,

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 36 * 0.85,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 36 * 0.7,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 20,
      textAlign: "left",
    },
  },
  pageTitle: {
    fontSize: 28,
    textAlign: "center",
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
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: "50%",
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "65%",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "95%",
    },
  },

  account: {
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      marginLeft: 0,
      marginRight: "auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
    },
  },

  accountButton: {
    display: "none",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      display: "block",
      marginRight: 0,
      marginLeft: "auto",
      fontSize: 14,
    },
  },

  profile: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      flexDirection: "row",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column",
    },
  },

  form: {
    width: "100%",
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "80%",
      marginRight: 0,
      marginLeft: "auto",
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  avatar: {
    marginTop: 30,
    height: 216,
    width: 216,
    borderRadius: 999,
    marginLeft: "auto",
    marginRight: "auto",
  },

  button: {
    // width: "20%",
    marginLeft: 20,
    // transform: "translateX(-50%)",
    // marginTop: 20,
    height: 40,
    borderRadius: 20,
    marginTop: 40,
    opacity: 0.8,
    transitionDuration: "0.3s",

    "&:hover": {
      opacity: 1,
    },

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      height: 60,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      height: 50,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 45,
    },
  },
}));

const updateServiceWorker = (workerRegistration) => {
  const registrationWaiting = workerRegistration.waiting;

  if (registrationWaiting) {
    registrationWaiting.postMessage({ type: "SKIP_WAITING" });

    registrationWaiting.addEventListener("statechange", (e) => {
      if (e.target.state === "activated") {
        window.location.reload();
      }
    });
  }
};

function Dashboard() {
  const { userDetail, upcomingTrips } = React.useContext(UserContext);
  const { classes } = useStyles();
  const [phone, setPhone] = React.useState(userDetail?.phone);
  const [error, setError] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [accountToggle, setAccountToggle] = React.useState(false);
  const [errorMessage, setErrorMessage, errorOpen, setErrorOpen] = useError();

  const subscribeNotifs = async () => {
    if (Notification.permission !== "granted") await askPermission();

    register({
      onUpdate: (registration) => {
        updateServiceWorker(registration);
      },
    });
  };

  const unsubscribeNotifs = async () => {
    try {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_ROOT_URL}/user/unsubscribe`,
        headers: { Authorization: localStorage.getItem("SavedToken") },
      });
    } catch (error) {
      if (typeof error === "object") setErrorMessage(error.message);
      else setErrorMessage(error);
      setErrorOpen(true);
    }
  };

  const Phone = async () => {
    try {
      if (/^[1-9][0-9]{9}$/.test(phone)) {
        setError(false);
        await axios({
          method: "patch",
          url: `${process.env.REACT_APP_ROOT_URL}/user/phone`,
          headers: { Authorization: localStorage.getItem("SavedToken") },
          data: {
            phone: phone,
          },
        });

        setOpened(true);
        setTimeout(() => {
          setOpened(false);
        }, 3000);
      } else {
        setError(true);
      }
    } catch (error) {
      if (typeof error === "object") setErrorMessage(error.message);
      else setErrorMessage(error);
      setErrorOpen(true);
    }
  };

  const pageLoaded = React.useCallback(
    (response) => {
      register({
        onUpdate: (registration) => {
          updateServiceWorker(registration);
        },
      });
      setPageLoading(false);
    },
    [pageLoading, upcomingTrips, userDetail]
  );

  if (pageLoading && upcomingTrips && userDetail) {
    pageLoaded();
  }

  const largeScreen = useMediaQuery("(min-width: 800px)");

  return !pageLoading ? (
    <>
      <Grid gutter="xl" columns={15}>
        <Grid.Col sm={15} lg={4} className={classes.wrapper}>
          <div className={classes.account}>
            <div style={{ display: "inline-block" }}>
              <Text
                className={classes.Title}
                variant="gradient"
                gradient={{ from: "blue.5", to: "pink.7", deg: 0 }}
              >
                Hi, he {userDetail?.name}!
              </Text>
            </div>
            <Text
              className={classes.accountButton}
              c="dimmed"
              onClick={() => setAccountToggle(!accountToggle)}
            >
              Account info{" "}
              {!accountToggle ? (
                <IconChevronDown size={14} />
              ) : (
                <IconChevronUp size={14} />
              )}
            </Text>
          </div>

          <Collapse
            in={largeScreen ? true : accountToggle}
            className={classes.profile}
          >
            <Avatar className={classes.avatar} src={userDetail?.pfp} />
            <div style={{ width: "100%" }}>
              <TextInput
                className={classes.form}
                label="Name"
                value={userDetail?.name}
                readOnly
                rightSection={<IconLock size={20} />}
              />
              <TextInput
                className={classes.form}
                label="Email"
                value={userDetail?.email}
                readOnly
                rightSection={<IconLock size={20} />}
              />
              <Flex direction={"row"} justify={"center"} align={"center"}>
                <TextInput
                  label="Phone Number"
                  className={classes.form}
                  value={phone || userDetail?.phone}
                  onChange={(event) => setPhone(event.currentTarget.value)}
                  required
                  error={error ? "Invalid Phone" : null}
                  rightSection={<IconEdit size={20} />}
                />

                <Button
                  color={"customDark.0"}
                  variant="outline"
                  className={classes.button}
                  onClick={() => Phone()}
                  disabled={userDetail?.phone != phone ? false : true}
                  type="submit"
                >
                  Update
                </Button>
              </Flex>
              <Switch
                label="Notifications"
                defaultChecked={userDetail.get_notifs}
                onChange={(event) =>
                  event.currentTarget.checked === true
                    ? subscribeNotifs()
                    : unsubscribeNotifs()
                }
              />

              <Dialog
                withCloseButton={false}
                opened={opened}
                onClose={() => setOpened(false)}
                position={{ bottom: 20, right: 100 }}
              >
                <Text color={"white"} style={{ textAlign: "center" }}>
                  Phone Number Updated Successfully 👍
                </Text>
              </Dialog>
            </div>
          </Collapse>
        </Grid.Col>
        <Divider
          orientation="vertical"
          style={{ display: largeScreen ? "block" : "none" }}
        />
        <Grid.Col
          sm={7}
          lg={5}
          className={classes.wrapper}
          style={{ marginLeft: largeScreen ? 50 : 0 }}
        >
          <div style={{ display: "inline-block" }}>
            <Text className={classes.pageTitle}>TRIPS</Text>
          </div>
          <CustomDiv
            type={3}
            setErrorMessage={setErrorMessage}
            setErrorOpen={setErrorOpen}
          />
          <CustomDiv
            type={8}
            setErrorMessage={setErrorMessage}
            setErrorOpen={setErrorOpen}
          />
        </Grid.Col>
        <Grid.Col
          sm={8}
          lg={5}
          className={classes.wrapper}
          style={{ marginLeft: largeScreen ? 20 : 0 }}
        >
          <div style={{ display: "inline-block" }}>
            <Text className={classes.pageTitle}>POSTS</Text>
          </div>
          <CustomDiv
            type={2}
            setErrorMessage={setErrorMessage}
            setErrorOpen={setErrorOpen}
          />
          <CustomDiv
            type={9}
            setErrorMessage={setErrorMessage}
            setErrorOpen={setErrorOpen}
          />
        </Grid.Col>
      </Grid>
      <Error
        errorOpen={errorOpen}
        setErrorOpen={setErrorOpen}
        isUser={true}
        error={errorMessage}
      />
    </>
  ) : (
    <Center style={{ width: "100%", height: window.innerHeight - 68 }}>
      <Loader />
    </Center>
  );
}

export default Dashboard;
