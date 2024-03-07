import React from 'react';
import { View, Toast, Button } from '@/components';

function ButtonPage() {
  const handleClick = () => {
    Toast.info('提示');
  };

  return (
    <View flex center>
      <Button label="提示" onPress={handleClick} />
    </View>
  );
}

export default {
  name: 'Toast',
  component: ButtonPage,
};
