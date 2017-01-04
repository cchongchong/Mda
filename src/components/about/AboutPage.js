import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component{
  render(){
    return(
      <div>
        <h1>About</h1>
        <p>This appllication uses React, Redux and React Router in ES6</p>
        <Link to="/" className="btn btn-primary btn-lg">Go back to home</Link>
      </div>
    );
  }
}

export default AboutPage;
