import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";

const white = "white";

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    backgroundColor: white,
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4
  },
  input: {
    width: "100%",
    textAlign: "center"
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10
  }
});

import { Button } from "./Button";

export class ModalView extends Component {
  static propTypes = {
    isModalVisible: PropTypes.bool,
    placeholder: PropTypes.string,
    toggleModal: PropTypes.func,
    handleSubmit: PropTypes.func,
    error: PropTypes.object
  };

  state = {
    text: ""
  };

  render() {
    const { isModalVisible, placeholder, toggleModal, error } = this.props;

    return (
      <Modal isVisible={isModalVisible}>
        <View style={styles.content}>
          {error && <Text>{error.message}</Text>}
          <TextInput
            style={styles.input}
            autoFocus={true}
            placeholder={placeholder}
            onChangeText={this.onChangeText}
            value={this.state.text}
          />
          <View style={styles.buttons}>
            <Button onPress={this.onConfirm}>Confirm</Button>
            <Button onPress={toggleModal}>Cancel</Button>
          </View>
        </View>
      </Modal>
    );
  }

  onChangeText = text => {
    this.setState({ text });
  };

  onConfirm = () => {
    this.props.handleSubmit(this.state.text);
  };
}
