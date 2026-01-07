import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Card, PressableFeedback } from 'heroui-native';
import { StyleSheet, View } from 'react-native';

import type { UsageVariant } from '@/components/component-presentation/types';
import { UsageVariantFlatList } from '@/components/component-presentation/usage-variant-flatlist';
import { Text } from '@/components/ui';

const BackgroundImageCardContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <PressableFeedback className="aspect-square w-full rounded-3xl">
        <Card className="flex-1">
          <Image
            source={{
              uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg',
            }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.4)']}
            style={StyleSheet.absoluteFill}
          />
          <PressableFeedback.Ripple
            animation={{
              backgroundColor: { value: 'white' },
              opacity: { value: [0, 0.3, 0] },
            }}
          />
          <View className="flex-1 gap-4" pointerEvents="box-none">
            <Card.Body className="flex-1" pointerEvents="none">
              <Card.Title className="mb-0.5 text-base text-zinc-50 uppercase">
                Neo
              </Card.Title>
              <Card.Description className="font-medium text-base text-zinc-50">
                Home robot
              </Card.Description>
            </Card.Body>
            <Card.Footer className="gap-3">
              <View className="flex-row items-center justify-between">
                <View pointerEvents="none">
                  <Text className="text-base text-white">Available soon</Text>
                  <Text className="text-base text-zinc-300">Get notified</Text>
                </View>

                <Button
                  size="sm"
                  className="bg-white"
                  pressableFeedbackVariant="none"
                  onPress={() => {}}
                >
                  <Button.Label className="text-black">Notify me</Button.Label>
                </Button>
              </View>
            </Card.Footer>
          </View>
        </Card>
      </PressableFeedback>
    </View>
  );
};

// ------------------------------------------------------------------------------

const CardWithImageContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="flex-row gap-4">
        <PressableFeedback className="aspect-[1/1.3] flex-1 rounded-3xl">
          <Card className="flex-1">
            <View className="flex-1 gap-4">
              <Card.Header>
                <Image
                  source={{
                    uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg',
                  }}
                  style={{
                    height: 60,
                    aspectRatio: 1,
                    borderRadius: 14,
                  }}
                />
              </Card.Header>
              <Card.Body className="flex-1">
                <Card.Title>Indie Hackers</Card.Title>
                <Card.Description className="text-sm">
                  148 members
                </Card.Description>
              </Card.Body>
              <Card.Footer className="flex-row items-center gap-2">
                <View className="size-3 rounded-full bg-rose-400" />
                <Text className="font-medium text-sm text-foreground">
                  @indiehackers
                </Text>
              </Card.Footer>
            </View>
          </Card>
          <PressableFeedback.Ripple
            animation={{
              backgroundColor: { value: '#fecdd3' },
              opacity: { value: [0, 0.2, 0] },
            }}
          />
        </PressableFeedback>
        <PressableFeedback className="aspect-[1/1.3] flex-1 rounded-3xl">
          <Card className="flex-1">
            <View className="flex-1 gap-4">
              <Card.Header>
                <Image
                  source={{
                    uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg',
                  }}
                  style={{
                    height: 60,
                    aspectRatio: 1,
                    borderRadius: 14,
                  }}
                />
              </Card.Header>
              <Card.Body className="flex-1">
                <Card.Title>AI Builders</Card.Title>
                <Card.Description className="text-sm">
                  362 members
                </Card.Description>
              </Card.Body>
              <Card.Footer className="flex-row items-center gap-2">
                <View className="size-3 rounded-full bg-emerald-400" />
                <Text className="font-medium text-sm text-foreground">
                  @aibuilders
                </Text>
              </Card.Footer>
            </View>
          </Card>
          <PressableFeedback.Ripple
            animation={{
              backgroundColor: { value: '#67e8f9' },
            }}
          />
        </PressableFeedback>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const ButtonHighlightContent = () => {
  return (
    <View className="flex-1">
      <View className="flex-1 items-center justify-center">
        <View className="w-full gap-6 px-8">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </View>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const PRESSABLE_FEEDBACK_VARIANTS: UsageVariant[] = [
  {
    value: 'background-image-card',
    label: 'Background image card',
    content: <BackgroundImageCardContent />,
  },
  {
    value: 'card-with-image',
    label: 'Card with image',
    content: <CardWithImageContent />,
  },
  {
    value: 'button-highlight',
    label: 'Button highlight',
    content: <ButtonHighlightContent />,
  },
];

export default function PressableFeedbackScreen() {
  return <UsageVariantFlatList data={PRESSABLE_FEEDBACK_VARIANTS} />;
}
