import React, {PropTypes, createClass} from 'react';
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

    handleItemClick(e) {
        this.props.onItemClick(this.props.isActive, e);
    },

    render() {
        const {prefixCls, header, children, isActive} = this.props;
        const headerCls = `${prefixCls}-header fn-text-overflow`;
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