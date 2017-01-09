import React, {PropTypes} from 'react';
import String from '../../../String';

const FreeText = ({name, label, value}) => {

  return (
    <div className="form-group">
      <label className="control-label" htmlFor={name}>{label}</label>
      <div className="form-control-static">
        <String value={value}/>
      </div>
    </div>
  );
};

FreeText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default FreeText;
