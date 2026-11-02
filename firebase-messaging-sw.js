importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");
importScripts("/config.js");   // ← Ye config.js load karta hai

firebase.initializeApp(FIREBASE_WEB_CONFIG);   // ← Yaha use hota hai

var messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  var title = (payload.notification && payload.notification.title) || "CRM Notification";
  var body = (payload.notification && payload.notification.body) || "";

  self.registration.showNotification(title, {
    body: body,
    data: payload.data || {}
  });
});