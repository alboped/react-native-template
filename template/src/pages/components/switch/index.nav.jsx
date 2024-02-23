import React, { useState } from 'react';
import { View, Text, Switch } from '@/components/ui-lib';

function SwitchPage() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View center padding-20>
      <Text>开关</Text>
      <View padding-10>
        <Switch
          value={switchValue}
          onValueChange={setSwitchValue}
          offColor={'red'}
        />
      </View>
    </View>
  );
}

export default {
  name: 'Switch',
  component: SwitchPage,
};
