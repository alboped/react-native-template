import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '@/components/ui-lib';
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
    </GestureHandlerRootView>
  );
}

export default App;
