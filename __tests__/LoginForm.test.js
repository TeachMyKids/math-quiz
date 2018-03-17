import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('Boilerplate', function () {
  it('should do boilerplate things', function () {
    // TODO: test something now
    expect(true).to.equal(true);
  });
});
