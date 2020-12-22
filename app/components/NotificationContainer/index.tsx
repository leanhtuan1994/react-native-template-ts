import React from "react";

import { Notification, NotificationItem } from "./NotificationItem";
import NotificationManager from "./NotificationManager";

type Props = {
  offsetBottom?: number;
};

const NotificationContainer: React.FC<Props> = ({ offsetBottom }) => {
  const [notification, setNotification] = React.useState<
    Notification | undefined
  >();

  const removeNotification = React.useCallback(() => {
    console.log("remove notification");
  }, []);

  React.useEffect(() => {
    NotificationManager.addChangeListener(setNotification);
    return () => {
      NotificationManager.removeChangeListener(setNotification);
    };
  }, []);

  return (
    <NotificationItem
      notification={notification}
      onRemove={removeNotification}
      offsetBottom={offsetBottom}
    />
  );
};

export default NotificationContainer;
