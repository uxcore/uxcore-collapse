/**
 * Collapse Component Demo for uxcore
 * @author vicent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React, { Component } from 'react';
import Collapse, { Panel } from '../src';

let text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class Demo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange(key) {
    console.log(key);
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>可以同时展开多个面板，这个例子默认展开了第一个。</h2>
        <Collapse defaultActiveKey={['1']} onChange={this.handleChange}>
          <Panel header={'This is panel header 1'} key="1">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 2'} key="2">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 3'} key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <h2>手风琴，每次只打开一个tab。默认打开第一个。</h2>
        <Collapse accordion>
          <Panel header={'This is panel header 1'} key="1">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 2'} key="2">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 3'} key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <h2>手风琴嵌套折叠面板</h2>
        <Collapse onChange={this.handleChange} accordion>
          <Panel header={'This is panel header 1'} key="1">
            <Collapse defaultActiveKey="1">
              <Panel header={'This is panel nest panel'} key="1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header={'This is panel header 2'} key="2">
            <p>{text}</p>
          </Panel>
          <Panel header={'This is panel header 3'} key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
