import React, {PropTypes} from 'react';
import FreeText from './wrapper/viewer/FreeText';
import {get} from 'lodash';

const ItemViewer = ({fieldNamePrefix, item, data}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  const value = get(data, currentFieldNamePrefix);
  //todo check value type in selected display wrapper
  const selectWrapper = (type) => {
    switch (type) {
      default:
        return (<FreeText
          name={currentFieldNamePrefix}
          label={item.DisplayName}
          value={value}/>);
    }
  };
  return (selectWrapper(item.SectionItemType));
};

ItemViewer.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default ItemViewer;
