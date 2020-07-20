/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, USER_ID } from './constants';

export const initialState = {
  user_id: USER_ID,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case USER_ID:
        console.log('DEFAULT_ACTION', DEFAULT_ACTION);
        break;
    }
  });

export function todo() {
  return ['1', '2', '3'];
}

export default loginReducer;
