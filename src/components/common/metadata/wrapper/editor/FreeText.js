import React, {PropTypes} from 'react';
import TextBox from '../../../TextBox';

const FreeText=({name, label, onChange, placeholder, value, error})=>{
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
      <TextBox name={name} placeholder={placeholder} value={value} onChange={prepareChanges}/>
    </div>
  );
};

FreeText.propTypes={
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default FreeText;
