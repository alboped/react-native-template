import React from 'react';
import { View, Text, Button, Colors, Toast } from '@/components';

function ButtonPage() {
  return (
    <View padding-20>
      <Text>按钮</Text>
      <Button
        onPress={() => Toast.info('点击')}
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
