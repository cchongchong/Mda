import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ispActions from '../../actions/ispActions';
import SectionViewer from '../common/metadata/SectionViewer';

class ManageIspPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state={
      isp:Object.assign({}, this.props.isp),
      metadata:Object.assign({}, this.props.metadata)
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.isp.Id!=nextProps.isp.Id){
      this.setState({isp:Object.assign({},nextProps.isp)});
    }
    this.setState({metadata:Object.assign({},nextProps.metadata)});
  }

  render(){
    return(
      <div>
        <h1>{this.state.isp.Name}</h1>
        {this.state.metadata && this.state.metadata.Sections && this.state.metadata.Sections.length>0 ? this.state.metadata.Sections.map(section=>
          <SectionViewer key={section.Name} fieldNamePrefix="" section={section} data={this.state.isp} sectionEditLink="/ispSectionEdit"/>
          ):""
        }
      </div>
    );
  }
}

ManageIspPage.propTypes={
  isp: PropTypes.object.isRequired,
  metadata: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageIspPage.contextTypes={
  router: PropTypes.object
};

function getIspMetadata(mdas){
  const mda=mdas.filter(mda=>mda.FormDescriptor=="ISP");
  if(mda)return mda[0];
  return null;
}

function getIspById(isps, id){
  const isp=isps.filter(isp=>isp.Id==id);
  if(isp)return isp[0];
  return null;
}

function mapStateToProps(state, ownProps){
  let metadata=getIspMetadata(state.mdas);

  const ispId=ownProps.params.id;
  let isp={
    Id: "",
    Name: "",
    Part1: null
  };
  if(ispId && state.isps.length>0){
    isp=getIspById(state.isps,ispId);
  }

  return{
    isp: isp,
    metadata: metadata
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(ispActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageIspPage);
