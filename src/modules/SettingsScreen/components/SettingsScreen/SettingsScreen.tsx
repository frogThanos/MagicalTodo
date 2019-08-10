import React, { PureComponent } from 'react';
import { ScrollView, Text, SafeAreaView } from 'react-native';
import Config from '../../../../config';

interface SettingsScreenProps {
}

class SettingsScreen extends PureComponent<SettingsScreenProps, null> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Text>{Config.Strings.Settings_Title}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default SettingsScreen;
