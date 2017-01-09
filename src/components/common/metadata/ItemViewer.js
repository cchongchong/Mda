import React, {PropTypes} from 'react';
import {get, toString} from 'lodash';

const ItemViewer = ({fieldNamePrefix, item, data}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  //todo check item type and value type to select display wrapper
  return (
    <span>
      {item.DisplayName}
      : {toString(get(data, currentFieldNamePrefix))}
    </span>
  );
};

ItemViewer.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default ItemViewer;
