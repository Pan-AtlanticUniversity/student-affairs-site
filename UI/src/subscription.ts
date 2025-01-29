const vapid_key = import.meta.env.VITE_PUBLIC_VAPID_KEY;

const subscribeToPushNotifications = async () => {
  try {
    // Check if the browser supports the Push API
    if (!("PushManager" in window)) {
      console.error("Push notifications are not supported in this browser.");
      return;
    }

    // Request permission to show notifications
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.error("Notification permission not granted.");
      return;
    }

    // Subscribe the user to push notifications
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(vapid_key),
    });

    // Send the subscription information to your server
    await fetch("api/v1/notifications/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscription),
    });

    console.log("Subscribed to push notifications successfully!");
  } catch (error) {
    console.error("Error subscribing to push notifications:", error);
  }
};

// Utility function to convert a base64 string to a Uint8Array
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export default subscribeToPushNotifications;
