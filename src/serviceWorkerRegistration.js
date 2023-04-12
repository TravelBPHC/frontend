// This optional code is used to register a service worker.
// register() is not called by default.

import { sendSubscriptionToBackEnd } from "./utils/subscription";
import { urlBase64ToUint8Array } from "./utils/urlBase64ToUint8array";

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    console.log("Starting registration ... 1");

    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    if (isLocalhost) {
      // This is running on localhost. Let's check if a service worker still exists or not.
      checkValidServiceWorker(swUrl, config);

      // Add some additional logging to localhost, pointing developers to the
      // service worker/PWA documentation.
      navigator.serviceWorker.ready.then(() => {
        console.log(
          "This web app is being served cache-first by a service " +
            "worker. To learn more, visit https://cra.link/PWA"
        );
      });
    } else {
      // Is not localhost. Just register service worker
      registerValidSW(swUrl, config);
    }
  }
}

function askPermission() {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult !== "granted") {
      throw new Error("We weren't granted permission.");
    }
  });
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then((registration) => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log(
              "New content is available and will be used when all " +
                "tabs for this page are closed. See https://cra.link/PWA."
            );

            // Execute callback
            if (config && config.onUpdate) {
              const waitingServiceWorker = registration.waiting;

              if (waitingServiceWorker) {
                waitingServiceWorker.addEventListener(
                  "statechange",
                  (event) => {
                    if (event.target.state === "activated") {
                      if (
                        window.confirm(
                          "There is a new version of the app ready. Please reload to update."
                        )
                      ) {
                        window.location.reload();
                      }
                    }
                  }
                );
                waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
              }
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log("Content is cached for offline use.");

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };

    askPermission();

    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        `${process.env.REACT_APP_VAPID_KEY}`
      ),
    };
    console.log("Subscribing to push notifs ...");
    // Use serviceWorker.ready so this is only invoked
    // when the service worker is available.
    navigator.serviceWorker.ready
      .then(function (serviceWorkerRegistration) {
        return serviceWorkerRegistration.pushManager.subscribe(
          subscribeOptions
        );
      })
      .then(function (pushSubscription) {
        console.log(
          "Received PushSubscription: ",
          JSON.stringify(pushSubscription)
        );

        localStorage.setItem("subscription", JSON.stringify(pushSubscription));
        console.log("Subscribed to push notifs");
        sendSubscriptionToBackEnd(JSON.stringify(pushSubscription));
      })
      .catch((error) => {
        console.error("Error during service worker registration:", error);
      });
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();

      // if (caches) {
      //   // Service worker cache should be cleared with caches.delete()
      //   caches.keys().then(async (names) => {
      //     await Promise.all(names.map((name) => caches.delete(name)));
      //   });
      // }
    });
  }
}
