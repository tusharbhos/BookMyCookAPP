import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';

type OTPScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OTPScreen'
>;

type Props = {
  navigation: OTPScreenNavigationProp;
};

const OTPScreen: React.FC<Props> = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<TextInput[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image1.png')}
        style={styles.image1}
      />
      <Image
        source={require('../../assets/images/image2.png')}
        style={styles.image2}
      />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Enter your OTP</Text>
        <Text style={styles.subtitle}>
          Enter the verification code we just sent on your email address
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={input => (inputs.current[index] = input!)}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={value => handleOtpChange(index, value)}
              onKeyPress={({nativeEvent}) =>
                handleKeyPress(index, nativeEvent.key)
              }
              value={digit}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.verifyButtonText}>VERIFY</Text>
        </TouchableOpacity>
        <View style={styles.resendTextContainer}>
          <Text style={styles.resendText}>Didn't receive code ? </Text>
          <TouchableOpacity>
            <Text style={styles.resendTextBold}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#DB3B00',
  },
  title: {
    width: 328,
    height: 23,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
    color: '#DB3B00',
    marginBottom: 10,
  },
  subtitle: {
    width: 328,
    height: 38,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
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
    width: 141,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#B9B9B9',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#F5F5F5',
  },
  verifyButton: {
    width: 328,
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12.5,
    backgroundColor: '#DB3B00',
    borderRadius: 12,
    marginBottom: 20,
  },
  verifyButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  resendTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  resendText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#303030',
  },
  resendTextBold: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: '#DB3B00',
  },
});

export default OTPScreen;
