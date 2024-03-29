import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {widthToDP as wp} from 'react-native-responsive-screens';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {GoogleSignin as RNGoogleSignIn} from '@react-native-google-signin/google-signin';

import {styles} from './styles';
import {
  AutoHeightFastImage,
  PhoneInput,
  Button,
  BottomSheet,
  OTP,
  GoogleSignin,
  Alert,
} from '../../Component';
import {AuthActions} from '../../Store/Action';
import {User} from '../../Model';
import {GOOGLE_WEB_CLIENT_ID} from '../../Constant';

function Login() {
  const [phone, setPhone] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const dispatch = useDispatch();
  const [signInPhoneNumberLoading, setSignInPhoneNumberLoading] =
    useState(false);
  const [otpIndex, setOtpIndex] = useState(-1);
  const otpRef = useRef(null);
  const [alert, setAlert] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState();

  const handlePhoneChange = useCallback(function (value) {
    setPhone(value);
  }, []);

  const handleKeyboardDismiss = useCallback(function () {
    Keyboard.dismiss();
  }, []);

  const handleSignInPhoneNumberLoadingToggle = useCallback(function () {
    setSignInPhoneNumberLoading(function (state) {
      return !state;
    });
  }, []);

  const handleOtpIndexChange = useCallback(
    function () {
      if (otpIndex === 0) {
        setOtpIndex(-1);
        otpRef.current.close();
        return;
      }

      setOtpIndex(0);
    },
    [otpIndex],
  );

  const handleLogin = useCallback(
    async function () {
      if (phone === '') {
        handleAlertToggle();
        return;
      }

      handleSignInPhoneNumberLoadingToggle();
      try {
        const phoneNumber = phone[0] === '0' ? phone.substring(1) : phone;
        const formattedPhone = `+855${phoneNumber}`;
        const confirmation = await dispatch(
          AuthActions.signInWithPhoneNumber(formattedPhone),
        );
        setConfirmation(confirmation);

        handleOtpIndexChange();
      } catch (error) {
        console.error('error', error);
      } finally {
        handleSignInPhoneNumberLoadingToggle();
      }
    },
    [
      dispatch,
      phone,
      handleSignInPhoneNumberLoadingToggle,
      handleOtpIndexChange,
      handleAlertToggle,
    ],
  );

  const handleAlertToggle = useCallback(function () {
    setAlert(function (state) {
      return !state;
    });
  }, []);

  const handleVerifyLoadingToggle = useCallback(function () {
    setVerifyLoading(function (state) {
      return !state;
    });
  }, []);

  const handelVerify = useCallback(
    async function (value) {
      handleVerifyLoadingToggle();

      try {
        await confirmation.confirm(value);
      } catch (error) {
        console.error('Error', error);
      } finally {
        handleVerifyLoadingToggle();
      }
    },
    [handleVerifyLoadingToggle, confirmation],
  );

  const onAuthStateChanged = useCallback(
    async function (user) {
      if (user) {
        const data = new User(
          user.uid,
          user.displayName,
          user.phoneNumber,
          user.email,
        );

        dispatch(AuthActions.storeUser(data));
        await auth().signOut();
        handleOtpIndexChange();
      }
    },
    [dispatch, handleOtpIndexChange],
  );

  useEffect(function () {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  RNGoogleSignIn.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
  });

  const handleGoogleSignInPress = useCallback(
    async function () {
      handleGoogleLoadingToggle();
      try {
        await RNGoogleSignIn.hasPlayServices({
          showPlayServicesUpdateDialog: true,
        });
        const {idToken} = await RNGoogleSignIn.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
      } catch (error) {
        console.error('error', error);
      } finally {
        handleGoogleLoadingToggle();
      }
    },
    [handleGoogleLoadingToggle],
  );

  const handleGoogleLoadingToggle = useCallback(function () {
    setGoogleLoading(function (state) {
      return !state;
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="height">
        <View style={styles.container}>
          <AutoHeightFastImage
            source={require('../../assets/logo.png')}
            width={wp('30%')}
          />
          <PhoneInput
            placeholder="Please input your phone number"
            value={phone}
            onChangeValue={handlePhoneChange}
          />
          <Button
            title="Login"
            onPress={handleLogin}
            loading={signInPhoneNumberLoading}
          />
          <Text style={styles.or}>OR</Text>
          <GoogleSignin
            onPress={handleGoogleSignInPress}
            loading={googleLoading}
          />
          <Alert
            visible={alert}
            title="An error has occurred"
            description="Your phone number is invalid"
            actions={{
              action: {
                title: 'Okay',
                onAction: handleAlertToggle,
              },
            }}
          />
          <BottomSheet snapPoints={['60%']} index={otpIndex} ref={otpRef}>
            <OTP
              phone={phone}
              onClose={handleOtpIndexChange}
              onVerify={handelVerify}
              loading={verifyLoading}
            />
          </BottomSheet>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(Login);
