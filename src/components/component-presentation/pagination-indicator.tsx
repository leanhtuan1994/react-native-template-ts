import React from 'react';
import { View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { withUniwind } from 'uniwind';

import { Text } from '@/components/ui';

const StyleAnimatedView = withUniwind(Animated.View);

export type PaginationIndicatorProps = {
  index: number;
  label: string;
  scrollY: SharedValue<number>;
  itemSize: number;
};

export function PaginationIndicator({
  index,
  scrollY,
  itemSize,
  label,
}: PaginationIndicatorProps) {
  const rBarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.get() / itemSize,
        [index - 2, index - 1, index, index + 1, index + 2],
        [0.2, 0.5, 1, 0.5, 0.2],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          scaleX: interpolate(
            scrollY.get() / itemSize,
            [index - 2, index - 1, index, index + 1, index + 2],
            [1, 1.4, 2, 1.4, 1],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const rLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.get() / itemSize,
        [index - 0.5, index, index + 0.5],
        [0, 1, 0],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateX: interpolate(
            scrollY.get() / itemSize,
            [index - 2, index - 1, index, index + 1, index + 2],
            [1, 1.4, 2, 1.4, 1],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <View className="flex-row items-center">
      <StyleAnimatedView
        className="h-[2px] w-3 bg-foreground"
        style={[
          {
            transformOrigin: ['0%', '50%', 0],
          },
          rBarStyle,
        ]}
      />
      <StyleAnimatedView className="absolute left-8" style={rLabelStyle}>
        <Text className="font-normal text-lg text-foreground">{label}</Text>
      </StyleAnimatedView>
    </View>
  );
}
