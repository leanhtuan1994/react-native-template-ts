import { LinearGradient } from 'expo-linear-gradient';
import { Button, cn, ScrollShadow, Select, useThemeColor } from 'heroui-native';
import { useState } from 'react';
import { TextInput, useWindowDimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  KeyboardAvoidingView,
  KeyboardController,
} from 'react-native-keyboard-controller';
import { Easing } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '@/components/ui';
import { useAppTheme } from '@/lib/contexts/app-theme-context';

import { SelectBlurBackdrop } from './select-blur-backdrop';

KeyboardController.preload();

type CountryOption = {
  value: string;
  label: string;
  flag: string;
  code: string;
};

const COUNTRIES: CountryOption[] = [
  { value: 'US', label: 'United States', flag: '🇺🇸', code: '+1' },
  { value: 'GB', label: 'United Kingdom', flag: '🇬🇧', code: '+44' },
  { value: 'CA', label: 'Canada', flag: '🇨🇦', code: '+1' },
  { value: 'AU', label: 'Australia', flag: '🇦🇺', code: '+61' },
  { value: 'DE', label: 'Germany', flag: '🇩🇪', code: '+49' },
  { value: 'FR', label: 'France', flag: '🇫🇷', code: '+33' },
  { value: 'JP', label: 'Japan', flag: '🇯🇵', code: '+81' },
  { value: 'CN', label: 'China', flag: '🇨🇳', code: '+86' },
  { value: 'IN', label: 'India', flag: '🇮🇳', code: '+91' },
  { value: 'BR', label: 'Brazil', flag: '🇧🇷', code: '+55' },
];

export function SearchableDialogSelect() {
  const [value, setValue] = useState<CountryOption | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  const { isDark } = useAppTheme();

  const [themeColorMuted, themeColorOverlay, themeColorSurface] = useThemeColor(
    ['muted', 'overlay', 'surface']
  );

  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const insetTop = insets.top + 12;
  const maxDialogHeight = (height - insetTop) / 2;

  const filteredCountries = COUNTRIES.filter((country) =>
    country.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Select
      value={value}
      onValueChange={(newValue) => {
        const country = COUNTRIES.find((c) => c.value === newValue?.value);
        setValue(country);
        setSearchQuery('');
      }}
      closeDelay={300}
      animation={{
        exiting: {
          type: 'timing',
          config: {
            duration: 250,
            easing: Easing.out(Easing.quad),
          },
        },
      }}
    >
      <Select.Trigger asChild>
        <Button variant="tertiary">
          {value ? (
            <View className="flex-row items-center gap-2">
              <Text className="text-base">{value.flag}</Text>
              <Text className="font-medium text-sm text-accent">
                {value.code}
              </Text>
            </View>
          ) : (
            <Text className="text-accent">Dialog</Text>
          )}
        </Button>
      </Select.Trigger>
      <Select.Portal>
        <SelectBlurBackdrop />
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={24}>
          <Select.Content
            classNames={{
              content: cn('gap-2 rounded-3xl', isDark && 'bg-surface'),
            }}
            style={{ marginTop: insetTop, height: maxDialogHeight }}
            presentation="dialog"
          >
            <View className="mb-2 flex-row items-center justify-between">
              <Select.ListLabel>Country</Select.ListLabel>
              <Select.Close />
            </View>
            <View className="mb-2 w-full">
              <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search country..."
                placeholderTextColor={themeColorMuted}
                className="rounded-xl bg-surface-secondary/80 p-3 text-foreground"
                autoFocus
              />
            </View>
            <ScrollShadow
              className="flex-1"
              LinearGradientComponent={LinearGradient}
              color={isDark ? themeColorSurface : themeColorOverlay}
            >
              <ScrollView keyboardShouldPersistTaps="handled">
                {filteredCountries.map((country) => (
                  <Select.Item
                    key={country.value}
                    value={country.value}
                    label={country.label}
                    onPress={() => KeyboardController.dismiss()}
                  >
                    <View className="flex-1 flex-row items-center gap-3">
                      <Text className="text-2xl">{country.flag}</Text>
                      <Text className="w-10 text-sm text-muted">
                        {country.code}
                      </Text>
                      <Text className="flex-1 text-base text-foreground">
                        {country.label}
                      </Text>
                    </View>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
                {filteredCountries.length === 0 && (
                  <Text className="mt-8 text-center text-muted">
                    No countries found
                  </Text>
                )}
              </ScrollView>
            </ScrollShadow>
          </Select.Content>
        </KeyboardAvoidingView>
      </Select.Portal>
    </Select>
  );
}
