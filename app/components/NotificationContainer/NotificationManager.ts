import { EventEmitter } from "events";

import { Notification } from "./NotificationItem";

const Constants = {
  CHANGE: "change",
};

class NotificationManager extends EventEmitter {
  create(notify: Notification) {
    this.emit(Constants.CHANGE, notify);
  }

  addChangeListener(callback: (notify: Notification | undefined) => void) {
    this.addListener(Constants.CHANGE, callback);
  }

  removeChangeListener(callback: (notify: Notification | undefined) => void) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

const ins = new NotificationManager();

export default ins;
