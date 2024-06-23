self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : { title: 'Default title', body: 'Default body' };
  
  const options = {
    body: data.body,
    icon: 'icon.png' // Optional, path to your icon
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
