import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, Assets } from 'react-native-ui-lib';

const Tab = createBottomTabNavigator();

const imgMap = {
  Home: Assets.icons.smiling,
  Components: Assets.icons.grid,
  Mine: Assets.icons.user,
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          return (
            <Icon source={imgMap[route.name]} size={size} tintColor={color} />
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
