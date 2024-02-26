import React, { useMemo } from 'react';
import { View, Text, Colors, Spacings, GridList } from '@/components/ui-lib';
import tinycolor from 'tinycolor2';

function ColorPage() {
  const renderItem = ({ item }) => {
    const color = Colors[item];
    const textColor = tinycolor(color).isDark() ? '#fff' : '#333';

    return (
      <View row centerV spread backgroundColor={color} marginH-20 padding-10>
        <Text color={textColor}>{item}: </Text>
        <Text color={textColor}>{Colors[item]}</Text>
      </View>
    );
  };

  const colorList = useMemo(() => {
    return Object.keys(Colors).filter((item) => {
      return Colors[item] && tinycolor(Colors[item]).isValid();
    });
  }, []);

  return (
    <View flex>
      <Text h5 marginH-20>
        Colors
      </Text>
      <GridList data={colorList} renderItem={renderItem} numColumns={1} />
    </View>
  );
}

export default {
  name: 'Color',
  component: ColorPage,
  options: { title: '颜色' },
};
