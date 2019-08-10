import React, { PureComponent } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import Config from '../../../../config';

interface HomeScreenProps {
}

class HomeScreen extends PureComponent<HomeScreenProps, null> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>{Config.Strings.Home_Title}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
