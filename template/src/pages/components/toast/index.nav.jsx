import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { View, Text, Toast, Button, Colors } from '@/components/ui-lib';
import Animated, { useSharedValue } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

function ButtonPage() {
  const [isVisible, setIsVisible] = useState(false);
  const opacity = useSharedValue(0);

  const handleClick = () => {
    setIsVisible(true);
    setTimeout(() => {
      opacity.value = 0.5;
    }, 1);
  };

  const onDismiss = () => {
    setIsVisible(false);
  };

  const messageChildren = () => {
    return (
      <Animated.View
        center
        flex
        backgroundColor="red"
        style={{
          bottom: height / 2,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: opacity,
        }}
      >
        <Text>这是一条提示</Text>
      </Animated.View>
    );
  };

  return (
    <View flex center>
      <Button label="提示" onPress={handleClick} />
      {/* <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}
      /> */}
      {isVisible && (
        <Toast
          visible={isVisible}
          position={'bottom'}
          autoDismiss={2000}
          onDismiss={onDismiss}
          renderAttachment={messageChildren}
          backgroundColor={Colors.transparent}
        />
      )}
    </View>
  );
}

export default {
  name: 'Toast',
  component: ButtonPage,
};
