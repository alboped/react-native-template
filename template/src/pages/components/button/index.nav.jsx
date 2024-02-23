import React from 'react';
import { View, Text, Button, Colors } from 'react-native-ui-lib';

function ButtonPage() {
  return (
    <View padding-20>
      <Text>按钮</Text>
      <Button
        label="Press"
        size={Button.sizes.medium}
        backgroundColor={Colors.red30}
      />
    </View>
  );
}

export default {
  name: 'Button',
  component: ButtonPage,
};
