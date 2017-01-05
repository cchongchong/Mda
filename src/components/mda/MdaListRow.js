import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const MdaListRow = ({mda})=>{
  return(
    <tr>
      <td><Link to={'/mda/'+mda.Id}>{mda.Name}</Link></td>
    </tr>
  );
};

MdaListRow.propTypes={
  mda: PropTypes.object.isRequired
};

export default MdaListRow;
