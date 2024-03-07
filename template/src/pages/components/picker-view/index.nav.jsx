import React from 'react';
import { View, PickerView } from '@/components';

const PickerViewPage = () => {
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
    <View>
      <PickerView data={items} cascade={false} />
    </View>
  );
};

export default {
  name: 'PickerView',
  component: PickerViewPage,
};
