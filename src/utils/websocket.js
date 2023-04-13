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
    webSocket.send(
      JSON.stringify({
        message: "Hello, World!",
      })
    );
    console.log("Connection established at ", webSocket.url);
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
    console.log("Message received at ", webSocket?.url);
    const data = JSON.parse(e.data);
    console.log("Message: ", data.message);

    if (data?.message.id != undefined) {
      if (
        webSocket.url ===
          `${process.env.REACT_APP_WEBSOCKET_URL}/trip-created/` &&
        userDetail?.email !== data.message.creator.email
      ) {
        setPosts((prev) => [...prev, data.message]);
      }

      if (
        webSocket.url ===
          `${process.env.REACT_APP_WEBSOCKET_URL}/request-created/` &&
        data?.message.status === "Unconfirmed"
      ) {
        if (data.message.receiver.email === userDetail?.email) {
          setRecievedRequests((prev) => [...prev, data.message]);
        }
        if (data.message.sender.email === userDetail?.email) {
          setSentRequests((prev) => [...prev, data.message]);
          setPosts((prev) => {
            const list = prev.map((item) => {
              let a = data.message?.post_link.split("/");
              if (item.id === parseInt(a[a.length - 1])) {
                item.requests.map((item) => {
                  if (item.requestor_email === userDetail?.email) {
                    item.status = data.message.status;
                  }
                  return item;
                });
              }
              return item;
            });
            return list;
          });
        }
      }
    }

    if (
      webSocket.url ===
        `${process.env.REACT_APP_WEBSOCKET_URL}/request-modified/` &&
      data?.message.status !== "Unconfirmed"
    ) {
      if (data.message.sender.email === userDetail?.email) {
        setSentRequests((prev) => {
          const list = prev.map((item) => {
            if (item.id === data.message.id) {
              item.status = data.message.status;
            }
            return item;
          });
          return list;
        });
        setPosts((prev) => {
          const list = prev.map((item) => {
            let a = data.message?.post_link.split("/");
            if (item.id === parseInt(a[a.length - 1])) {
              item.requests.map((item) => {
                if (item.requestor_email === userDetail?.email) {
                  item.status = data.message.status;
                }
                return item;
              });
            }
            return item;
          });
          return list;
        });
      }
    }
  };

  // webSocket.onmessage = function (e) {
  //   console.log("Message received");
  //   const data = JSON.parse(e.data);
  //   if (data?.message?.id != undefined) {
  //     console.log(data?.message);
  //     console.log(userDetail?.email);
  //     if (Object.keys(data?.message).length === 9) {
  //       if (data.message.reciever.email === userDetail?.email) {
  //         if (data.message.status === "Rejected") {
  //           setRecievedRequests((prev) => {
  //             const list = prev.map((item) => {
  //               if (item.id === data.message.id) {
  //                 item.status = "Rejected";
  //               }
  //               return item;
  //             });
  //             return list;
  //           });
  //         } else if (data.message.status === "Accepted") {
  //           setRecievedRequests((prev) => {
  //             const list = prev.map((item) => {
  //               if (item.id === data.message.id) {
  //                 item.status = "Accepted";
  //               }
  //               return item;
  //             });
  //             return list;
  //           });
  //         } else {
  //           setRecievedRequests((prev) => [...prev, data.message]);
  //         }
  //       }

  //       if (data.message.sender === userDetail.email) {
  //         if (data.message.status === "Rejected") {
  //           setSentRequests((prev) => {
  //             const list = prev.map((item) => {
  //               if (item.id === data.message.id) {
  //                 item.status = "Rejected";
  //               }
  //               return item;
  //             });
  //             return list;
  //           });

  //           setPosts((prev) => {
  //             const list = prev.map((item) => {
  //               if (item.id === data.message.id) {
  //                 if (item.sender === userDetail.email) {
  //                   item.status = "Rejected";
  //                 }
  //               }
  //               return item;
  //             });
  //             return list;
  //           });
  //         } else if (data.message.status === "Accepted") {
  //           setSentRequests((prev) => {
  //             const list = prev.map((item) => {
  //               if (item.id === data.message.id) {
  //                 item.status = "Accepted";
  //               }
  //               return item;
  //             });
  //             return list;
  //           });
  //           setPosts((prev) => {
  //             const list = prev.map((item) => {
  //               if (item.id === data.message.id) {
  //                 if (item.sender === userDetail.email) {
  //                   item.status = "Accepted";
  //                 }
  //               }
  //               return item;
  //             });
  //             return list;
  //           });
  //         } else {
  //           setSentRequests((prev) => [...prev, data.message]);
  //         }
  //       }
  //     }
  //     if (Object.keys(data?.message).length === 16) {
  //       setPosts((prev) => [...prev, data.message]);
  //     }
  //   }
  // };

  webSocket.onclose = function (e) {
    console.error("Chat socket closed unexpectedly at ", webSocket.url);
  };
};
