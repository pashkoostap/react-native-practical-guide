import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      placeName: ''
    };

    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
  }

  placeNameChangedHandler(placeName) {
    this.setState({ placeName });
  }

  render() {
    const { placeName } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputComponent}
            placeholder="An awesome place"
            value={placeName}
            onChangeText={this.placeNameChangedHandler}
          />

          <Button title="Button text" style={styles.buttonStyles} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputComponent: {
    width: '65%'
  },
  buttonStyles: {
    width: '30%'
  }
});
