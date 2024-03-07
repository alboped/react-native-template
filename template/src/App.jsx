import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '@/components/ui-lib';
import { Provider } from '@ant-design/react-native';
import '@/assets';
import '@/config';

const Stack = createNativeStackNavigator();
const pages = require.context('./pages', true, /\.nav.jsx/);

function App() {
  const screens = useMemo(() => {
    return pages.keys().map((key) => {
      const { name, component, ...other } = pages(key)?.default || {};
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitleVisible: false,
              headerTitleAlign: 'center',
              contentStyle: { backgroundColor: Colors.grey80 },
            }}
          >
            <Stack.Screen
              name="Tabs"
              component={require('./pages/tabs').default}
              options={{ headerShown: false }}
            />
            {screens}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
