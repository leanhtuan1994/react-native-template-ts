import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SelectButtonTrigger } from '@/components/select/select-button-trigger';

export default function SelectNativeModalScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="items-center px-5 pt-24">
      <SelectButtonTrigger contentOffset={insets.top + 20} />
    </View>
  );
}
