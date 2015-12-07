jest.dontMock('../js/components/switch.jsx');
jest.dontMock('../js/mixins/hash.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

// import Switch from '../js/components/switch.jsx';

const Switch = require('../js/components/switch.jsx').default;

describe('Test switch component', () => {

  it('changes the text after click', () => {

    // Render a checkbox with label in the document
    var checkbox = TestUtils.renderIntoDocument(
      <Switch labelOn="ON" labelOff="OFF" checked={true} />
    );

    var checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('ON');

    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));
    expect(checkboxNode.textContent).toEqual('OFF');
  });

  it('default value is OFF', () => {

    var checkbox = TestUtils.renderIntoDocument(
      <Switch labelOn="ON" labelOff="OFF" checked={false} />
    );
    var checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('OFF');
  });

  it('adds change event handler', () => {

    function listener(e, checked) {
      expect(checked).toEqual(true);
    }

    var checkbox = TestUtils.renderIntoDocument(
      <Switch labelOn="ON" labelOff="OFF" onClick={listener} />
    );

    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));

  });

});
