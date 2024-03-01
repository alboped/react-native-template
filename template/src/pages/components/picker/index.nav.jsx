import React, { useState } from 'react';
import {
  View,
  Text,
  Colors,
  Typography,
  Picker,
  WheelPicker,
  LoaderScreen,
  Button,
} from '@/components/ui-lib';

const monthItems = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const PickerPage = () => {
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
    <View flex center>
      <Picker
        value={currentValue}
        placeholder={'Placeholder'}
        onChange={() => console.log('changed')}
        useWheelPicker
      >
        {items.map(renderItem)}
      </Picker>
      {/* <WheelPicker
        initialValue={'February'}
        activeTextColor={Colors.$textPrimary}
        inactiveTextColor={Colors.$textNeutralHeavy}
        items={monthItems}
        textStyle={Typography.text60R}
        numberOfVisibleRows={3}
      /> */}
      {/* <WheelPicker
        items={[
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
          { label: 'Maybe', value: 'maybe' },
        ]}
        initialValue={'yes'}
        onChange={() => console.log('changed')}
      /> */}
    </View>
  );
};

export default {
  name: 'Picker',
  component: PickerPage,
};
