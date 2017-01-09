import React, {PropTypes} from 'react';

const TextBox=({name, label, onChange, placeholder, value, error})=>{
  const prepareChanges=(event)=>{
    let changes=[];
    changes.push({name:event.target.name, value:event.target.value});
    onChange(changes);
  };

  let wrapperClass='form-group';
  if(error && error.length>0){
    wrapperClass+=" "+'has-error';
  }

  return(
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input type="text" name={name} className="form-control" placeholder={placeholder} value={value} onChange={prepareChanges}/>
        {error&&<div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextBox.propTypes={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextBox;
