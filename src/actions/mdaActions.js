import * as types from './actionTypes';
import mdaApi from '../api/mockMdaApi';

export function loadMdasSuccess(mdas){
  return{
    type:types.LOAD_MDA_SUCCESS,
    mdas
  };
}

export function loadMdas(){
  return function(dispatch){
    return mdaApi.getAllMdas().then(mdas=>{
      dispatch(loadMdasSuccess(mdas));
    }).catch(error=>{
      throw(error);
    });
  };
}
