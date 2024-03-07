import React, { forwardRef } from 'react';
import AntPickerView, {
  PickerViewProps,
} from '@ant-design/react-native/lib/picker-view';

/**
 * 包装DatePickerView组件
 */
export const PickerView = forwardRef((props: PickerViewProps, ref: any) => {
  return <AntPickerView ref={ref} {...props} />;
});

PickerView.displayName = 'PickerView';

export default PickerView;
