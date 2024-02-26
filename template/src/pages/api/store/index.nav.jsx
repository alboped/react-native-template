import React from 'react';
import { View, Text, Button } from '@/components/ui-lib';
import { useStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';

// function StorePage1() {
//   const { count, user, addCount, cleanCount, setName } = useStore(
//     useShallow((state) => ({
//       count: state.count,
//       user: state.user,
//       addCount: state.addCount,
//       setUser: state.setUser,
//     })),
//   );

//   console.log('render 1');

//   return (
//     <View flex padding-20>
//       <Text h5>- 1 -</Text>
//       <Text>{count}</Text>
//       <Text>{user.name}</Text>
//       <View row>
//         <View flex padding-10>
//           <Button label="增加" onPress={addCount} />
//         </View>
//         <View flex padding-10>
//           <Button
//             label="名称"
//             onPress={() => setName({ name: Date.now().toString() })}
//           />
//         </View>
//         <View flex padding-10>
//           <Button label="清除" onPress={cleanCount} />
//         </View>
//       </View>
//     </View>
//   );
// }

function StorePage() {
  const { count, addCount, cleanCount } = useStore(
    useShallow((state) => ({
      count: state.count,
      addCount: state.addCount,
      cleanCount: state.cleanCount,
    })),
  );

  // const { count, addCount, cleanCount } = useStore((state) => ({
  //   count: state.count,
  //   addCount: state.addCount,
  // }));

  // console.log('render 0');

  return (
    <View flex padding-20>
      <Text h5>useStore</Text>
      <Text>{count}</Text>
      <View row>
        <View flex padding-10>
          <Button label="增加" onPress={addCount} />
        </View>
        <View flex padding-10>
          <Button label="清除" onPress={cleanCount} />
        </View>
      </View>
      {/* <StorePage1 /> */}
    </View>
  );
}

export default {
  name: 'UseStore',
  component: StorePage,
  options: { title: '状态管理' },
};
