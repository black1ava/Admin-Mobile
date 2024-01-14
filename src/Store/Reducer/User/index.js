import {UserType} from '../../../Constant';

const initialState = {
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UserType.STORE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
