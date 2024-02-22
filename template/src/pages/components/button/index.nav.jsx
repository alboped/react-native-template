import React from 'react';
import { View, Text } from 'react-native';

function ButtonPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>按钮</Text>
    </View>
  );
}

export default {
  name: 'Button',
  component: ButtonPage,
};
