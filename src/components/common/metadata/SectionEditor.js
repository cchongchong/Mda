import React, {PropTypes} from 'react';
import TextInput from '../TextInput';
import SelectInput from '../SelectInput';
import {get, toString} from 'lodash';

const SectionEditor = ({fieldNamePrefix, section, data, onChange}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + section.Name
    : section.Name;
  return (
    <fieldset>
      <legend>{section.DisplayName}</legend>
      <p>{section.Description}</p>
      {section && section.Items && section.Items.length > 0
        ? section
          .Items
          .map(item => <TextInput
            key={item.Name}
            name={currentFieldNamePrefix + "." + item.Name}
            label={item.DisplayName}
            value={get(data, currentFieldNamePrefix + "." + item.Name)}
            onChange={onChange}/>)
        : ""}
      {section && section.Sections && section.Sections.length > 0
        ? section
          .Sections
          .map(innerSection => <SectionEditor
            fieldNamePrefix={currentFieldNamePrefix}
            key={innerSection.Name}
            section={innerSection}
            data={data}
            onChange={onChange}/>)
        : ""}
    </fieldset>
  );
};

SectionEditor.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  section: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default SectionEditor;
