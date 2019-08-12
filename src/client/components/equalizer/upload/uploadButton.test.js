import React from 'react';
import { mount } from 'enzyme';
import {
  storeFactory,
} from '../../../test/testUtils';

import UploadButton from './uploadButton';

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn();
  mockPizzicato.context = jest.fn(() => ({}));
  mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
  mockPizzicato.Effects = jest.fn(() => {});
  const effects = ['Delay', 'PingPongDelay', 'DubDelay', 'Distortion', 'Quadrafuzz', 'Flanger',
    'Reverb', 'Tremolo', 'StereoPanner', 'Compressor', 'LowPassFilter', 'HighPassFilter', 'RingModulator',
  ];
  effects.forEach((effect, el) => {
    mockPizzicato.Effects[effect] = jest.fn(() => function Effect() {
      return {
        effect: () => (`fakeEffect${el}`),
      };
    });
  });
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});

const handleInfoFromSound = jest.fn();

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(<UploadButton handleInfoFromSound={handleInfoFromSound} store={store} />);
  return wrapper;
};

describe('test `infoAboutUploadFile` component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render component properly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should handle event change on input element', () => {
    wrapper.find('input').simulate('change');

    expect(handleInfoFromSound).toHaveBeenCalled();
  });
});
