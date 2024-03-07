import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Button } from '@/components/ui-lib';
import styles from './style';

function ViewPage() {
  return (
    <ScrollView>
      <View flex padding-20>
        <Text h6>视图</Text>
        <View className="flex-row border-1 border-gray-500 p-2 mt-2 rounded-3">
          <View className="flex-1 p-10 bg-blue-400 rounded-3">
            <Text className="text-white">Left: flex-1</Text>
          </View>
          <View className="p-10 bg-blue-400 rounded-3">
            <Text className="text-white">Right</Text>
          </View>
        </View>
        <View className="flex-row border-1 border-gray-500 p-2 mt-2 rounded-3">
          <View className="p-10 bg-blue-400 rounded-3">
            <Text className="text-white">Left</Text>
          </View>
          <View className="flex-1 p-10 bg-blue-400 rounded-3">
            <Text className="text-white">Right: flex-1</Text>
          </View>
        </View>
        <View className="flex-row border-1 border-gray-500 p-2 mt-2 rounded-3">
          <View className="flex-1 p-10 bg-blue-400 rounded-3">
            <Text className="text-white">Left: flex-1</Text>
          </View>
          <View className="flex-1 p-10 bg-blue-400 rounded-3">
            <Text className="text-white">Right: flex-1</Text>
          </View>
        </View>
        <View
          className="border-gray-500 border-1 mt-2 items-start"
          style={styles.viewItem}
        >
          <Button label="Button" />
        </View>
        <View
          className="border-gray-500 border-1 mt-2 items-end"
          style={styles.viewItem}
        >
          <Button label="Button" />
        </View>
        <View
          className="border-gray-500 border-1 mt-2 justify-start"
          style={styles.viewItem}
        >
          <Button label="Button" />
        </View>
        <View
          className="border-gray-500 border-1 mt-2 justify-end"
          style={styles.viewItem}
        >
          <Button label="Button" />
        </View>
        <View
          className="border-gray-500 border-1 mt-2 center"
          style={styles.viewItem}
        >
          <Button label="Button" />
        </View>
      </View>
    </ScrollView>
  );
}

export default {
  name: 'View',
  component: ViewPage,
  options: { title: '视图' },
};
