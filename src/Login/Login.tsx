// src/Login/Login.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {
    if (!email && !password) {
      setAlertMessage('Please fill both the input fields.');
      setAlertVisible(true);
    } else if (!email) {
      setAlertMessage('Please enter email or phone.');
      setAlertVisible(true);
    } else if (!password) {
      setAlertMessage('Password is missing.');
      setAlertVisible(true);
    } else {
      navigation.navigate('OTPScreen');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Book My Cook</Text>
        <Image
          source={require('../../assets/images/image1.png')}
          style={styles.image1}
        />
        <Image
          source={require('../../assets/images/image2.png')}
          style={styles.image2}
        />
        <View style={styles.formContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Email or phone number"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#888888"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              placeholderTextColor="#888888"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Icon
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              onPress={handleCheckboxToggle}
              style={styles.rememberMeContainer}>
              <View
                style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot password</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/google.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>GOOGLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/facebook.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>FACEBOOK</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account ? </Text>
            <TouchableOpacity>
              <Text style={styles.signupTextBold}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={alertVisible}
        animationType="slide"
        onRequestClose={() => setAlertVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalMessage}>{alertMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setAlertVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DB3B00',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    width: 209,
    height: 48,
    left: '50%',
    top: 60,
    transform: [{translateX: -104.5}],
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 48,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  image1: {
    position: 'absolute',
    width: 273,
    height: 164,
    left: 230,
    top: 80,
  },
  image2: {
    position: 'absolute',
    width: 161,
    height: 151,
    left: -49,
    top: 70,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    position: 'absolute',
    width: 360,
    height: 558,
    left: '50%',
    bottom: 0,
    transform: [{translateX: -180}],
    backgroundColor: 'rgba(242, 242, 242, 0.8)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  loginText: {
    width: 328,
    height: 28,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    color: '#DB3B00',
  },
  inputGroup: {
    width: 328,
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    marginVertical: 8,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: 'rgba(219, 59, 0, 0.4)',
    borderRadius: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#000000',
    padding: 8,
    backgroundColor: 'transparent',
  },
  eyeButton: {
    padding: 8,
  },
  optionsContainer: {
    width: 328,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#292D32',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#1aff00',
  },
  checkmark: {
    color: 'white',
    fontSize: 13,
  },
  rememberMeText: {
    width: 116,
    height: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: '#000000',
    marginLeft: 8,
  },
  forgotPasswordText: {
    width: 156,
    height: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'right',
    color: '#DB3B00',
  },
  loginButton: {
    width: 328,
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.5,
    backgroundColor: '#DB3B00',
    borderRadius: 12,
    marginVertical: 16,
  },
  loginButtonText: {
    width: 248,
    height: 19,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  separator: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 328,
    height: 19,
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 0,
    borderColor: 'rgba(219, 59, 0, 0.4)',
    borderWidth: 1,
  },
  orText: {
    width: 17,
    height: 19,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#303030',
    marginHorizontal: 8,
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 328,
    height: 48,
    marginVertical: 16,
  },
  socialButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 156,
    height: 48,
    padding: 12,
    backgroundColor: '#000000',
    borderColor: 'rgba(219, 59, 0, 0.4)',
    borderWidth: 1,
    borderRadius: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  socialButtonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  signupText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#303030',
  },
  signupTextBold: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    color: '#DB3B00',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#DB3B00',
    borderWidth: 2,
  },
  modalMessage: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#303030',
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#DB3B00',
    borderRadius: 5,
  },
  modalButtonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Login;
