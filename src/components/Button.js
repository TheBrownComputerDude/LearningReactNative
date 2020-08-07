import React from 'react';

import { StyleSheet, Text, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ text, onPress }) => {
    return(
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20
  },
  btn: {
    width: window.width * .8,
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  }
});

export default Button;