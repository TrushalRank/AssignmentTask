import React from 'react';
import { SafeAreaView, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { Color } from './src/common/styles';
import Navigation from './src/navigation';
import { store } from './src/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Color.lightGray,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};
export default App;
