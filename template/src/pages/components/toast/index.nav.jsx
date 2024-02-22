import React from 'react';
import { View, Text } from 'react-native';

function ButtonPage() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Toast提示</Text>
    </View>
  );
}

export default {
  name: 'Toast',
  component: ButtonPage,
};
