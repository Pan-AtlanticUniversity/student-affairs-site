self.addEventListener('push', function (event) {
  const data = event.data.json(); // Parse the payload
  const options = {
    body: data.body,
    icon: data.icon || '/Logo_of_Pan_Atlantic_University.svg',
    vibrate: data.vibrate || [100, 50, 100],
    data: data.data || {},
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
