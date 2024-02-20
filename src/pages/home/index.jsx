import * as React from 'react';
import {View, Text} from 'react-native';

console.log('Toast load');

function HomePage({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>首页</Text>
      <Text onPress={() => navigation.push('Button')}>按钮</Text>
    </View>
  );
}

export default HomePage;
