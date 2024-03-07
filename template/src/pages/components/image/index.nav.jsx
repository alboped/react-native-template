import React from 'react';
import { View, Image, Assets } from '@/components';

const ImagePage = () => {
  return (
    <View flex center>
      <Image
        source={Assets.icons.phone}
        resizeMode="contain"
        width={200}
        height={200}
      />
    </View>
  );
};

export default {
  name: 'Image',
  component: ImagePage,
};
