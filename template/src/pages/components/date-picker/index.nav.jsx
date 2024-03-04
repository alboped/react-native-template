import React, { useState } from 'react';
import { View, Picker } from '@/components/ui-lib';

const DatePickerPage = () => {
  const [currentValue, setCurrentValue] = useState('1');

  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
  ];

  const renderItem = (item, index) => {
    return <Picker.Item key={index} label={item.label} value={item.value} />;
  };

  return (
    <View flex></View>
  );
};

export default {
  name: 'DatePicker',
  component: DatePickerPage,
};
