import React from 'react';
import { shallow } from 'enzyme';
import ToggleZone from './toggleZone';

describe('Toggle Zone Component', () => {
  let wrapper;

  const fakeChilds = {
    children: React.createElement('div'),
  };

  beforeEach(() => {
    wrapper = shallow(<ToggleZone {...fakeChilds} />);
  });

  it('should render ToggleZone component properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onClick action on ToggleZone button', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).toEqual('Hide Effects');
  });
});
