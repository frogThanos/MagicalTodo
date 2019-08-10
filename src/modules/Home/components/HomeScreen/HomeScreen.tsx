import React, { PureComponent } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import Config from '../../../../config';
import styles from './styles';

interface HomeScreenProps {
}

class HomeScreen extends PureComponent<HomeScreenProps, null> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            {Config.Strings.Home_Title}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
