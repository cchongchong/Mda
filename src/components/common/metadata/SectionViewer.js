import React, {PropTypes} from 'react';
import CollapsiblePanel from '../CollapsiblePanel';
import {Link} from 'react-router';
import ArraySectionViewer from './ArraySectionViewer';
import ItemViewer from './ItemViewer';

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
            .map(item => <div key={item.Name}><ItemViewer fieldNamePrefix={currentFieldNamePrefix} item={item} data={data}/></div>)
          : ""}
        {section && section.Sections && section.Sections.length > 0
          ? section
            .Sections
            .map(innerSection => innerSection.MultiEntry
              ? <ArraySectionViewer
                  key={innerSection.Name}
                  fieldNamePrefix={currentFieldNamePrefix}
                  section={innerSection}
                  data={data}/>
              : <SectionViewer
                key={innerSection.Name}
                fieldNamePrefix={currentFieldNamePrefix}
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
