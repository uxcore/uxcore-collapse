/**
 * Collapse Component for uxcore
 * @author vicent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import RcCollapse from 'rc-collapse';
const prefixCls = 'kuma-collapse';

class Collapse extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <RcCollapse {...this.props} />;
    }
}

Collapse.defaultProps = {
    prefixCls: prefixCls
};

Collapse.Panel = RcCollapse.Panel;

Collapse.displayName = "Collapse";

export default Collapse;
