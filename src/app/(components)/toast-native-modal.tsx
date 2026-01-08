import { Button, useThemeColor, useToast } from 'heroui-native';
import { View } from 'react-native';

import { Logo } from '@/components/logo';

export default function ToastNativeModalScreen() {
  const { toast } = useToast();

  const themeColorForeground = useThemeColor('foreground');

  return (
    <View className="items-center justify-center gap-5 px-5 pt-40">
      <Button
        variant="secondary"
        className="self-center"
        onPress={() => {
          toast.show({
            variant: 'default',
            label: 'Join a team',
            description:
              'Junior Garcia sent you an invitation to join HeroUI team!',
            icon: (
              <View className="mt-0.5">
                <Logo
                  themeColorForeground={themeColorForeground}
                  width={15}
                  height={20.77}
                />
              </View>
            ),
            actionLabel: 'Close',
            onActionPress: ({ hide }) => hide(),
          });
        }}
      >
        Show toast
      </Button>
      <Button onPress={() => toast.hide('all')} variant="danger-soft">
        Hide toast
      </Button>
    </View>
  );
}
