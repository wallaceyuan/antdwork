import React, {Component} from 'react';
import './style.scss';
import img1 from '../../../imgs/favicon.png';
import Affix from 'antd/lib/affix';

export default class Test extends Component {
  render() {
    return (
      <div>
        <img src={img1}/>
        <Affix>
          test
        </Affix>
      </div>
    )
  }
}
