import React, { forwardRef } from 'react';
import AntDatePicker, {
  DatePickerProps,
} from '@ant-design/react-native/lib/date-picker/date-picker';

/**
 * 包装DatePicker组件
 */
export const DatePicker = forwardRef((props: DatePickerProps, ref: any) => {
  return <AntDatePicker ref={ref} {...props} />;
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
