import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';


const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation=useNavigation()
  const change=()=>{
    return navigation.navigate('ForgotPassword');
  }
  // const onLogin = () => {
  //   // replace with real auth / navigation
  //   console.log('login pressed', { username, password });
  //   if (navigation && navigation.navigate) navigation.navigate('Home');
  // };
  const onLogin=()=>{
     console.warn("pressed");
    return navigation.navigate('Home')
  }
 
  return (
    <SafeAreaView style={styles.safe}>

      <StatusBar barStyle="light-content" backgroundColor="#4a69bd" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subtitle}>
          Login to your account and start managing products
        </Text>

        
       <Image 
          source={require('../../Assets/login/Vector-4.png')} 
          style={{ width: 150, height: 100, resizeMode: 'contain' }} 
        />
        <Text style={styles.logoText}>Bahupada</Text>
        <View style={styles.inputContainer}>
        
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#d1d5db"
            autoCapitalize="none"
            returnKeyType="next"
          />
        </View>

        <View style={styles.inputContainer}>
          
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#d1d5db"
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="done"
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={onLogin} activeOpacity={0.85}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={change}
        >
          <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#4a69bd' },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#d1d5db',
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 70,
    marginBottom: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    color: '#fff',
    fontSize: 16,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonIcon: {
    marginRight: 10,
  },
  loginButtonText: {
    color: '#3b59a8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
