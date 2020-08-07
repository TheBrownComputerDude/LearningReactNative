import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FormInput from './components/FormInput';
import FlatButton from './components/FlatButton';
import Button from './components/Button';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    console.log('howdy');
    console.log(username);
    console.log(password);
  };

  return (
    <View style={styles.container}>
      <FormInput
        placeholder='Username...'
        onChangeText={setUsername}
      />
      <FormInput
        placeholder='Password...'
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <FlatButton size={11} text='Forget Password?' />
      <Button text='Login' onPress={handlePress} />
      <FlatButton size={20} text='Sign Up' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'floralwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginForm;
