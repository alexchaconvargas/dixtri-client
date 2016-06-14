import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';
import Header from '../../src/components/vacancyManager/Header';

describe('Header', () => {

  it('renders a pair of buttons', () => {
    const component = renderIntoDocument(
      <Header menuItems={["Trainspotting", "28 Days Later"]} />
    );

    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(buttons.length).to.equal(2);
    expect(buttons[0].textContent).to.equal('Trainspotting');
    expect(buttons[1].textContent).to.equal('28 Days Later');
  });

});