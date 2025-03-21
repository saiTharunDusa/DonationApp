import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import Style from './Style';
const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[Style.button, props.isDisabled && Style.disabled]}
      onPress={() => props.onPress()}>
      <Text style={Style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
