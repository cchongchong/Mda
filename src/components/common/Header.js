import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header=()=>{
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/mdas" activeClassName="active">MDA Generated Forms</Link>
      {" | "}
      <Link to="/isps" activeClassName="active">ISPs</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
