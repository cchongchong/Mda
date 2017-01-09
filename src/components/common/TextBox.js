import React, {PropTypes} from 'react';

const TextBox=({name, onChange, placeholder, value, error})=>{

  return(
      <div>
        <input type="text" name={name} className="form-control" placeholder={placeholder} value={value} onChange={onChange}/>
        {error&&<div className="alert alert-danger">{error}</div>}
      </div>
  );
};

TextBox.propTypes={
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextBox;
