import client from "../client";

function subscribeNotifications(deviceId: string) {
  return (
    client("accounts")
      .remoteMethod("notifications/subscribe")
      // .filter({
      //   include: ["account", "location", "discoveryOptions", "pets"],
      //   count: ["followers"],
      // })
      .data({ deviceId })
      .post()
  );
}

export default {
  subscribeNotifications,
};
