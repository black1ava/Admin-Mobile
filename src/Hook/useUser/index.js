import {useSelector} from 'react-redux';

export default function useUser() {
  return useSelector(function (state) {
    return state.User.user;
  });
}
