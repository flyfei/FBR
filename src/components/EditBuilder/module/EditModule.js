import React from 'react';
import merge from 'merge';
import ModuleHeadler from './ModuleHeadler';

var data = '';
class EditModule extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    description: React.PropTypes.string
  }
  state = {
    data:''
  }

  render() {
    // var description = this.props.question.description || "";
    var description = data;

    return (
      <ModuleHeadler type='essay' onRemove={this.handleRemove}>
        <label>Description</label>
        <input type='text' className='description' value={description} onChange={this.handleChange.bind(this)} />
      </ModuleHeadler>
    );
  }

  handleChange(ev) {
    // var question = merge(this.props.question, { description: ev.target.value });
    data = ev.target.value;
    this.props.onChange(this.props.index, ev.target.value);
    this.setState({data:data});
  }

  handleRemove() {
    this.props.onRemove(this.props.index);
  }
}

export default EditModule;
