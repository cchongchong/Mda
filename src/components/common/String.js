import React, {PropTypes} from 'react';
import {toString} from 'lodash';

const String = ({value}) => {
  return (
    <span>
      {toString(value)}
    </span>
  );
};

String.propTypes = {
  value: PropTypes.string.isRequired
};

export default String;
