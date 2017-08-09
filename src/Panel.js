import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Animate from 'uxcore-animate';
import util from './util';

export default class CollapsePanel extends Component {
  static displayName = 'CollapsePanel'

  static propTypes = {
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
    children: PropTypes.any,
  }

  static defaultProps = {
    isActive: false,
    onItemClick: util.noop,
  }

  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
    this.renderPanel = this.renderPanel.bind(this);

    this.state = {
      isActive: props.isActive,
    };
  }

  handleItemClick(e) {
    this.props.onItemClick(this.props.isActive, e);
  }

  renderPanel() {
    const { prefixCls, children, isActive } = this.props;

    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
    });

    if (isActive) {
      return (
        <div
          className={contentCls}
          data-active={isActive}
          role="tabpanel"
        >
          <div className={`${prefixCls}-content-box`}>{children}</div>
        </div>
      );
    }
    return null;
  }

  render() {
    const { prefixCls, header, isActive } = this.props;

    const headerCls = `${prefixCls}-header fn-text-overflow`;

    const arrowCls = isActive ? 'arrow-active' : 'arrow';

    return (
      <div className={`${prefixCls}-item`}>
        <div
          className={headerCls}
          onClick={this.handleItemClick}
          role="tab"
          aria-expanded={isActive}
        >
          <i className={arrowCls}></i>
          {header}
        </div>
        <Animate
          component=""
          animation={{
            enter: (node, done) => { util.toggleHeightAnim(node, true, done); },
            leave: (node, done) => { util.toggleHeightAnim(node, false, done); },
          }}
        >
          {this.renderPanel()}
        </Animate>

      </div>
    );
  }
}
