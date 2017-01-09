import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ispActions from '../../actions/ispActions';
import SectionEditor from '../common/metadata/SectionEditor';
import {set} from 'lodash';

class IspSectionEditPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isp: Object.assign({}, this.props.isp),
      errors: {}
    };

    this.updateIspState = this
      .updateIspState
      .bind(this);
    this.saveIsp = this
      .saveIsp
      .bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isp.Id != nextProps.isp.Id) {
      this.setState({
        isp: Object.assign({}, nextProps.isp)
      });
    }
  }

  updateIspState(changes) {
    if (changes && changes.length > 0) {
      let isp = this.state.isp;
      for (let change of changes) {
        set(isp, change.name, change.value);
      }
      this.setState({isp: isp});
    }
  }

  saveIsp(event) {
    event.preventDefault();
    this
      .props
      .actions
      .saveIsp(this.state.isp);
    this
      .context
      .router
      .push('/isps');
  }

  render() {
    return (
      <form>
        <SectionEditor
          fieldNamePrefix={this
          .props
          .path
          .substring(0, this.props.path.length - this.props.section.Name.length - 1)}
          section={this.props.section}
          data={this.state.isp}
          onChange={this.updateIspState}/>
        <input type="button" value="Save" className="btn btn-primary" onClick={this.saveIsp}/>
      </form>
    );
  }
}

IspSectionEditPage.propTypes = {
  isp: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

IspSectionEditPage.contextTypes = {
  router: PropTypes.object
};

function getIspMetadata(mdas) {
  const mda = mdas.filter(mda => mda.FormDescriptor == "ISP");
  if (mda)
    return mda[0];
  return null;
}

function getIspById(isps, id) {
  const isp = isps.filter(isp => isp.Id == id);
  if (isp)
    return isp[0];
  return null;
}

function getSectionByName(metadata, path) {
  if (metadata) {
    if (metadata.Sections) {
      let i = path.indexOf(".");
      let firstPath = i > 0
        ? path.substring(0, i)
        : path;
      for (let section of metadata.Sections) {
        if (section.Name === firstPath) {
          if (i > 0) {
            return getSectionByName(section, path.substring(i + 1, path.length));
          } else {
            return section;
          }
        }
      }
    }
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const path = ownProps.params.path;
  let section = getSectionByName(getIspMetadata(state.mdas), path);

  const ispId = ownProps.params.id;
  let isp = {
    Id: "",
    Name: "",
    Part1: null
  };
  if (ispId && state.isps.length > 0) {
    isp = getIspById(state.isps, ispId);
  }

  return {isp: isp, section: section, path: path};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ispActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IspSectionEditPage);
