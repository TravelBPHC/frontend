import { Button, Modal, Table, Text } from "@mantine/core";
import React from "react";
import busData from "./busData";

function Bus({ opened, setOpened }) {
  const rows = busData.map((element) => (
    <tr key={element.name}>
      <td>{element.route}</td>
      <td>{element.route_id}</td>
      <td>{element.origin_destination}</td>
      <td>
        <a
          target={"_blank"}
          href={`http://hyderabadbusroutes.in/bus-info/${element.route}`}
        >
          Click here
        </a>
      </td>
    </tr>
  ));
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Bus Schedule in Telangana, IN"
      size={"60%"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 5000,
      }}
    >
      <Table>
        <thead>
          <tr>
            <th>Route</th>
            <th>Route ID</th>
            <th>Source-Destination</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Button>Got it!</Button>
    </Modal>
  );
}

export default Bus;
