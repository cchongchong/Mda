import React, {PropTypes} from 'react';
import {get, toString} from 'lodash';

const ItemViewer = ({fieldNamePrefix, item, data}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + item.Name
    : item.Name;
  return (
    <p>
      {item.DisplayName}
      : {toString(get(data, currentFieldNamePrefix))}
    </p>
  );
};

ItemViewer.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default ItemViewer;
