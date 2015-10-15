---

## uxcore-collapse [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-collapse.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-collapse) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-collapse.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-collapse#info=devDependencies)

## TL;DR

uxcore-collapse ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-collapse
$ cd uxcore-collapse
$ npm install
$ gulp server
```

## Usage
```js
let Collapse = require('../src');
let Panel = Collapse.Panel;

ReactDOM.render(
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
	</Collapse>, target);
```

## demo
http://uxcore.github.io/uxcore/components/uxcore-collapse/

## API

## Props
### Collapse

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|activeKey | 当前激活 tab 面板的 key | Array or String | 默认无，accordion模式下默认第一个元素 |
|defaultActiveKey | 初始化选中面板的 key | String | 无 |
|onChange | 切换面板的回调 | Function | 无 |

### Collapse.Panel
#
| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|key | 对应 activeKey | String | 无 |
|header | 面板头内容 | React.Element or String | 无 |
