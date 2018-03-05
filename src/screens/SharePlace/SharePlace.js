import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView
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
      placeName: "",
      location: null,
      placeImage: null
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.addPlace = this.addPlace.bind(this);
    this.placeNameChangedHandler = this.placeNameChangedHandler.bind(this);
    this.onLocationPick = this.onLocationPick.bind(this);
    this.onImagePick = this.onImagePick.bind(this);
  }

  static navigatorStyle = {
    navBarButtonColor: "orange"
  };

  onLocationPick(location) {
    this.setState(prevState => ({ location }));
  }

  onImagePick(placeImage) {
    this.setState(prevState => ({ placeImage }));
  }

  placeNameChangedHandler(placeName) {
    this.setState(prevState => ({ placeName }));
  }

  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress" && event.id === "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  }

  addPlace() {
    const { placeName, location, placeImage } = this.state;

    if (!placeName.trim()) {
      alert("Input is empty");
    } else {
      this.props.addPlace(placeName, location, placeImage);
      this.setState(prevState => ({ placeName: "" }));
    }
  }

  render() {
    const { placeName, location, placeImage } = this.state;
    const { isLoading } = this.props;
    let submitButton = (
      <Button
        title="Share the Place!"
        onPress={this.addPlace}
        disabled={!placeName || !location || !placeImage}
      />
    );

    if (isLoading) {
      submitButton = <ActivityIndicator size="large" />;
    }

    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>

          <View style={styles.inputWrap}>
            <PlaceInput
              placeholder="Place Name"
              placeName={placeName}
              placeNameChangedHandler={this.placeNameChangedHandler}
            />
          </View>

          <PickImage onImagePick={this.onImagePick} />

          <PickLocation onLocationPick={this.onLocationPick} />

          <View style={styles.button}>{submitButton}</View>
        </KeyboardAvoidingView>
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
  },
  inputWrap: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10
  }
});

const mapStateToProps = ({ uiReducer: { isLoading } }) => ({ isLoading });

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName, location, placeImage) =>
      dispatch(addPlace(placeName, location, placeImage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen);
