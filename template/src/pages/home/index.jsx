import React from 'react';
import { View, Text, Image, Assets } from '@/components/ui-lib';

function HomePage(props) {
  console.log(props);

  return (
    <View flex center>
      <Image
        source={Assets.icons.phone}
        resizeMode="contain"
        style={{ width: 150, height: 200 }}
      />
      <Text h2>react-native-template-alboped</Text>
      <Text>开箱即用的react-native模版</Text>
      <Text onPress={() => props.navigation.jumpTo('Components')}>
        查看组件
      </Text>
    </View>
  );
}

export default HomePage;
