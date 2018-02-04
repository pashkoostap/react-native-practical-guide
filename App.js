import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
        <TextInput
          style={{ borderColor: 'red', width: '90%' }}
          value={placeName}
          onChangeText={this.placeNameChangedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
