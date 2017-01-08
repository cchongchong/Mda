import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import mdas from './mdaReducer';
import isps from './ispReducers';

const rootReducer = combineReducers({
  courses,
  authors,
  mdas,
  isps
});

export default rootReducer;
