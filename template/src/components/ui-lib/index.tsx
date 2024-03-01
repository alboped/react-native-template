/**
 * 包装react-native-ui-lib组件库
 */
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { tw } from '@/style';
import {
  View as ULView,
  Text as ULText,
  Image as ULImage,
  TouchableOpacity as ULTouchableOpacity,
  ViewProps as ULViewProps,
  TextProps as ULTextProps,
  ImageProps as ULImageProps,
  TouchableOpacityProps as ULTouchableOpacityProps,
} from 'react-native-ui-lib';

// 导出所有组件
export * from 'react-native-ui-lib';

type BaseProps = {
  className?: string;
};

/**
 * 定义新的类型，覆盖原有类型，方便代码提示
 */
type ViewProps = ULViewProps & BaseProps;
type TextProps = ULTextProps & BaseProps;
type ImageProps = ULImageProps & BaseProps;
type TouchableOpacityProps = ULTouchableOpacityProps & BaseProps;

/**
 * 处理样式，获取tailwind样式并与style合并
 */
const useStyleProps = (className: string, style: any) => {
  const styleProps = useMemo(() => {
    const classStyle = Array.isArray(className)
      ? tw.style(...className)
      : tw.style(className);

    const styled = StyleSheet.compose(classStyle, style);

    return styled;
  }, [className, style]);

  return styleProps;
};

/**
 * 单独导出包装过的组件，覆盖原有组件
 */
export const View = forwardRef((props: ViewProps, ref: any) => {
  const { className = '', style, ...otherProps } = props;
  const styled = useStyleProps(className, style);
  return <ULView ref={ref} style={styled} {...otherProps} />;
});

export const Text = forwardRef((props: TextProps, ref: any) => {
  const { className = '', style, ...otherProps } = props;
  const styled = useStyleProps(className, style);
  return <ULText ref={ref} style={styled} {...otherProps} />;
});

export const Image = forwardRef((props: ImageProps, ref: any) => {
  const { className = '', style, ...otherProps } = props;
  const styled = useStyleProps(className, style);
  return <ULImage ref={ref} style={styled} {...otherProps} />;
});

export const TouchableOpacity = forwardRef(
  (props: TouchableOpacityProps, ref: any) => {
    const { className = '', style, ...otherProps } = props;
    const styled = useStyleProps(className, style);
    return <ULTouchableOpacity ref={ref} style={styled} {...otherProps} />;
  },
);
