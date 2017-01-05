import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import MdasPage from './components/mda/MdasPage';
import MdaFormPage from './components/mda/MdaFormPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="mdas" component={MdasPage} />
    <Route path="mda" component={MdaFormPage} />
    <Route path="mda/:id" component={MdaFormPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
