import React, { useState } from 'react';
import { View } from '@/components/ui-lib';
import { DatePicker } from '@/components';

const DatePickerPage = () => {
  const [currentValue, setCurrentValue] = useState('1');

  return (
    <View flex>
      <DatePicker
        visible={true}
        value={currentValue}
        onChange={(value) => setCurrentValue(value)}
        mode="date"
        placeholder="请选择日期"
      />
    </View>
  );
};

export default {
  name: 'DatePicker',
  component: DatePickerPage,
};
