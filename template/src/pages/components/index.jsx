import React from 'react';
import {
  View,
  Text,
  GridList,
  Spacings,
  TouchableOpacity,
  Assets,
  Colors,
  Icon,
} from '@/components/ui-lib';

const componentData = [
  {
    title: '基础组件',
    components: [
      {
        name: 'View',
        label: '视图',
        routeName: 'View',
        icon: Assets.icons.view,
      },
      { name: 'Text', label: '文本', routeName: 'Text' },
      { name: 'Color', label: '颜色', routeName: 'Color' },
      { name: 'Button', label: '按钮', routeName: 'Button' },
      { name: 'Toast', label: '提示', routeName: 'Toast' },
      { name: 'Image', label: '图片', routeName: 'Image' },
      { name: 'Icon', label: '图标', routeName: 'Icon' },
      { name: 'List', label: '列表', routeName: 'List' },
      { name: 'Modal', label: '窗口', routeName: 'Modal' },
      { name: 'Carousel', label: '轮播', routeName: 'Carousel' },
    ],
  },
  {
    title: '表单组件',
    components: [
      { name: 'Input', label: '输入框', routeName: 'Input' },
      { name: 'Picker', label: '下拉窗口', routeName: 'Picker' },
      { name: 'Switch', label: '开关', routeName: 'Switch' },
      { name: 'Checkbox', label: '复选框', routeName: 'Checkbox' },
    ],
  },
  {
    title: '业务组件',
    components: [
      { name: 'ScrollList', label: '长列表', routeName: 'ScrollList' },
    ],
  },
];

function Components({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.push(item.routeName)}
      padding-10
      className="bg-blue-100 flex-row items-center"
    >
      <View flex>
        <Text>{item.label}</Text>
        <Text>{item.name}</Text>
      </View>
      {!!item.icon && (
        <Icon
          source={item.icon}
          size={20}
          color={Colors.$backgroundDangerHeavy}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View>
      <Text center h6>
        组件展示
      </Text>
      {componentData.map((item, index) => (
        <View key={index}>
          <Text margin-20>{item.title}</Text>
          <GridList
            data={item.components}
            renderItem={renderItem}
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
