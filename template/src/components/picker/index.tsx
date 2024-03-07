import React, { forwardRef } from 'react';
import AntPicker, { PickerProps } from '@ant-design/react-native/lib/picker';

/**
 * 包装Picker组件
 */
export const Picker = forwardRef((props: PickerProps, ref: any) => {
  return <AntPicker ref={ref} {...props} />;
});

Picker.displayName = 'Picker';

export default Picker;
