import React, { PureComponent } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../HomeScreen/styles';
import Config from '../../../../config';

interface AddTodoProps {
  newTodo: string;
  todos: object[];
  onChangeText: (newTodo: string) => void;
  onPress: (todos: any, newTodo: string) => void;
}

class AddTodo extends PureComponent<AddTodoProps> {
  render() {
    const { todos, newTodo, onChangeText, onPress } = this.props;
    return (
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={newTodo}
          placeholder={Config.Strings.Todo_PlaceHolder}
        />
        <TouchableOpacity
          style={styles.addTodoButton}
          onPress={() => onPress(todos, newTodo)}
        >
          <Text style={styles.addTodoText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTodo;
