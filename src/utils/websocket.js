export const websockets = (
  webSocket,
  userDetail,
  setRecievedRequests,
  setSentRequests,
  setPosts
) => {
  // var webSocket = new WebSocket(
  //   "ws://" + "127.0.0.1:8000" + "/ws/notifications/"
  // );

  webSocket.onopen = function (e) {
    console.log("here");
    webSocket.send(
      JSON.stringify({
        message: "Hello, World!",
      })
    );
    console.log("Connection established");
  };

  const not_duplicate = (arr, data) => {
    arr.map((item) => {
      if (item.id === data.message.id) {
        return false;
      }
    });
    return true;
  };

  webSocket.onmessage = function (e) {
    console.log("Message received");
    const data = JSON.parse(e.data);
    if (data?.message?.id != undefined) {
      console.log(data?.message);
      console.log(userDetail?.email);
      if (Object.keys(data?.message).length === 9) {
        if (data.message.reciever.email === userDetail?.email) {
          if (data.message.status === "Rejected") {
            setRecievedRequests((prev) => {
              const list = prev.map((item) => {
                if (item.id === data.message.id) {
                  item.status = "Rejected";
                }
                return item;
              });
              return list;
            });
          } else if (data.message.status === "Accepted") {
            setRecievedRequests((prev) => {
              const list = prev.map((item) => {
                if (item.id === data.message.id) {
                  item.status = "Accepted";
                }
                return item;
              });
              return list;
            });
          } else {
            setRecievedRequests((prev) => [...prev, data.message]);
          }
        }

        if (data.message.sender === userDetail.email) {
          if (data.message.status === "Rejected") {
            setSentRequests((prev) => {
              const list = prev.map((item) => {
                if (item.id === data.message.id) {
                  item.status = "Rejected";
                }
                return item;
              });
              return list;
            });

            setPosts((prev) => {
              const list = prev.map((item) => {
                if (item.id === data.message.id) {
                  if (item.sender === userDetail.email) {
                    item.status = "Rejected";
                  }
                }
                return item;
              });
              return list;
            });
          } else if (data.message.status === "Accepted") {
            setSentRequests((prev) => {
              const list = prev.map((item) => {
                if (item.id === data.message.id) {
                  item.status = "Accepted";
                }
                return item;
              });
              return list;
            });
            setPosts((prev) => {
              const list = prev.map((item) => {
                if (item.id === data.message.id) {
                  if (item.sender === userDetail.email) {
                    item.status = "Accepted";
                  }
                }
                return item;
              });
              return list;
            });
          } else {
            setSentRequests((prev) => [...prev, data.message]);
          }
        }
      }
      if (Object.keys(data?.message).length === 16) {
        setPosts((prev) => [...prev, data.message]);
      }
    }
  };

  webSocket.onclose = function (e) {
    console.error("Chat socket closed unexpectedly");
  };
};
