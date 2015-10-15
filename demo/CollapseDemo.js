/**
 * Collapse Component Demo for uxcore
 * @author vicent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
let Collapse = require('../src');
let Panel = Collapse.Panel;

function callback(key){
    console.log(key);
}
var text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p>可以同时展开多个面板，这个例子默认展开了第一个。</p>
                <Collapse defaultActiveKey={["1"]} onChange={callback}>
                    <Panel header={`This is panel header 1`} key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={`This is panel header 2`} key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={`This is panel header 3`} key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <p>手风琴，每次只打开一个tab。默认打开第一个。</p>
                <Collapse accordion={true}>
                    <Panel header={`This is panel header 1`} key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={`This is panel header 2`} key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={`This is panel header 3`} key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <p>手风琴嵌套折叠面板</p>
                <Collapse onChange={callback} accordion={true}>
                    <Panel header={`This is panel header 1`} key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header={`This is panel nest panel`} key="1">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header={`This is panel header 2`} key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header={`This is panel header 3`} key="3">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

module.exports = Demo;
