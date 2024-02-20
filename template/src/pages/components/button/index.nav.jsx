import * as React from 'react';
import {View, Text} from 'react-native';

console.log('Button load');

function ButtonPage() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>按钮</Text>
    </View>
  );
}

export default {
  name: 'Button',
  component: ButtonPage,
};
