import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { HomeScreen } from './modules/Home';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <Text>MagicalTodo</Text>
        <HomeScreen />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({

});

export default App;
