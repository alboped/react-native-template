import React, { useState } from 'react';
import { View } from '@/components/ui-lib';
import { Button, DatePicker } from '@/components';

const DatePickerPage = () => {
  const [visible, setVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState('1');

  return (
    <View flex>
      <Button
        onPress={() => {
          setVisible(true);
        }}
        label="Show Picker"
      />
      <DatePicker
        visible={visible}
        value={currentValue}
        onChange={(value) => setCurrentValue(value)}
        placeholder="请选择日期"
        onOk={() => setVisible(false)}
        onVisibleChange={(isVisible) => setVisible(isVisible)}
      />
    </View>
  );
};

export default {
  name: 'DatePicker',
  component: DatePickerPage,
};
