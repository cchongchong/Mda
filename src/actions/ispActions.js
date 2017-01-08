import * as types from './actionTypes';
import ispApi from '../api/mockIspApi';

export function loadIspsSuccess(isps){
  return{
    type:types.LOAD_ISP_SUCCESS,
    isps
  };
}

export function updateIspSuccess(isp){
  return{
    type:types.UPDATE_ISP_SUCCESS,
    isp
  };
}

export function loadIsps(){
  return function(dispatch){
    return ispApi.getAllIsps().then(isps=>{
      dispatch(loadIspsSuccess(isps));
    }).catch(error=>{
      throw(error);
    });
  };
}

export function saveIsp(isp){
  return function(dispatch, getState){
    return ispApi.saveIsp(isp).then(savedIsp=>{
      dispatch(updateIspSuccess(savedIsp));
    }).catch(error=>{
      throw(error);
    });
  };
}
