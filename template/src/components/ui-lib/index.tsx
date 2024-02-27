/**
 * 包装react-native-ui-lib组件库
 */
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import tw from 'twrnc';
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

const useStyleProps = (className: string) => {
  const styleProps = useMemo(() => {
    const style = Array.isArray(className)
      ? tw.style(...className)
      : tw.style(className);

    return StyleSheet.create({ style }).style;
  }, [className]);

  return styleProps;
};

/**
 * 单独导出包装过的组件，覆盖原有组件
 */
export const View = forwardRef((props: ViewProps, ref: any) => {
  const { className = '', ...otherProps } = props;
  const style = useStyleProps(className);
  return <ULView ref={ref} style={style} {...otherProps} />;
});

export const Text = forwardRef((props: TextProps, ref: any) => {
  const { className = '', ...otherProps } = props;
  const style = useStyleProps(className);
  return <ULText ref={ref} style={style} {...otherProps} />;
});

export const Image = forwardRef((props: ImageProps, ref: any) => {
  const { className = '', ...otherProps } = props;
  const style = useStyleProps(className);
  return <ULImage ref={ref} style={style} {...otherProps} />;
});

export const TouchableOpacity = forwardRef(
  (props: TouchableOpacityProps, ref: any) => {
    const { className = '', ...otherProps } = props;
    const style = useStyleProps(className);
    return <ULTouchableOpacity ref={ref} style={style} {...otherProps} />;
  },
);
