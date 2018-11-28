import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
  hasLogin: false
});


export default  (state = defaultState, action)=>{
    switch(action.type) {
        case constants.HANDLE_LOGIN:
            return state.set('hasLogin', action.hasLogin);
        default:
            return state;
    }
}