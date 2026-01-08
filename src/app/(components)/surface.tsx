import { Surface, type SurfaceRootProps } from 'heroui-native';
import { View } from 'react-native';

import type { UsageVariant } from '@/components/component-presentation/types';
import { UsageVariantFlatList } from '@/components/component-presentation/usage-variant-flatlist';
import { Text } from '@/components/ui';

type SurfaceItemProps = {
  variant: SurfaceRootProps['variant'];
  title: string;
  description: string;
};

const SurfaceItem = ({ variant, title, description }: SurfaceItemProps) => {
  return (
    <Surface variant={variant} className="gap-2">
      <Text className="font-medium text-foreground">{title}</Text>
      <Text className="text-muted">{description}</Text>
    </Surface>
  );
};

const VariantsContent = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full gap-4 px-5">
        <SurfaceItem
          variant="default"
          title="Surface Content"
          description="This is a default surface variant. It uses bg-surface styling."
        />
        <SurfaceItem
          variant="secondary"
          title="Surface Content"
          description="This is a secondary surface variant. It uses bg-surface-secondary styling."
        />
        <SurfaceItem
          variant="tertiary"
          title="Surface Content"
          description="This is a tertiary surface variant. It uses bg-surface-tertiary styling."
        />
        <SurfaceItem
          variant="quaternary"
          title="Surface Content"
          description="This is a quaternary surface variant. It uses bg-surface-quaternary styling."
        />
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const SURFACE_VARIANTS: UsageVariant[] = [
  {
    value: 'variants',
    label: 'Variants',
    content: <VariantsContent />,
  },
];

export default function SurfaceScreen() {
  return <UsageVariantFlatList data={SURFACE_VARIANTS} />;
}
