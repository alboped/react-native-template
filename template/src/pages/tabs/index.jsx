import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Colors } from 'react-native-ui-lib';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const imgMap = {
            Home: 'https://cdn-icons-png.flaticon.com/512/4562/4562332.png',
            Components: 'https://cdn-icons-png.flaticon.com/512/3817/3817538.png',
            Mine: 'https://cdn-icons-png.flaticon.com/512/4210/4210226.png',
          };

          return (
            <Icon
              source={{
                uri: imgMap[route.name],
              }}
              size={size}
              tintColor={color}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={require('../home').default}
        options={{ title: '首页' }}
      />
      <Tab.Screen
        name="Components"
        component={require('../components').default}
        options={{ title: '组件' }}
      />
      <Tab.Screen
        name="Mine"
        component={require('../mine').default}
        options={{ title: '我的' }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
