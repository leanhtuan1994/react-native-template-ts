import { Ionicons } from '@expo/vector-icons';
import { Button, Popover } from 'heroui-native';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { withUniwind } from 'uniwind';

import { Text } from '@/components/ui';

const StyledIonicons = withUniwind(Ionicons);

export default function PopoverNativeModalScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="px-5 pt-24">
      <Popover>
        <Popover.Trigger asChild>
          <Button variant="secondary" className="self-center">
            Did you know?
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Overlay />
          <Popover.Content
            width={320}
            offset={insets.top + 20}
            className="gap-3 px-6 py-5"
          >
            <Popover.Close className="absolute top-4 right-4 z-50" />
            <View className="mb-1 flex-row items-center gap-3">
              <View className="size-12 items-center justify-center rounded-full bg-warning/15">
                <StyledIonicons
                  name="rocket"
                  size={26}
                  className="text-warning"
                />
              </View>
              <View className="flex-1">
                <Popover.Title>Fun Fact!</Popover.Title>
              </View>
            </View>
            <Popover.Description className="text-sm">
              The first computer bug was an actual moth found trapped in a
              Harvard Mark II computer in 1947. Grace Hopper taped it to the log
              book with the note &quot;First actual case of bug being
              found.&quot;
            </Popover.Description>
            <View className="mt-2 flex-row items-center gap-2 border-t border-border pt-2">
              <StyledIonicons
                name="sparkles"
                size={14}
                className="text-accent"
              />
              <Text className="text-xs text-muted">Tech History</Text>
            </View>
          </Popover.Content>
        </Popover.Portal>
      </Popover>
    </View>
  );
}
