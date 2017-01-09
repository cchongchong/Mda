import React, {PropTypes} from 'react';
import {get} from 'lodash';
import CollapsiblePanel from '../CollapsiblePanel';
import ItemViewer from './ItemViewer';

const ArraySectionViewer = ({fieldNamePrefix, section, data}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + section.Name
    : section.Name;
  const list = get(data, currentFieldNamePrefix);
  //todo need business rule to avoid "MultiEntry" section has inner sections
  return (
    <CollapsiblePanel title={section.DisplayName} collapsed>
      <table>
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
                    .map(item => <td key={item.Name + index}><ItemViewer
                      fieldNamePrefix={currentFieldNamePrefix + "[" + index + "]"}
                      item={item}
                      data={data}/></td>)}</tr>
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
