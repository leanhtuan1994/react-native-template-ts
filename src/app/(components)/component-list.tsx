import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { Accordion } from 'heroui-native';
import React from 'react';
import { Platform, View } from 'react-native';
import { withUniwind } from 'uniwind';

import { ScreenScrollView } from '@/components/screen-scroll-view';
import { Text } from '@/components/ui';

const StyledIonicons = withUniwind(Ionicons);

type Component = {
  title: string;
  path: string;
};

const components: Component[] = [
  {
    title: 'Accordion',
    path: 'accordion',
  },
  {
    title: 'Avatar',
    path: 'avatar',
  },
  {
    title: 'Bottom Sheet',
    path: 'bottom-sheet',
  },
  {
    title: 'Button',
    path: 'button',
  },
  {
    title: 'Card',
    path: 'card',
  },
  {
    title: 'Checkbox',
    path: 'checkbox',
  },
  {
    title: 'Chip',
    path: 'chip',
  },
  {
    title: 'Dialog',
    path: 'dialog',
  },
  {
    title: 'Dialog Native Modal',
    path: 'dialog-native-modal',
  },
  {
    title: 'Divider',
    path: 'divider',
  },
  {
    title: 'Error View',
    path: 'error-view',
  },
  {
    title: 'Form Field',
    path: 'form-field',
  },
  {
    title: 'Popover Native Modal',
    path: 'popover-native-modal',
  },
  {
    title: 'Popover',
    path: 'popover',
  },
  {
    title: 'Pressable Feedback',
    path: 'pressable-feedback',
  },
  {
    title: 'Radio Group',
    path: 'radio-group',
  },
  {
    title: 'Scroll Shadow',
    path: 'scroll-shadow',
  },
  {
    title: 'Select Native Modal',
    path: 'select-native-modal',
  },
  {
    title: 'Select',
    path: 'select',
  },
  {
    title: 'Skeleton',
    path: 'skeleton',
  },
  {
    title: 'Spinner',
    path: 'spinner',
  },
  {
    title: 'Surface',
    path: 'surface',
  },
  {
    title: 'Switch',
    path: 'switch',
  },
  {
    title: 'Tabs',
    path: 'tabs',
  },
  {
    title: 'Text Field',
    path: 'text-field',
  },
  {
    title: 'Toast Native Modal',
    path: 'toast-native-modal',
  },
  {
    title: 'Toast',
    path: 'toast',
  },
];

const RootComponent: React.FC = () => {
  const router = useRouter();

  return (
    <ScreenScrollView contentContainerClassName="px-4">
      <View className="h-5" />
      <Accordion isCollapsible={false} variant="surface">
        {components.map((item) => (
          <Accordion.Item key={item.title} value={item.title}>
            <Accordion.Trigger
              onPress={() => {
                if (Platform.OS === 'ios') {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }
                router.push(`/(components)/${item.path}`);
              }}
            >
              <Text className="ml-1 text-base text-foreground">
                {item.title}
              </Text>
              <Accordion.Indicator>
                <StyledIonicons
                  name="chevron-forward"
                  size={16}
                  className="text-muted"
                />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Item>
        ))}
      </Accordion>
    </ScreenScrollView>
  );
};

export default RootComponent;
