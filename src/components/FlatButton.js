import React from 'react';

import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FlatButton = ({ size, text }) => {
  return(
    <TouchableOpacity>
      <Text style={styles.text, {fontSize: size}}>{text}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    text: {
        color: 'black',
    }
});

export default FlatButton;