import React, { forwardRef } from 'react';
import AntDatePickerView, {
  DatePickerViewProps,
} from '@ant-design/react-native/lib/date-picker-view/date-picker-view';

/**
 * 包装DatePickerView组件
 */
export const DatePickerView = forwardRef(
  (props: DatePickerViewProps, ref: any) => {
    return <AntDatePickerView ref={ref} {...props} />;
  },
);

DatePickerView.displayName = 'DatePickerView';

export default DatePickerView;
