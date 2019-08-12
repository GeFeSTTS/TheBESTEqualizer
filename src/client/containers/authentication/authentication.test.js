import checkPropTypes from 'check-prop-types';
import React from 'react';
import { shallow } from 'enzyme';
import { Authentication } from './authentication';
import { formValidation } from '../../helpers/formValidation';
import { fieldsInfo } from '../../helpers/constants';

jest.mock('../../helpers/constants', () => ({
  fieldsInfo: [
    {
      label: 'RegisterLabel',
      isMember: false,
    },
    {
      label: 'LoginLabel',
      isMember: true,
    }],
}));

jest.mock('../../helpers/formValidation');

const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};

const defaultProps = {
  authFailAction: jest.fn(),
  onAuth: jest.fn(),
  history: {},
  loading: false,
  error: null,
};

describe('render Auth', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Authentication {...defaultProps} />);
  });

  describe('render <Auth />', () => {
    it('should render Authentication properly', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  describe('updation state with server validation errors', () => {
    it('Update state if there are server errors', () => {
      wrapper.setProps({ error: { email: 'server error' } });
      expect(wrapper.state().validationErrors).toEqual({ email: 'server error' });
    });
    it('Does not update state if there are no server errors', () => {
      wrapper.setProps({ error: {} });
      expect(wrapper.state().validationErrors).toEqual({});
    });
  });

  describe('test "onFormSubmit" functionality', () => {
    const testingOnFormSubmit = (fakeErrors) => {
      formValidation.mockReturnValue(fakeErrors);
      wrapper.update();
      wrapper.instance().onFormSubmit();
    };
    it('it should setState when "formValidation" did not pass', () => {
      const fakeErrors = { email: 'fake email is not valid' };
      testingOnFormSubmit(fakeErrors);
      expect(wrapper.instance().state.validationErrors).toEqual(fakeErrors);
    });

    it('it should call action when "formValidation" was passed', () => {
      const fakeErrors = {};
      testingOnFormSubmit(fakeErrors);
      expect(wrapper.instance().props.onAuth).toBeCalled();
    });
  });

  describe('test "onInputChange" functionality', () => {
    it('it should setState when "onInputChange" is called', () => {
      const fakeInputData = { email: 'fakeEmail' };
      wrapper.instance().onInputChange({ target: { name: 'email', value: 'fakeEmail' } });
      expect(wrapper.instance().state.userData).toEqual(fakeInputData);
    });
  });

  describe('test if user already has an account', () => {
    it('the initial state of "isMember" should be "true"', () => {
      expect(wrapper.state().isMember).toBe(true);
    });
    it('"onLinkClick" should toggle the state of "isMember', () => {
      const expectedState = !wrapper.state().isMember;
      wrapper.instance().onLinkClick();
      wrapper.update();
      expect(wrapper.state().isMember).toBe(expectedState);
      expect(wrapper.instance().props.error).toEqual(null);
    });
    it('should called "onLinkClick" function on "click" event', () => {
      const testClick = jest.spyOn(wrapper.instance(), 'onLinkClick');
      wrapper.instance().forceUpdate();
      wrapper.find('.message').simulate('click');
      expect(testClick).toHaveBeenCalled();
    });
  });

  describe('Fields info to render', () => {
    it('should render "Login" form first', () => {
      wrapper.instance().setState({ userData: { email: 'fakeEmail', password: 'fakePassword' } });
      const expectedResult = {
        fildsToRender: [{
          label: 'LoginLabel',
          isMember: true,
        }],
        formTitle: 'Login',
        message: 'Dont have an account? Register!',
        path: '/login',
        data: wrapper.instance().state.userData,
      };
      expect(wrapper.instance().isMemberInfo(fieldsInfo).fildsToRender.length).toBe(1);
      expect(wrapper.instance().isMemberInfo(fieldsInfo)).toEqual(expectedResult);
    });
    it('should render "Registration" form when user is not member yet', () => {
      wrapper.instance().setState({
        userData: {
          email: 'fakeEmail',
          password: 'fakePassword',
          username: 'fakeUser',
          passwordConfirmation: 'fakePassword',
        },
        isMember: false,
      });
      const expectedResult = {
        fildsToRender: fieldsInfo,
        formTitle: 'Registration',
        message: 'Already have an account? Login!',
        path: '/registration',
        data: wrapper.instance().state.userData,
      };
      expect(wrapper.instance().isMemberInfo(fieldsInfo).fildsToRender.length).toBe(2);
      expect(wrapper.instance().isMemberInfo(fieldsInfo)).toEqual(expectedResult);
    });
  });

  describe('testing ptopTypes', () => {
    it('does not throw warning with expected props', () => {
      checkProps(Authentication, defaultProps);
    });
  });
});
