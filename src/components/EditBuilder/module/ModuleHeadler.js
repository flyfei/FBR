import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../EditBuilder.scss';

class ModuleHeadler extends React.Component {
  static propTypes = {
    type: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  }

  getTypeLabel() {
    return 'Headler Title';
  }

  render() {
    var className = 'edit-question well well-active ' + (this.props.className || "");

    return (
      <div className={className}>
        <div className='type'>
          {this.getTypeLabel()}
          <a className='remove' onClick={this.handleRemove}>
            <span className='glyphicon glyphicon-remove'/>
          </a>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }

  handleRemove() {
    if (confirm('Are you sure you want to delete this ' + this.getTypeLabel())) {
      this.props.onRemove(this.props.key);
    }
  }
}

export default ModuleHeadler;
