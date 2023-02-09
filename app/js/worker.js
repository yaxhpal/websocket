function firePingEvent() {
  wsInterval = setInterval("firePingEvent()", 40000);
  postMessage("ping");
}
firePingEvent();