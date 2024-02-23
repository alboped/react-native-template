import React from 'react';
import {
  View,
  Text,
  GridList,
  Spacings,
  TouchableOpacity,
} from 'react-native-ui-lib';

const componentData = [
  {
    title: '基础组件',
    components: [
      { name: 'View', routeName: 'View' },
      { name: 'Text', routeName: 'Text' },
      { name: 'Button', routeName: 'Button' },
      { name: 'Toast', routeName: 'Toast' },
      { name: 'Image', routeName: 'Image' },
      { name: 'Icon', routeName: 'Icon' },
      { name: 'List', routeName: 'List' },
      { name: 'Modal', routeName: 'Modal' },
      { name: 'Carousel', routeName: 'Carousel' },
    ],
  },
  {
    title: '表单组件',
    components: [
      { name: 'Picker', routeName: 'Picker' },
      { name: 'Input', routeName: 'Input' },
      { name: 'Switch', routeName: 'Switch' },
      { name: 'Checkbox', routeName: 'Checkbox' },
    ],
  },
  {
    title: '业务组件',
    components: [{ name: 'ScrollList', routeName: 'ScrollList' }],
  },
];

function Components({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.push(item.routeName)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View padding-20>
      <Text>组件展示</Text>
      {componentData.map((item, index) => (
        <View key={index}>
          <Text>{item.title}</Text>
          <GridList
            data={item.components}
            renderItem={renderItem}
            maxItemWidth={140}
            numColumns={2}
            itemSpacing={Spacings.s3}
            listPadding={Spacings.s5}
          />
        </View>
      ))}
    </View>
  );
}

export default Components;
