import React from 'react';
import { View, Text } from '@/components/ui-lib';

function ViewPage() {
  return (
    <View padding-20>
      <Text>视图</Text>
    </View>
  );
}

export default {
  name: 'View',
  component: ViewPage,
  options: { title: '视图' },
};
