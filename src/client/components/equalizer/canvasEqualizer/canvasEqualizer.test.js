import React from 'react';
import { shallow } from 'enzyme';

import CanvasEqualizer from './canvasEqualizer';

describe('Grafic equaliser', () => {
  const props = {
    width: 150,
    height: 100,
    getCanvasEl: () => {},
  };

  it('should render canvas element', () => {
    const nextProps = {
      ...props,
    };
    const nextContainer = shallow(<CanvasEqualizer {
                            ...nextProps
                        }
    />);
    expect(nextContainer.find('canvas')).toHaveLength(1);
  });

  it('should render component properly', () => {
    const nextProps = {
      ...props,
    };
    const nextContainer = shallow(<CanvasEqualizer {
                            ...nextProps
                        }
    />);
    expect(nextContainer.debug()).toMatchSnapshot();
  });
});
