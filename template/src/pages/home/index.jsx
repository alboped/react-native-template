import React from 'react';
import { View, Text, Image } from 'react-native';

function HomePage(props) {
  console.log(props);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>react-native-template-alboped</Text>
      <Text onPress={() => props.navigation.jumpTo('Components')}>查看组件</Text>
    </View>
  );
}

export default HomePage;
