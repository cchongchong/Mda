import React, {PropTypes} from 'react';
import {get} from 'lodash';
import CollapsiblePanel from '../CollapsiblePanel';
import String from '../String';

const ArraySectionViewer = ({fieldNamePrefix, section, data}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + section.Name
    : section.Name;
  const list = get(data, currentFieldNamePrefix);
  //todo need business rule to avoid "MultiEntry" section has inner sections
  return (
    <CollapsiblePanel title={section.DisplayName} collapsed>
      <table className="table table-striped">
        <thead>
          {section
            .Items
            .map(item => (
              <th key={item.Name}>
                {item.DisplayName}
              </th>
            ))}
        </thead>
        <tbody>
          {list && list.length > 0 && section.Items && section.Items.length > 0
            ? list.map((value, index) => {
              return (
                <tr key={index}>{section
                    .Items
                    .map(item => <td key={item.Name + index}><String value={get(value, item.Name)}/></td>)}</tr>
              );
            })
            : ""}
        </tbody>
      </table>
    </CollapsiblePanel>
  );
};

ArraySectionViewer.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  section: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default ArraySectionViewer;
