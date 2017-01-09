import React, { PropTypes } from 'react';

class CollapsiblePanel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      collapsed: this.props.collapsed,
      headers: Object.assign([], props.headers)
    };
    this.exChangeCollapsed = this.exChangeCollapsed.bind(this);
  }

  exChangeCollapsed(event) {
    event.preventDefault();
    this.setState({ collapsed: !this.state.collapsed });
  }

  renderHeaders(headers) {
    return (headers || []).map((header) => header);
  }

  render() {
    const { collapsed, headers } = this.state;

    return (
      <div className="panel panel-default">
        <div className={`panel-heading ${collapsed ? 'collapsed' : 'expanded'}`} onClick={this.exChangeCollapsed}>
          <div className={`arrow ${collapsed ? 'collapse' : 'expand'}`}></div>
          <h4>{this.props.title}</h4>
          <div className="form-action TaskDetailLink">
            {this.renderHeaders(headers)}
          </div>
        </div>
        <div className={`panel-body ${collapsed ? 'hidden' : ''}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CollapsiblePanel.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  collapsed: PropTypes.bool.isRequired,
  headers: PropTypes.array
};

export default CollapsiblePanel;
