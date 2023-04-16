import { Dialog, Flex, Modal, Text } from "@mantine/core";
import { IconError404, IconExclamationMark } from "@tabler/icons";
import React from "react";

function Error({ errorOpen, setErrorOpen, error, isUser }) {
  return isUser ? (
    <Modal
      opened={errorOpen}
      withCloseButton
      onClose={() => setErrorOpen(false)}
      size="lg"
      centered
      radius="md"
      position={{ left: 20, bottom: 20 }}
      title={
        <Flex direction={"row"} gap={"xs"}>
          <IconExclamationMark
            style={{ border: "1px solid red", borderRadius: 999 }}
          />
          <Text>Error</Text>
        </Flex>
      }
      styles={{
        header: {
          color: "red",
        },
      }}
    >
      <Text size="sm" color={"red"} style={{ marginBottom: 10 }}>
        {error}
      </Text>
    </Modal>
  ) : (
    <Modal
      opened={errorOpen}
      withCloseButton
      onClose={() => setErrorOpen(false)}
      size="lg"
      centered
      radius="md"
      position={{ left: 20, bottom: 20 }}
      title={
        <Flex direction={"row"} gap={"xs"}>
          <IconExclamationMark
            style={{ border: "1px solid red", borderRadius: 999 }}
          />
          <Text>Something went wrong</Text>
        </Flex>
      }
      styles={{
        header: {
          color: "red",
        },
      }}
    >
      <Text size="md" color={"red"} style={{ marginBottom: 10 }}>
        It's not you, it's us. We're working on it...
      </Text>
      <Text size="sm" color={"red"} style={{ marginBottom: 10 }}>
        ERROR: {error}
      </Text>
    </Modal>
  );
}

export default Error;
