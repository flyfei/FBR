/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './EditBuilder.scss';
import EditModule from './module/EditModule';

class EditBuilder extends Component {

  render() {
    return (
      <EditModule
        index={1}
        onChange={this.handleQuestionChange}
        onRemove={this.handleQuestionRemove}
        text='Essay' questionType='essay' description='description'/>
    );
  }
  handleQuestionChange(key, newQuestion) {
    console.log('handleQuestionChange'+key +' '+newQuestion);

    // this.setState({ questions: questions });
  }

  handleQuestionRemove(key) {
    console.log('handleQuestionRemove'+key );
    // var questions = update(this.state.questions, {
    //   $splice: [[key, 1]]
    // });
    //
    // this.setState({ questions: questions });
  }
}

export default withStyles(EditBuilder, s);
