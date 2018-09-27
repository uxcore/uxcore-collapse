import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import { polyfill } from 'react-lifecycles-compat';
import CollapsePanel from './Panel';
import util from './util';

class Collapse extends Component {
  static Panel = CollapsePanel

  static displayName = 'Collapse'


  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    activeKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    defaultActiveKey: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    onChange: PropTypes.func,
    accordion: PropTypes.bool,
    children: PropTypes.any,
  }

  static defaultProps = {
    prefixCls: 'kuma-collapse',
    onChange: util.noop,
    accordion: false,
    className: '',
    activeKey: undefined,
    defaultActiveKey: undefined,
    children: undefined,
  }


  constructor(props) {
    super(props);

    this.getItems = this.getItems.bind(this);
    this.getActivityKey = this.getActivityKey.bind(this);
    this.handleClickItem = this.handleClickItem.bind(this);

    const { activeKey, accordion } = props;
    let { defaultActiveKey } = props;
    // If is not accordion mode, then, defaultActiveKey should be an array
    if (!accordion) {
      defaultActiveKey = defaultActiveKey || [];
    }

    this.state = {
      activeKey: activeKey || defaultActiveKey,
    };
  }

  static getDerivedStateFromProps(props) {
    if ('activeKey' in props) {
      return {
        activeKey: props.activeKey,
      };
    }

    return null;
  }

  getItems() {
    const activeKey = this.getActivityKey();
    const { prefixCls, accordion, children } = this.props;

    return Children.map(children, (child, index) => {
      // If there is no key provide, use the panel order as default key
      const key = child.key || index;
      const { header } = child.props;
      let isActive = false;
      if (accordion) {
        isActive = activeKey === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      const props = {
        key,
        header,
        isActive,
        prefixCls,
        children: child.props.children,
        onItemClick: this.handleClickItem(key).bind(this),
      };

      return <CollapsePanel {...props} />;
    });
  }

  getActivityKey() {
    let { activeKey } = this.state;
    const { accordion } = this.props;
    if (accordion && Array.isArray(activeKey)) {
      activeKey = activeKey[0];
    }

    if (!accordion && !Array.isArray(activeKey)) {
      activeKey = activeKey ? [activeKey] : [];
    }
    return cloneDeep(activeKey);
  }

  handleClickItem(key) {
    return () => {
      const { accordion, onChange } = this.props;
      const activeKey = this.getActivityKey();
      if (accordion) {
        this.setState({
          activeKey: key === activeKey ? null : key,
        });
      } else {
        const index = activeKey.indexOf(key);
        const isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }

        this.setState({ activeKey });
      }
      onChange(key, activeKey);
    };
  }

  render() {
    const me = this;

    const className = classnames(me.props.prefixCls, {
      [me.props.className]: !!me.props.className,
    });

    return (
      <div className={className}>
        {me.getItems()}
      </div>
    );
  }
}

polyfill(Collapse);

export default Collapse;
