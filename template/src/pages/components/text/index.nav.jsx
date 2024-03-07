import React from 'react';
import { View, Text } from '@/components/ui-lib';

function TextPage() {
  return (
    <View padding-20>
      <Text>文本</Text>
      <Text h1>这是一个标题</Text>
      <Text h2>这是一个标题</Text>
      <Text h3>这是一个标题</Text>
      <Text h4>这是一个标题</Text>
      <Text h5>这是一个标题</Text>
    </View>
  );
}

export default {
  name: 'Text',
  component: TextPage,
  options: { title: '文本' },
};
