import React from "react";
import { useWindowDimensions } from "react-native";
import { Text } from "react-native-elements";
import Animated, { Easing } from "react-native-reanimated";
import { Colors, FontSize, FontWeight } from "styles";
import { GlobalStyles, LayoutPadding } from "styles/theme";

export type Nullable<T> = T | null | undefined;

export type Notification = {
  title?: string;
  subtitle: string;
};

type Props = {
  notification?: Notification;
  onRemove(): void;
  offsetBottom?: number;
};

const easing = Easing.inOut(Easing.sin);

export const NotificationItem: React.FC<Props> = ({
  notification,
  onRemove,
  offsetBottom = 16,
}) => {
  const animationValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (!notification) {
      return;
    }

    const showConfig = { toValue: 1, easing, duration: 250 };
    const delayConfig = { toValue: 1, easing, duration: 1000 };
    const hideConfig = { toValue: 0, easing, duration: 250 };

    let anim: Nullable<Animated.BackwardCompatibleWrapper> = Animated.timing(
      animationValue,
      showConfig,
    );

    anim.start((show) => {
      if (!show.finished) {
        return;
      }

      anim = Animated.timing(animationValue, delayConfig);
      anim.start((delay) => {
        if (!delay.finished) {
          return;
        }

        anim = Animated.timing(animationValue, hideConfig);
        anim.start((hide) => {
          if (!hide.finished) {
            return;
          }
          anim = null;
          onRemove();
        });
      });
    });

    return () => {
      if (anim) {
        anim.stop();
      }
      onRemove();
    };
  }, [animationValue, notification, onRemove]);

  const { width } = useWindowDimensions();

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 0],
  });

  const scale = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: "absolute",
        bottom: offsetBottom,
        left: LayoutPadding.horizontal,
        width: width - LayoutPadding.horizontal * 2,
        padding: 12,
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: Colors.Black,
        transform: [
          {
            translateY,
          },
          {
            scale,
          },
        ],
        opacity: animationValue,
      }}>
      <Text
        style={GlobalStyles.font({
          fontSize: FontSize.Small,
          color: Colors.Secondary,
          fontWeight: FontWeight.SemiBold,
        })}>
        {notification ? notification.title : ""}
      </Text>
      <Text
        style={GlobalStyles.font({
          color: Colors.White,
          fontWeight: FontWeight.SemiBold,
        })}>
        {notification ? notification.subtitle : ""}
      </Text>
    </Animated.View>
  );
};
