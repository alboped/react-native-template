import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const pages = require.context('./pages', true, /\.nav.jsx/);

function App() {
  const screens = React.useMemo(() => {
    return pages.keys().map(key => {
      const {name, component, ...other} = pages(key)?.default || {};
      return (
        name && (
          <Stack.Screen
            key={name}
            name={name}
            getComponent={() => component}
            {...other}
          />
        )
      );
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={require('./pages/tabs').default}
          options={{headerShown: false}}
        />
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
