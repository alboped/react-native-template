import React, { useState } from 'react';
import { View, Text, Button } from '@/components/ui-lib';
import { Picker } from '@/components';

const PickerPage = () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('1');

  const items = [
    { label: '北京', value: '1' },
    { label: '上海', value: '2' },
    { label: '天津', value: '3' },
    { label: '广州', value: '4' },
    { label: '深圳', value: '5' },
    { label: '杭州', value: '6' },
    { label: '重庆', value: '7' },
    { label: '成都', value: '8' },
    { label: '南京', value: '9' },
  ];

  return (
    <View flex center>
      <Button
        onPress={() => {
          setVisible(true);
        }}
        label="Show Picker"
      />
      <Picker
        data={items}
        cols={3}
        onChange={setValue}
        onDismiss={() => {
          setVisible(false);
        }}
        visible={visible}
        value={value}
        onOk={(v, ext) => {
          setVisible(false);
          console.log(v);
          console.log(ext);
        }}
      />
    </View>
  );
};

export default {
  name: 'Picker',
  component: PickerPage,
};
