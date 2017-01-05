import React, {PropTypes} from 'react';
import MdaListRow from './MdaListRow';

const MdaList = ({mdas})=>{
  return(
    <table className="table">
      <thead>
        <th>Name</th>
      </thead>
      <tbody>
        {mdas.map(mda=>
          <MdaListRow key={mda.Id} mda={mda}/>
        )}
      </tbody>
    </table>
  );
};

MdaList.propTypes={
  mdas: PropTypes.array.isRequired
};

export default MdaList;
