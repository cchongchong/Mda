import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ispActions from '../../actions/ispActions';

class IspsPage extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    const {isps}=this.props;
    return(
      <div>
        <h1>ISPs</h1>
          <table className="table">
            <thead>
              <th>Name</th>
            </thead>
            <tbody>
              {isps.map(isp=>
                <tr key={isp.Id}>
                  <td><Link to={'/isp/'+isp.Id}>{isp.Name}</Link></td>
                </tr>
              )}
            </tbody>
          </table>
      </div>
    );
  }
}

IspsPage.propTypes={
  isps: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    isps: state.isps
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(ispActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IspsPage);
