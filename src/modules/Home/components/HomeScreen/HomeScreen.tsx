import React, { PureComponent } from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
const uuidv1 = require('uuid/v1');
import Config from '../../../../config';
import styles from './styles';

import AddTodo from '../AddTodo/AddTodo';

interface HomeScreenProps {
}

interface HomeScreenState {
  newTodo: string;
  todos: object[];
}

class HomeScreen extends PureComponent<HomeScreenProps, HomeScreenState> {
  constructor(props: any) {
    super(props);
    this.state = {
      newTodo: '',
      todos: [{
        key: uuidv1(),
        title: 'fake Todo 1',
        },
        {
          key: uuidv1(),
          title: 'fake Todo 2',
        },
        {
          key: uuidv1(),
          title: 'fake Todo 3',
        },
        {
          key: uuidv1(),
          title: 'fake Todo 4',
        }],
    };
  }
  handleOnChangeText = (newTodo: string) => {
    this.setState({ newTodo });
  };
  handleAddTodo = (todos: any, newTodo: string) => {
    this.setState({ todos: [...todos, { key: uuidv1(), title: newTodo }], newTodo: '' });
  };
  render() {
    const { todos, newTodo } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            {Config.Strings.Home_Title}
          </Text>
          <AddTodo
            todos={todos}
            newTodo={newTodo}
            onChangeText={this.handleOnChangeText}
            onPress={this.handleAddTodo}
          />
          <View>
            <FlatList
              data={todos}
              renderItem={({ item }: any) => <Text key={item.key}>{item.title}</Text>}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
