import React from 'react';

import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const FormInput = ({ placeholder, onChangeText, secureTextEntry=false }) => {
    return (
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor='grey'
          onChangeText={onChangeText} />
      </View>
    );
};

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: 'gainsboro',
    borderColor: 'dimgrey',
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black'
  }
});

export default FormInput;
