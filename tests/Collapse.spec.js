import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Collapse, {Panel} from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Collapse', () => {
    it('Collapse has correct propTypes', () => {
        expect(Collapse.propTypes.prefixCls).to.be(PropTypes.string)
        expect(Collapse.propTypes.className).to.be(PropTypes.string)
        expect(Collapse.propTypes.activeKey).to.be.ok()
        expect(Collapse.propTypes.defaultActiveKey).to.be.ok()
        expect(Collapse.propTypes.onChange).to.be(PropTypes.func)
        expect(Collapse.propTypes.accordion).to.be(PropTypes.bool)
        expect(Collapse.propTypes.children).to.be(PropTypes.any)
    })

    it('Panel has correct propTypes', () => { 
        expect(Panel.propTypes.prefixCls).to.be(PropTypes.string)
        expect(Panel.propTypes.header).to.be.ok()
        expect(Panel.propTypes.isActive).to.be(PropTypes.bool)
        expect(Panel.propTypes.onItemClick).to.be(PropTypes.func)
        expect(Panel.propTypes.children).to.be(PropTypes.any)
    })

    let wrapper = mount(
        <Collapse defaultActiveKey={['1']} accordion={false}>
            <Panel header={'This is panel header 1'} key="1">
                <p>1</p>
            </Panel>
            <Panel header={'This is panel header 2'} key="2">
                <p>2</p>
            </Panel>
            <Panel header={'This is panel header 3'} key="3">
                <p>3</p>
            </Panel>
        </Collapse>
    )

    it('has correct defaultActiveKey', () => {
        expect(wrapper.state('activeKey')).to.eql(['1'])
    })

    it('has correct activeKey', () => {
        wrapper.setProps({
            activeKey: ['2']
        })
        expect(wrapper.state('activeKey')).to.eql(['2'])
    })

    it('has correct accordion', () => {
        wrapper.setProps({
            accordion: true
        })
        expect(wrapper.prop('accordion')).to.be(true)
    })

    it('has correct click', (done) => {
        wrapper.find('.kuma-collapse-header').at(2).simulate('click')
        expect(wrapper.state('activeKey')).to.eql(['2'])
        // 因为click后，需要等动画延迟后才会执行util.js中active和end
        setTimeout(() => {
            done()
        }, 1000)
    })
});