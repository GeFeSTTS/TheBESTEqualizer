import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import BlockOfSliders from './blockOfSliders';

configure({ adapter: new Adapter() });

describe('<BlockOfSliders />', () => {
  it('matches snapshot', () => {
    const props = {
      name: 'Delay',
      effects: {
        feedback: {
          value: 0,
          minValue: 0,
          maxValue: 1,
          step: 0.01,
        },
        time: {
          value: 0,
          minValue: 0,
          maxValue: 5,
          step: 0.001,
        },
        mix: {
          value: 0,
          minValue: 0,
          maxValue: 1,
          step: 0.001,
        },
      },
    };
    const wrapper = shallow(<BlockOfSliders {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
