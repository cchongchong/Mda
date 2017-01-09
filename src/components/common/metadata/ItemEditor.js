import React, {PropTypes} from 'react';
import FreeText from './wrapper/editor/FreeText';
import {get, toString} from 'lodash';

const ItemEditor = ({fieldNamePrefix, item, data, onChange}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  const value = toString(get(data, currentFieldNamePrefix));//todo remove toString in the future
  //todo check item type and value type to select input wrapper
  return (<FreeText
    key={item.Name}
    name={currentFieldNamePrefix}
    label={item.DisplayName}
    value={value}
    onChange={onChange}/>);
};

ItemEditor.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ItemEditor;
