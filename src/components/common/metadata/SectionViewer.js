import React, {PropTypes} from 'react';
import CollapsiblePanel from '../CollapsiblePanel';
import {get, toString} from 'lodash';
import {Link} from 'react-router';

const SectionViewer = ({fieldNamePrefix, section, data, sectionEditLink}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + section.Name
    : section.Name;
  let headers = [];
  if (section.Items && section.Items.length > 0) {
    headers = [(
        <Link
          key={currentFieldNamePrefix}
          to={sectionEditLink + '/' + data.Id + '/' + currentFieldNamePrefix}>Edit</Link>
      )];
  }
  return (
    <CollapsiblePanel title={section.DisplayName} collapsed headers={headers}>
      <div>
        {section && section.Items && section.Items.length > 0
          ? section
            .Items
            .map(item => <p key={item.Name}>
              {item.DisplayName}
              : {toString(get(data, currentFieldNamePrefix + "." + item.Name))}
            </p>)
          : ""}
        {section && section.Sections && section.Sections.length > 0
          ? section
            .Sections
            .map(innerSection => <SectionViewer
              fieldNamePrefix={currentFieldNamePrefix}
              key={innerSection.Name}
              section={innerSection}
              data={data}
              sectionEditLink={sectionEditLink}/>)
          : ""}
      </div>
    </CollapsiblePanel>
  );
};

SectionViewer.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  section: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  sectionEditLink: PropTypes.string.isRequired
};

export default SectionViewer;
