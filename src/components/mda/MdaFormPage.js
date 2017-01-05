import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mdaActions from '../../actions/mdaActions';
import Section from './Section';

class ManageMdaPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state={
      mda:Object.assign({}, this.props.mda),
      formDate:{},
      errors:{}
    };

    this.updateState=this.updateState.bind(this);
    this.onSave=this.onSave.bind(this);
  }

  updateState(event){
    const field=event.target.name;
    const changedValue=event.target.value;
    this.state.formDate[field]=changedValue;
  }

  onSave(){
    alert(JSON.stringify(this.state.formDate));
  }

  render(){
    return(
      <div>
        <h1>Edit MDA Generated Form</h1>
        <form>
            {this.state.mda.Sections.map(section=>
              <Section key={section.Name} fieldNamePrefix="" section={section} onChange={this.updateState}/>
            )}
            <input type="button" value="Save" onClick={this.onSave}/>
        </form>
      </div>
    );
  }
}

ManageMdaPage.propTypes={
  mda: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageMdaPage.contextTypes={
  router: PropTypes.object
};

function getMdaById(mdas, id){
  const mda=mdas.filter(mda=>mda.Id==id);
  if(mda)return mda[0];
  return null;
}

function mapStateToProps(state, ownProps){
  const mdaId=ownProps.params.id;

  let mda={
    Id: "",
    Name: "",
    Sections: []
  };

  if(mdaId && state.mdas.length>0){
    mda=getMdaById(state.mdas,mdaId);
  }
  return{
    mda: mda
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(mdaActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMdaPage);
