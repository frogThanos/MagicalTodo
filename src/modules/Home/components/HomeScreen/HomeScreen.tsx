import React, { PureComponent } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
interface HomeScreenProps {
}

class HomeScreen extends PureComponent<HomeScreenProps, null> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>This is the HomeScreen</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
