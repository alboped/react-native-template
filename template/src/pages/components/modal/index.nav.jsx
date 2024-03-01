import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import {
  View,
  Text,
  Modal,
  Button,
  PanningProvider,
} from '@/components/ui-lib';

function ModalPage() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  const onDismiss = () => {
    setIsVisible(false);
  };

  return (
    <View flex center>
      <Button label="提示" onPress={handleClick} />
      <Modal
        visible={isVisible}
        onBackgroundPress={() => console.log('background pressed')}
        animationType="slide"
      >
        <Modal.TopBar
          title={'弹框'}
          onCancel={onDismiss}
          onDone={() => console.log('done')}
        />
      </Modal>
    </View>
  );
}

export default {
  name: 'Modal',
  component: ModalPage,
};
