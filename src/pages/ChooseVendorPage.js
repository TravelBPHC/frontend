import {
  Text,
  createStyles,
  Button,
  Card,
  Grid,
  Modal,
  Accordion,
  Flex,
  Center,
  Divider,
} from "@mantine/core";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import Cabs from "../utils/cabs";
import Autos from "../utils/Auto";
import { UserContext } from "../utils/Context";
import Map from "../components/Map";
import { IconLeaf } from "@tabler/icons";
import Bus from "../utils/Bus";
import { Carousel } from "@mantine/carousel";

const useStyles = createStyles((theme) => ({
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

  pageSubtitle: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 18,
    textAlign: "center",
    color: theme.colors.customDark[1],
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: 18 * 0.85,
      marginTop: 24 * 0.85,
      marginBottom: 24 * 0.85,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      fontSize: 18 * 0.7,
      marginTop: 24 * 0.7,
      marginBottom: 24 * 0.7,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      fontSize: 14,
      marginTop: 16,
      marginBottom: 16,
    },
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: "50%",
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "65%",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "85%",
    },
  },

  vendorGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  vendor: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: "none",
    },
  },

  carousel: {
    display: "none",

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: "block",
    },
  },

  box: {
    height: 70,
    width: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: "50%",
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      width: "65%",
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "85%",
    },

    "&:hover": {
      borderColor: "white",
      borderWidth: 0.7,
      transitionDuration: "0.3s",
    },
  },

  button: {
    width: "30%",
    alignSelf: "center",
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    opacity: 0.8,
    transitionDuration: "0.3s",

    "&:hover": {
      opacity: 1,
    },

    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      height: 35,
      marginTop: 18,
    },
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      height: 30,
      marginTop: 16,
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: 25,
      marginTop: 15,
    },
  },

  confirmButton: {
    width: "50%",
    alignSelf: "center",
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
}));

function ChooseVendorPage() {
  const { upcomingTrips, setUpcomingTrips } = React.useContext(UserContext);
  const { classes } = useStyles();
  const [vendor, setVendor] = React.useState(null);
  const [busModal, setBusModal] = React.useState(false);
  const [vehicle, setVehicle] = React.useState(null);
  const [vehicleId, setVehicleId] = React.useState(null);
  const [seats, setSeats] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  let navigate = useNavigate();
  const { state } = useLocation();

  const Trip = async () => {
    setLoading(true);
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_ROOT_URL}/api/trip/create`,
      headers: { Authorization: localStorage.getItem("SavedToken") },
      data: {
        source: state.source,
        destination: state.destination,
        departure_date: state.departure_date,
        departure_time: state.departure_time,
        waiting_time: state.waiting_time,
        details: state.details,
        passengers: state.passengers,
        vendor: "Cabs",
        car_name: vehicle,
        seats: seats,
        vendor_phone: phone,
      },
    });
    getUpcomingTrips();
    setOpened(true);
    setLoading(false);
  };

  const getUpcomingTrips = React.useCallback(
    async (response) => {
      const data = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/api/trip/upcoming`,
        {
          headers: { Authorization: localStorage.getItem("SavedToken") },
        }
      );
      setUpcomingTrips(data.data);
    },
    [upcomingTrips]
  );

  const [opened, setOpened] = React.useState(false);

  return (
    <>
      <Grid columns={12} gutter={"xl"}>
        <Grid.Col lg={8} className={classes.wrapper}>
          <Text className={classes.pageTitle}>Available Vendors</Text>
          <Button
            sx={{ marginTop: 10, backgroundColor: "green" }}
            onClick={() => setBusModal((busModal) => !busModal)}
          >
            <IconLeaf /> Bus Schedule
          </Button>
          <Bus opened={busModal} setOpened={setBusModal} />
          <Text className={classes.pageSubtitle}>Cabs</Text>
          <div className={classes.vendorGroup}>
            <Accordion variant="contained">
              {Cabs.map((item, id) => (
                <Accordion.Item value={item.name}>
                  <Accordion.Control>
                    {item.name} - {item.phone}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className={classes.vendor}>
                      {item.cars.map((item, id) =>
                        state.noOfMembers <= item.capacity ? (
                          <>
                            <Flex direction={"column"} align="center">
                              <Card
                                className={classes.box}
                                withBorder
                                onClick={() => {
                                  setVehicle(item.name);
                                  setVehicleId(item.id);
                                  setSeats(item.capacity);
                                }}
                                style={{
                                  borderColor:
                                    vehicleId === item.id ? "white" : null,
                                  transitionDuration: "0.3s",
                                }}
                              >
                                <Text>{item.name}</Text>
                                <Text>Capacity: {item.capacity}</Text>
                              </Card>
                            </Flex>
                          </>
                        ) : null
                      )}
                    </div>
                    <Carousel
                      withControls={false}
                      slideSize="33.333333%"
                      breakpoints={[
                        { maxWidth: "lg", slideSize: "33%" },
                        { maxWidth: "sm", slideSize: "40%" },
                        { maxWidth: "xs", slideSize: "70%", slideGap: 0 },
                      ]}
                      className={classes.carousel}
                    >
                      {item.cars.map((item, id) =>
                        state.noOfMembers <= item.capacity ? (
                          <>
                            <Carousel.Slide>
                              <Card
                                className={classes.box}
                                withBorder
                                onClick={() => {
                                  setVehicle(item.name);
                                  setVehicleId(item.id);
                                  setSeats(item.capacity);
                                }}
                                style={{
                                  borderColor:
                                    vehicleId === item.id ? "white" : null,
                                  transitionDuration: "0.3s",
                                }}
                              >
                                <Text>{item.name}</Text>
                                <Text>Capacity: {item.capacity}</Text>
                              </Card>
                            </Carousel.Slide>
                          </>
                        ) : null
                      )}
                    </Carousel>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
            <Text className={classes.pageSubtitle}>Auto Rickshaw</Text>
            <Accordion variant="contained">
              {Autos.map((item, id) => (
                <Accordion.Item value={item.name}>
                  <Accordion.Control>
                    {item.name} - {item.phone}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      onClick={() => {
                        setVehicle(item.name);
                        setSeats(item.capacity);
                      }}
                    >
                      <Text>Capacity: {item.capacity}</Text>
                      <Button variant="outline">Select</Button>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <Flex direction={"column"}>
            <Button
              disabled={vehicle ? false : true}
              className={classes.confirmButton}
              onClick={() => Trip()}
              loading={loading}
            >
              {loading ? null : "Confirm Trip"}
            </Button>
            <Button
              color={"customDark.0"}
              variant="outline"
              className={classes.button}
              onClick={() => navigate(-1)}
            >
              Previous
            </Button>
          </Flex>
        </Grid.Col>
        {/* <Divider orientation="vertical" /> */}
        {/* <Grid.Col span={"auto"}>
          {sourceCoord.length != 0 && destCoord.length != 0 ? (
            <>
              <Map
                sourceCoord={sourceCoord}
                destCoord={destCoord}
                source={state.source}
                dest={state.dest}
                setDist={setDist}
                dist={dist}
              />
            </>
          ) : null}
        </Grid.Col> */}
      </Grid>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Trip confirmed!"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        withCloseButton={false}
      >
        <Text>
          Please contact the vendor to confirm car details and trip status.
        </Text>
        <Button
          sx={{ marginTop: 20, float: "right" }}
          onClick={() => navigate("/upcoming-trips")}
        >
          Got it!
        </Button>
      </Modal>
    </>
  );
}

export default ChooseVendorPage;
