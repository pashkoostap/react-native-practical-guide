import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated
} from "react-native";
import { connect } from "react-redux";

import PlacesList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesLoaded: false,
      removeAnimation: new Animated.Value(1)
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.onPlaceItemSelect = this.onPlaceItemSelect.bind(this);
    this.placesSearchHandler = this.placesSearchHandler.bind(this);
  }

  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  placesSearchHandler() {
    // this.setState(prevState => ({ placesLoaded: true }));
    Animated.timing(this.state.removeAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  }

  onPlaceItemSelect(placeKey) {
    const selectedPlace = this.props.placesReducer.places.find(
      place => place.key === placeKey
    );

    this.props.navigator.push({
      screen: "PlaceDetail",
      title: selectedPlace.placeName,
      passProps: {
        selectedPlace
      }
    });
  }

  render() {
    const { placesReducer: { places } } = this.props;
    const { placesLoaded, removeAnimation } = this.state;
    let content = (
      <Animated.View
        style={{
          opacity: removeAnimation,
          transform: [
            {
              scale: removeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [2, 1]
              })
            }
          ]
        }}
      >
        <TouchableOpacity onPress={this.placesSearchHandler}>
          <View style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Find places</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );

    if (placesLoaded) {
      content = (
        <PlacesList
          places={places}
          onPlaceItemSelect={this.onPlaceItemSelect}
        />
      );
    }

    return <View style={styles.wrapper}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  searchButton: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: "center",
    margin: "auto"
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 16
  }
});

const mapStateToProps = ({ placesReducer }) => {
  return { placesReducer };
};

export default connect(mapStateToProps, null)(FindPlaceScreen);
