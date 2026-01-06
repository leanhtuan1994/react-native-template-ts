import { FlashList } from '@shopify/flash-list';
import { Card } from 'heroui-native';
import React from 'react';

import type { Post } from '@/api';
import { usePosts } from '@/api';
import { EmptyList, FocusAwareStatusBar, Text, View } from '@/components/ui';

export default function Feed() {
  const { data, isPending, isError } = usePosts();

  const renderItem = React.useCallback(
    ({ item }: { item: Post }) => (
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Body>
          <Text>{item.body}</Text>
        </Card.Body>
      </Card>
    ),
    []
  );

  if (isError) {
    return (
      <View>
        <Text> Error Loading data </Text>
      </View>
    );
  }
  return (
    <View className="flex-1">
      <FocusAwareStatusBar />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isPending} />}
      />
    </View>
  );
}
