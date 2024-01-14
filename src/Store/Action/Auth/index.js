import auth from '@react-native-firebase/auth';

import {UserType} from '../../../Constant';

export function signInWithPhoneNumber(phone) {
  return async function (dispatch, getState) {
    try {
      const response = await auth().signInWithPhoneNumber(phone);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export function storeUser(payload) {
  return {
    type: UserType.STORE_USER,
    payload,
  };
}
