//////////////////////////////////////////////////////////
//push notifications

if (!('Notification' in window)) {
  console.log('This browser does not support notifications!');
  //return;
}

Notification.requestPermission(status => {
  console.log('Notification permission status:', status);
});

const options = {
  body: 'First notification!',
  icon: 'images/states.jpg',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },

  // TODO 2.5 - add actions to the notification

  // TODO 5.1 - add a tag to the notification

};

if (Notification.permission == 'granted') {
  navigator.serviceWorker.getRegistration().then(reg => {

    // TODO 2.4 - Add 'options' object to configure the notification

    reg.showNotification('Hello world!',options);
  });
}

actions: [
  {action: 'explore', title: 'Go to the site',
    icon: 'images/checkmark.png'},
  {action: 'close', title: 'Close the notification',
    icon: 'images/xmark.png'},
]


