import { Divider, Surface } from 'heroui-native';
import { View } from 'react-native';

import type { UsageVariant } from '@/components/component-presentation/types';
import { UsageVariantFlatList } from '@/components/component-presentation/usage-variant-flatlist';
import { Text } from '@/components/ui';

const DividerInActionContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <Surface variant="secondary" className="px-6 py-7">
        <Text className="font-medium text-base text-foreground">
          HeroUI Native
        </Text>
        <Text className="text-sm text-muted">
          A modern React Native component library.
        </Text>
        <Divider className="my-4" />
        <View className="h-5 flex-row items-center">
          <Text className="text-sm text-foreground">Components</Text>
          <Divider orientation="vertical" className="mx-3" />
          <Text className="text-sm text-foreground">Themes</Text>
          <Divider orientation="vertical" className="mx-3" />
          <Text className="text-sm text-foreground">Examples</Text>
        </View>
      </Surface>
    </View>
  );
};

// ------------------------------------------------------------------------------

const VariantsContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="w-full gap-8">
        <View>
          <Text className="mb-2 text-sm text-muted">Thin (default)</Text>
          <Divider variant="thin" />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">Thick</Text>
          <Divider variant="thick" />
        </View>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const OrientationContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="w-full gap-8">
        <View>
          <Text className="mb-2 text-sm text-muted">Horizontal (default)</Text>
          <Divider />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">Vertical</Text>
          <View className="h-20 w-full flex-row justify-center">
            <Divider orientation="vertical" />
          </View>
        </View>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const CustomThicknessContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="w-full gap-8">
        <View>
          <Text className="mb-2 text-sm text-muted">
            Default (hairline width)
          </Text>
          <Divider />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">1px</Text>
          <Divider thickness={1} />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">2px</Text>
          <Divider thickness={2} />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">5px</Text>
          <Divider thickness={5} />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">10px</Text>
          <Divider thickness={10} />
        </View>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const CustomColorsContent = () => {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="w-full gap-8">
        <View>
          <Text className="mb-2 text-sm text-muted">
            Custom Background Color
          </Text>
          <Divider className="bg-accent" thickness={2} />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">Success Color</Text>
          <Divider className="bg-success" thickness={2} />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">Warning Color</Text>
          <Divider className="bg-warning" thickness={2} />
        </View>

        <View>
          <Text className="mb-2 text-sm text-muted">Danger Color</Text>
          <Divider className="bg-danger" thickness={2} />
        </View>
      </View>
    </View>
  );
};

// ------------------------------------------------------------------------------

const DIVIDER_VARIANTS: UsageVariant[] = [
  {
    value: 'divider-in-action',
    label: 'Divider in action',
    content: <DividerInActionContent />,
  },
  {
    value: 'variants',
    label: 'Variants',
    content: <VariantsContent />,
  },
  {
    value: 'orientation',
    label: 'Orientation',
    content: <OrientationContent />,
  },
  {
    value: 'custom-thickness',
    label: 'Custom thickness',
    content: <CustomThicknessContent />,
  },
  {
    value: 'custom-colors',
    label: 'Custom colors',
    content: <CustomColorsContent />,
  },
];

export default function DividerScreen() {
  return <UsageVariantFlatList data={DIVIDER_VARIANTS} />;
}
