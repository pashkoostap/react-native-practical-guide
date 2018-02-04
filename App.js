import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      placeName: '',
      places: []
    };

    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
    this.placeNameSubmitHandler = this.placeNameSubmitHandler.bind(this);
  }

  placeNameChangedHandler(placeName) {
    this.setState({ placeName });
  }

  placeNameSubmitHandler() {
    const { placeName } = this.state;

    if (!placeName.trim()) {
      alert('The input is empty');
    }

    this.setState(prevState => ({
      places: [...prevState.places, prevState.placeName],
      placeName: ''
    }));
  }

  renderPlaces(places = []) {
    return places.map((place, i) => (
      <Text key={i} style={styles.listItemStyles}>
        {place}
      </Text>
    ));
  }

  render() {
    const { placeName, places } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputComponent}
            placeholder="An awesome place"
            value={placeName}
            onChangeText={this.placeNameChangedHandler}
          />

          <Button
            title="Button text"
            style={styles.buttonStyles}
            onPress={this.placeNameSubmitHandler}
          />
        </View>

        <View style={styles.listStyles}>{this.renderPlaces(places)}</View>
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
  },
  listStyles: {
    flexDirection: 'column',
    backgroundColor: '#ccc'
  },
  listItemStyles: {
    width: '100%'
  }
});
