import React, {PropTypes} from 'react';
import String from '../../../String';
import {toString} from 'lodash';

const FreeText = ({name, label, value}) => {

  return (
    <div className="form-group">
      <label className="control-label" htmlFor={name}>{label}</label>
      <div className="form-control-static">
        <String value={toString(value)}/>
      </div>
    </div>
  );
};

FreeText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any
};

export default FreeText;
