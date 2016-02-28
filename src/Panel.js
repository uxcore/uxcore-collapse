import React, { PropTypes, createClass } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const CollapsePanel = createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ]),
    isActive: PropTypes.bool,
    onItemClick: PropTypes.func,
  },

  getInitialState() {
    return {isActive: this.props.isActive};
  },

  getDefaultProps() {
    return {
      isActive: false,
      onItemClick() {
      },
    };
  },

  handleItemClick() {
    this.props.onItemClick();
  },

  render() {
    const { prefixCls, header, children, isActive } = this.props;
    const headerCls = `${prefixCls}-header`;
    const contentCls = classnames({
      [`${prefixCls}-content`]: true,
      [`${prefixCls}-content-active`]: isActive,
    });

    return (
      <div className={`${prefixCls}-item`}>
        <div className={headerCls} onClick={this.handleItemClick}
             role="tab" aria-expanded={isActive}>
          <i className="arrow"></i>
          {header}
        </div>
          <div className={contentCls}
               data-active={isActive}
               role="tabpanel">
            <div className={`${prefixCls}-content-box`}>{children}</div>
          </div>
      </div>
    );
  },
});

export default CollapsePanel;