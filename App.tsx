import StorybookUIRoot from './.ondevice/Storybook';
// export { StorybookUIRoot as default };

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MyButton} from './components/Button';

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <MyButton
          color="purple"
          onPress={() => {}}
          text="Hello Woㅁㄴㅇㅁㄴrld"
        />
      </View>
    </>
  );
};

export default App;
