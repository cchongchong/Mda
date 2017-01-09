import React, {PropTypes} from 'react';
import TextBox from '../TextBox';
import {get} from 'lodash';

const ItemEditor = ({fieldNamePrefix, item, data, onChange}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  const value = get(data, currentFieldNamePrefix);
  //todo check item type and value type to select input wrapper
  return (<TextBox
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