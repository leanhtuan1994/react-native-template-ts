import {
  Divider,
  Select,
  type SelectTriggerRef,
  useSelectAnimation,
  useThemeColor,
} from 'heroui-native';
import React, { type FC, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { KeyboardController } from 'react-native-keyboard-controller';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { withUniwind } from 'uniwind';

import { Text } from '@/components/ui';

const StyleAnimatedView = withUniwind(Animated.View);

type SelectOption = {
  value: string;
  label: string;
};

const US_STATES: SelectOption[] = [
  { value: 'CA', label: 'California' },
  { value: 'NY', label: 'New York' },
  { value: 'TX', label: 'Texas' },
  { value: 'FL', label: 'Florida' },
  { value: 'IL', label: 'Illinois' },
];

const AnimatedTextInputBorder: FC = () => {
  const { progress } = useSelectAnimation();

  const rContainerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1, 2], [0, 1, 0]);
    return {
      opacity,
    };
  });

  return (
    <StyleAnimatedView
      style={[rContainerStyle, styles.focusRing]}
      className="pointer-events-none absolute -inset-1 rounded-[19px] border-2 border-accent"
    />
  );
};

export function SearchableSelect() {
  const [value, setValue] = useState<SelectOption | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const themeColorMuted = useThemeColor('muted');

  const triggerRef = useRef<SelectTriggerRef>(null);

  return (
    <Select
      value={value}
      onValueChange={(newValue) => {
        setValue(newValue);
        setSearchQuery('');
      }}
      defaultValue={US_STATES[1]}
    >
      <Select.Trigger ref={triggerRef}>
        <AnimatedTextInputBorder />
        <TextInput
          value={isFocused ? searchQuery : searchQuery || value?.label}
          onChangeText={setSearchQuery}
          placeholder={
            isFocused ? (value?.label ?? 'Search state...') : 'Search state...'
          }
          placeholderTextColor={themeColorMuted}
          className="h-[48px] w-[256px] flex-row items-center rounded-2xl bg-surface px-3 text-base/5 text-foreground shadow-md shadow-black/5"
          onFocus={() => {
            setIsFocused(true);
            triggerRef.current?.open();
          }}
          onBlur={() => {
            setIsFocused(false);
            triggerRef.current?.close();
          }}
          selectionColor={isFocused ? themeColorMuted : 'transparent'}
        />
      </Select.Trigger>
      <Select.Portal>
        <Select.Overlay
          className="bg-transparent"
          onPress={() => KeyboardController.dismiss()}
        />
        <Select.Content width="trigger">
          {US_STATES.filter((state) =>
            state.label.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((state, index, filteredArray) => (
            <React.Fragment key={state.value}>
              <Select.Item
                value={state.value}
                label={state.label}
                onPress={() => KeyboardController.dismiss()}
              />
              {index < filteredArray.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          {US_STATES.filter((state) =>
            state.label.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 && (
            <View className="items-center py-6">
              <Text className="text-muted">No states found</Text>
            </View>
          )}
        </Select.Content>
      </Select.Portal>
    </Select>
  );
}

const styles = StyleSheet.create({
  focusRing: {
    borderCurve: 'continuous',
  },
});
