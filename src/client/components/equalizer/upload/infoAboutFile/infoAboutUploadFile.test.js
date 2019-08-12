import React from 'react';
import { shallow } from 'enzyme';

import InfoAboutTrack from './infoAboutUploadFile';

describe('test infoAboutUploadFile component', () => {
  const props = {
    trackname: 'fakeName',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<InfoAboutTrack {...props} />);
  });

  it('should render element with `trackname`', () => {
    expect(wrapper.find('div').text()).toEqual('<FontAwesomeIcon />Track name: fakeName');
  });

  it('should render component properly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
