import React from 'react';
import { View, Text } from 'react-native';

function Components({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>组件展示</Text>
      <Text onPress={() => navigation.push('Button')}>Button</Text>
      <Text onPress={() => navigation.push('Toast')}>Toast</Text>
    </View>
  );
}

export default Components;
