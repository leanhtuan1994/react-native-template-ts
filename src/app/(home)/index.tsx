import { useRouter } from 'expo-router';
import { Button } from 'heroui-native';
import React from 'react';
import { View } from 'react-native';

export default function App() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Button onPress={() => router.push('/(components)/component-list')}>
        <Button.Label>Go to Components</Button.Label>
      </Button>
    </View>
  );
}
