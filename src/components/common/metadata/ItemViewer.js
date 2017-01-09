import React, {PropTypes} from 'react';
import FreeText from './wrapper/viewer/FreeText';
import {get, toString} from 'lodash';

const ItemViewer = ({fieldNamePrefix, item, data}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  const value = get(data, currentFieldNamePrefix); //todo remove toString in the future
  //todo check item type and value type to select display wrapper
  const selectWrapper = (type) => {
    switch (type) {
      default:
        return (<FreeText
          name={currentFieldNamePrefix}
          label={item.DisplayName}
          value={toString(value)}/>);
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
