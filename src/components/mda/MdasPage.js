import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mdaActions from '../../actions/mdaActions';
import MdaList from './MdaList';

class MdasPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    const {mdas}=this.props;
    return(
      <div>
        <h1>MDA Generated Forms</h1>
        <MdaList mdas={mdas}/>
      </div>
    );
  }
}

MdasPage.propTypes={
  mdas: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    mdas: state.mdas
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(mdaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MdasPage);
