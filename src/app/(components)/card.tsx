import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Card, type CardRootProps } from 'heroui-native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { withUniwind } from 'uniwind';

import type { UsageVariant } from '@/components/component-presentation/types';
import { UsageVariantFlatList } from '@/components/component-presentation/usage-variant-flatlist';
import { Text } from '@/components/ui';

const StyledIonicons = withUniwind(Ionicons);

const BasicCardContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Card>
        <View className="gap-4">
          <Card.Body className="mb-4">
            <View className="mb-2 gap-1">
              <Card.Title className="text-pink-400">$450</Card.Title>
              <Card.Title>Living room Sofa</Card.Title>
            </View>
            <Card.Description>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces.
            </Card.Description>
          </Card.Body>
          <Card.Footer className="gap-3">
            <Button variant="primary">Buy now</Button>
            <Button variant="ghost">
              <Button.Label>Add to cart</Button.Label>
              <StyledIonicons
                name="basket-outline"
                size={16}
                className="text-muted"
              />
            </Button>
          </Card.Footer>
        </View>
      </Card>
    </View>
  );
};

// ------------------------------------------------------------------------------

const CardWithImageContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="flex-row gap-4">
        <Card className="aspect-[1/1.3] flex-1 rounded-2xl">
          <View className="flex-1 gap-4">
            <Card.Header>
              <Image
                source={{
                  uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg',
                }}
                style={{
                  height: 60,
                  aspectRatio: 1,
                  borderRadius: 12,
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
        <Card className="aspect-[1/1.3] flex-1 rounded-2xl">
          <View className="flex-1 gap-4">
            <Card.Header>
              <Image
                source={{
                  uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg',
                }}
                style={{
                  height: 60,
                  aspectRatio: 1,
                  borderRadius: 12,
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
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const HorizontalCardWithImageContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="w-full gap-4">
        <Card className="flex-row gap-4 rounded-2xl p-4" variant="tertiary">
          <Image
            source={{
              uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/avocado.jpeg',
            }}
            style={{
              height: 110,
              aspectRatio: 1,
              borderRadius: 14,
            }}
            resizeMode="cover"
          />
          <View className="flex-1 gap-4">
            <Card.Body className="flex-1">
              <Card.Title>Avocado Hackathon</Card.Title>
              <Card.Description numberOfLines={2} className="text-sm">
                Today, 6:30 PM
              </Card.Description>
            </Card.Body>
            <Card.Footer>
              <Pressable className="flex-row items-center gap-1">
                <Text className="font-medium text-sm text-accent">
                  View Details
                </Text>
                <StyledIonicons
                  name="open-outline"
                  size={12}
                  className="text-accent"
                />
              </Pressable>
            </Card.Footer>
          </View>
        </Card>
        <Card className="flex-row gap-4 rounded-2xl p-4" variant="tertiary">
          <Image
            source={{
              uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/oranges.jpeg',
            }}
            style={{
              height: 110,
              aspectRatio: 1,
              borderRadius: 12,
            }}
            resizeMode="cover"
          />
          <View className="flex-1 gap-4">
            <Card.Body className="flex-1">
              <Card.Title>Sound Electro</Card.Title>
              <Card.Description numberOfLines={2} className="text-sm">
                Wed, 4:30 PM
              </Card.Description>
            </Card.Body>
            <Card.Footer>
              <Pressable className="flex-row items-center gap-1">
                <Text className="font-medium text-sm text-accent">
                  View Details
                </Text>
                <StyledIonicons
                  name="open-outline"
                  size={12}
                  className="text-accent"
                />
              </Pressable>
            </Card.Footer>
          </View>
        </Card>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const BackgroundImageCardContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Card className="aspect-square w-full">
        <Image
          source={{
            uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/neo2.jpeg',
          }}
          className="absolute inset-0"
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.5)']}
          style={StyleSheet.absoluteFill}
        />
        <View className="flex-1 gap-4">
          <Card.Body className="flex-1">
            <Card.Title className="mb-0.5 text-base text-zinc-50 uppercase">
              Neo
            </Card.Title>
            <Card.Description className="font-medium text-base text-zinc-50">
              Home robot
            </Card.Description>
          </Card.Body>
          <Card.Footer className="gap-3">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-base text-white">Available soon</Text>
                <Text className="text-base text-zinc-300">Get notified</Text>
              </View>
              <Button
                size="sm"
                className="bg-white"
                pressableFeedbackVariant="none"
              >
                <Button.Label className="text-black">Notify me</Button.Label>
              </Button>
            </View>
          </Card.Footer>
        </View>
      </Card>
    </View>
  );
};

// ------------------------------------------------------------------------------

type CardItemProps = {
  variant: CardRootProps['variant'];
  title: string;
  description: string;
};

const CardItem = ({ variant, title, description }: CardItemProps) => {
  return (
    <Card variant={variant} className="gap-2">
      <Text className="font-medium text-foreground">{title}</Text>
      <Text className="text-muted">{description}</Text>
    </Card>
  );
};

const VariantsContent = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full gap-2 px-5">
        <CardItem
          variant="transparent"
          title="Transparent"
          description="Minimal prominence with transparent background. Use for less important content or nested cards."
        />
        <CardItem
          variant="default"
          title="Default"
          description="Standard card appearance (surface-secondary). The default card variant for most use cases"
        />
        <CardItem
          variant="secondary"
          title="Secondary"
          description="Medium prominence (surface-tertiary). Use to draw moderate attention."
        />
        <CardItem
          variant="tertiary"
          title="Tertiary"
          description="Higher prominence (surface-quaternary). Use for important content."
        />
        <CardItem
          variant="quaternary"
          title="Quaternary"
          description="Highest prominence (surface-quaternary). Use for critical content."
        />
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const CARD_VARIANTS: UsageVariant[] = [
  {
    value: 'basic-card',
    label: 'Basic card',
    content: <BasicCardContent />,
  },
  {
    value: 'card-with-image',
    label: 'Card with image',
    content: <CardWithImageContent />,
  },
  {
    value: 'horizontal-card-with-image',
    label: 'Horizontal card with image',
    content: <HorizontalCardWithImageContent />,
  },
  {
    value: 'background-image-card',
    label: 'Background image card',
    content: <BackgroundImageCardContent />,
  },
  {
    value: 'variants',
    label: 'Variants',
    content: <VariantsContent />,
  },
];

export default function CardScreen() {
  return <UsageVariantFlatList data={CARD_VARIANTS} />;
}
