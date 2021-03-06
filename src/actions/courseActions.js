import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  return{
    type:types.LOAD_COURSE_SUCCESS,
    courses
  };
}

export function createCourseSuccess(course){
  return{
    type:types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course){
  return{
    type:types.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function deleteCourseSuccess(courseId){
  return{
    type:types.DELETE_COURSE_SUCCESS,
    courseId
  };
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses=>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(error=>{
      throw(error);
    });
  };
}

export function saveCourse(course){
  return function(dispatch, getState){
    return courseApi.saveCourse(course).then(savedCourse=>{
      savedCourse.id?dispatch(updateCourseSuccess(savedCourse)):dispatch(createCourseSuccess(savedCourse));
    }).catch(error=>{
      throw(error);
    });
  };
}

export function deleteCourse(courseId){
  return function(dispatch, getState){
    return courseApi.deleteCourse(courseId).then(savedCourse=>{
      dispatch(deleteCourseSuccess(courseId));
    }).catch(error=>{
      throw(error);
    });
  };
}

