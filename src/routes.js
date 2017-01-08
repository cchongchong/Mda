import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import MdasPage from './components/mda/MdasPage';
import MdaFormPage from './components/mda/MdaFormPage';
import IspsPage from './components/isp/IspsPage';
import IspSummaryPage from './components/isp/IspSummaryPage';
import IspSectionEditPage from './components/isp/IspSectionEditPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="mdas" component={MdasPage} />
    <Route path="mda" component={MdaFormPage} />
    <Route path="mda/:id" component={MdaFormPage} />
    <Route path="isps" component={IspsPage} />
    <Route path="isp" component={IspSummaryPage} />
    <Route path="isp/:id" component={IspSummaryPage} />
    <Route path="ispSectionEdit/:id/:path" component={IspSectionEditPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
