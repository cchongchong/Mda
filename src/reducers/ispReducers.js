import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ispReducer(state = initialState.isps, action){
  switch(action.type){
    case types.LOAD_ISP_SUCCESS:
      return action.isps;

    case types.UPDATE_ISP_SUCCESS:
      return [...state.filter(isp=>isp.Id!==action.isp.Id),Object.assign({},action.isp)];

    default:
      return state;
  }
}
