import { Select, useSelect } from 'heroui-native';
import { type FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/ui';

import type { UsageVariant } from '../types';

type Props = {
  data: UsageVariant;
};

export const SelectItem: FC<Props> = ({ data }) => {
  const { value: selectedValue } = useSelect();

  const isSelected = selectedValue?.value === data.value;

  return (
    <Select.Item
      key={data.value}
      value={data.value}
      label={data.label}
      className="gap-3 self-start overflow-hidden rounded-2xl py-3 pr-3 pl-4"
      style={styles.container}
    >
      {isSelected && <View className="absolute inset-0 bg-surface shadow-md" />}
      <Text className="font-medium text-lg text-foreground">{data.label}</Text>
      <Select.ItemIndicator />
    </Select.Item>
  );
};

const styles = StyleSheet.create({
  container: {
    borderCurve: 'continuous',
  },
});
