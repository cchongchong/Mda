import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import mdas from './mdaReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  mdas
});

export default rootReducer;
