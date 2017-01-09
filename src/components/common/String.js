import React, {PropTypes} from 'react';
import {toString} from 'lodash';

const String = ({data}) => {
  return (
    <span>
      {toString(data)}
    </span>
  );
};

String.propTypes = {
  data: PropTypes.object.isRequired
};

export default String;
