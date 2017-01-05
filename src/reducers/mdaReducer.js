import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function mdaReducer(state = initialState.mdas, action){
  switch(action.type){
    case types.LOAD_MDA_SUCCESS:
      return action.mdas;

    default:
      return state;
  }
}
