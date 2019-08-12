import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import FormField from './formField';

const defaultProps = {
  onInputChange: jest.fn(),
  value: '',
  error: '',
  field: {
    name: '',
    label: '',
    type: '',
  },
};

const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

describe('testing render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FormField {...defaultProps} />);
  });
  it('should render formField properly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('should call "onInputChange" function', () => {
    wrapper.find('input').simulate('change');
    expect(defaultProps.onInputChange).toHaveBeenCalled();
  });
});

describe('testing ptopTypes', () => {
  it('does not throw warning with expected props', () => {
    checkProps(FormField, defaultProps);
  });
});
