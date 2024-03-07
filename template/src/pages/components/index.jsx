import React from 'react';
import { ScrollView } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  Assets,
  Icon,
} from '@/components/ui-lib';
import style from './style';

const { icons } = Assets;

const componentData = [
  {
    title: '基础组件',
    components: [
      {
        name: 'View',
        label: '视图',
        routeName: 'View',
        icon: icons.view,
      },
      { name: 'Text', label: '文本', routeName: 'Text', icon: icons.text },
      { name: 'Color', label: '颜色', routeName: 'Color', icon: icons.color },
      { name: 'Button', label: '按钮', routeName: 'Button', icon: icons.block },
      { name: 'Toast', label: '提示', routeName: 'Toast', icon: icons.message },
      { name: 'Image', label: '图片', routeName: 'Image', icon: icons.image },
      { name: 'Icon', label: '图标', routeName: 'Icon', icon: icons.grid },
      { name: 'List', label: '列表', routeName: 'List', icon: icons.list },
      { name: 'Modal', label: '窗口', routeName: 'Modal', icon: icons.modal },
      {
        name: 'Carousel',
        label: '轮播',
        routeName: 'Carousel',
        icon: icons.carousel,
      },
    ],
  },
  {
    title: '表单组件',
    components: [
      { name: 'Input', label: '输入框', routeName: 'Input', icon: icons.input },
      {
        name: 'Picker',
        label: '选择器弹框',
        routeName: 'Picker',
        icon: icons.select,
      },
      {
        name: 'PickerView',
        label: '选择器',
        routeName: 'PickerView',
        icon: icons.select,
      },
      {
        name: 'DatePicker',
        label: '时间选择器弹框',
        routeName: 'DatePicker',
        icon: icons.select,
      },
      {
        name: 'DatePickerView',
        label: '时间选择器',
        routeName: 'DatePickerView',
        icon: icons.select,
      },
      {
        name: 'Switch',
        label: '开关',
        routeName: 'Switch',
        icon: icons.switch,
      },
      {
        name: 'Checkbox',
        label: '复选框',
        routeName: 'Checkbox',
        icon: icons.check,
      },
    ],
  },
  {
    title: '业务组件',
    components: [
      { name: 'ScrollList', label: '长列表', routeName: 'ScrollList' },
    ],
  },
];

function ComponentsPage({ navigation }) {
  const renderItem = (item, index) => (
    <View key={index} className={['p-1', { width: '50%' }]}>
      <TouchableOpacity
        onPress={() => navigation.push(item.routeName)}
        className={['flex-row items-center p-20 rounded-5 bg-blue-100']}
      >
        <View flex>
          <Text style={style.itemTitle}>{item.label}</Text>
          <Text>{item.name}</Text>
        </View>
        {!!item.icon && <Icon source={item.icon} size={20} color={'red'} />}
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView>
      <Text center h6>
        组件展示
      </Text>
      {componentData.map((item, index) => (
        <View key={index}>
          <Text margin-20>{item.title}</Text>
          <View row paddingH-10 className="flex-wrap">
            {item.components.map(renderItem)}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default ComponentsPage;
