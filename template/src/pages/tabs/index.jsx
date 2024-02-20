import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={require('../home').default} />
      <Tab.Screen name="Mine" component={require('../mine').default} />
    </Tab.Navigator>
  );
}

export default Tabs;
