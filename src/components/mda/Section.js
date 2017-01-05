import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const Section=({fieldNamePrefix, section, onChange})=>{
  return(
    <fieldset>
      <legend>{section.DisplayName}</legend>
      {section.Description?<p>section.Description</p>:""}
      {section.Items.map(item=>
        <TextInput key={item.Name} name={fieldNamePrefix+"."+item.Name} label={item.DisplayName} onChange={onChange}/>
      )}
      {section.Sections.map(innerSection=>
        <Section fieldNamePrefix={fieldNamePrefix?fieldNamePrefix+"."+section.Name+"."+innerSection.Name:section.Name+"."+innerSection.Name} key={innerSection.Name} section={innerSection} onChange={onChange}/>
      )}
    </fieldset>
  );
};

Section.propTypes={
  fieldNamePrefix:PropTypes.string.isRequired,
  section:PropTypes.object.isRequired,
  onChange:PropTypes.func.isRequired,
  loading:PropTypes.bool,
  errors:PropTypes.object
};

export default Section;
