import React, {PropTypes} from 'react';
import FreeText from './wrapper/editor/FreeText';
import {get} from 'lodash';

const ItemEditor = ({fieldNamePrefix, item, data, onChange}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  const value = get(data, currentFieldNamePrefix);
  //todo check value type in selected input wrapper
  const selectWrapper = (type) => {
    switch (type) {
      default:
        return (<FreeText
          key={item.Name}
          name={currentFieldNamePrefix}
          label={item.DisplayName}
          value={value}
          onChange={onChange}/>);
    }
  };
  return (selectWrapper(item.SectionItemType));
};

ItemEditor.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemEditor;
