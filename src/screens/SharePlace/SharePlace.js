import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/places";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeName: ""
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.addPlace = this.addPlace.bind(this);
    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
  }

  placeNameChangedHandler(placeName) {
    if (!placeName.trim()) {
      alert("Input is empty");
    } else {
      this.setState(prevState => ({ placeName }));
    }
  }

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  }

  addPlace() {
    const { placeName } = this.state;

    if (!placeName.trim()) {
      alert("Input is empty");
    } else {
      this.props.addPlace(placeName);
      this.setState(prevState => ({ placeName: "" }));
    }
  }

  render() {
    const { placeName } = this.state;

    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>

          <PickImage />

          <PickLocation />

          <PlaceInput
            placeholder="Place Name"
            placeName={placeName}
            placeNameChangedHandler={this.placeNameChangedHandler}
            placeNameSubmitHandler={this.addPlace}
          />

          <View style={styles.button}>
            <Button title="Share the Place!" onPress={this.addPlace} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flex: 1,
    alignItems: "center"
  },
  button: {
    margin: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
