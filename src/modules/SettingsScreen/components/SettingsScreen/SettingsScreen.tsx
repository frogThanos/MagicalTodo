import React, { PureComponent } from 'react';
import { ScrollView, Text, SafeAreaView } from 'react-native';

interface SettingsScreenProps {
}

class SettingsScreen extends PureComponent<SettingsScreenProps, null> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>This is the SettingsScreen</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SettingsScreen;
