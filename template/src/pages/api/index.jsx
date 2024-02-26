import React from 'react';
import { View, Text, Button } from '@/components/ui-lib';

function ApiPage(props) {
  return (
    <View flex center padding-20>
      <Text h5>状态管理</Text>
      <Button
        onPress={() => props.navigation.push('UseStore')}
        label="useStore"
      />
    </View>
  );
}

export default ApiPage;
