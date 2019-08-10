import { StyleSheet } from 'react-native';
import Config from '../../../../config';

const styles = StyleSheet.create({
  inputAndButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 40,
  },
  textInput: {
    flex: 6,
    height: 40,
    borderColor: Config.Colors.inputBorder,
    borderWidth: 1,
    borderRadius: 4,
    paddingRight: 10,
    paddingLeft: 10,
  },
  addTodoButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Config.Colors.addTodoButton,
    marginLeft: 5,
    borderRadius: 4,
  },
  addTodoText: {
    color: Config.Colors.white,
    fontSize: 30,
  },
});

export default styles;
