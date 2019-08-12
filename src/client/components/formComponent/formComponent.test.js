import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import FormComponent from './formComponent';

const defaultProps = {
  fieldsToRender: [],
  userData: {},
  onFormSubmit: jest.fn(),
  onInputChange: jest.fn(),
  loading: false,
};

const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

describe('testing render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FormComponent {...defaultProps} />);
  });
  it('should render FormComponent properly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  it('test calling "onFormSubmit" function on click event', () => {
    wrapper.find('Button').simulate('click');
    expect(defaultProps.onFormSubmit).toHaveBeenCalled();
  });
  it('test button value when {loading: false}', () => {
    expect(wrapper.find('Button').prop('value')).toBe('Submit');
    expect(wrapper.find('Button').prop('disabled')).toBe(null);
  });
  it('test button value when {loading: true}', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find('Button').prop('value').type).toBe('img');
    expect(wrapper.find('Button').prop('disabled')).toBe('disabled');
  });
});

describe('testing ptopTypes', () => {
  it('does not throw warning with expected props', () => {
    checkProps(FormComponent, defaultProps);
  });
});
