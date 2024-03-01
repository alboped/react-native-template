import React from 'react';
import { View, Text, Image, Button, Assets } from '@/components/ui-lib';
import styles from './style';

function HomePage(props) {
  return (
    <View flex center>
      <Image
        source={Assets.icons.phone}
        resizeMode="contain"
        style={styles.listItem}
      />
      <Text h5>react-native-template-alboped</Text>
      <View padding-20>
        <Text>开箱即用的react-native模版</Text>
      </View>
      <Button
        onPress={() => props.navigation.jumpTo('Components')}
        label="查看组件"
      />
    </View>
  );
}

export default HomePage;
