/**
 * 包装react-native-ui-lib组件库
 */
import { View, Text } from 'react-native-ui-lib';

// 导出所有组件
export * from 'react-native-ui-lib';

// 单独导出包装过的组件，覆盖原有组件
export { View, Text };
