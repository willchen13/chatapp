import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

class Chat extends Component {
  render() {
    return (
      <View>
        <Text> Hello Chat </Text>
      </View>
    );
  }
}

Chat.propTypes = {
  prop: PropTypes,
};

export default Chat;
