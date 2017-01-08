import React, {PropTypes} from 'react';
import ItemEditor from './ItemEditor';

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
          .map(item => <ItemEditor
            key={item.Name}
            fieldNamePrefix={currentFieldNamePrefix}
            item={item}
            data={data}
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
