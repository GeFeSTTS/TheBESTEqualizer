import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import RenderFormFields from './renderFormFields';

const defaultProps = {
  onInputChange: jest.fn(),
  fieldsToRender: [{
    name: '',
    label: '',
    type: '',
  }],
  userData: {},
  validationErrors: {},
};

const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<RenderFormFields {...setupProps} />);
};

describe('rendering component', () => {
  it('render login form field without error', () => {
    const fieldsToRender = [{
      name: 'email',
      label: 'Email',
      type: 'text',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'text',
    }];
    const wrapper = setup({ fieldsToRender });
    expect(wrapper.find('FormField')).toHaveLength(2);
  });
  it('render registration form field without error', () => {
    const fieldsToRender = [{
      type: 'text',
      name: 'username',
      label: 'Username',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
    {
      type: 'password',
      name: 'passwordConfirmation',
      label: 'Pasword confirmation',
    }];
    const wrapper = setup({ fieldsToRender });
    expect(wrapper.find('FormField')).toHaveLength(4);
  });
});

describe('testing ptopTypes', () => {
  it('does not throw warning with expected props', () => {
    checkProps(RenderFormFields, defaultProps);
  });
});

describe('snapshot', () => {
  it('should render formField properly', () => {
    const wrapper = setup();
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
