import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormComponent from '../../components/formComponent';
import { fieldsInfo } from '../../helpers/constants';
import { formValidation } from '../../helpers/formValidation';
import { postUserData, authFail } from '../../store/actions/postUserDataAction';
import authImage from '../../assets/images/authImage.png';
import './authentication.css';

export class Authentication extends Component {
    state = {
      isMember: true,
      userData: {},
      validationErrors: {},
    };

    static getDerivedStateFromProps(props) {
      if (props.error) {
        return {
          validationErrors: props.error,
        };
      }
      return null;
    }

    onInputChange = ({ target: { name, value } }) => {
      const userData = { ...this.state.userData };
      userData[name] = value;
      this.setState({ userData });
    };

    onLinkClick = () => {
      const { isMember } = this.state;
      this.setState({ isMember: !isMember, userData: {}, validationErrors: {} });
      this.props.authFailAction(null);
    };

    onFormSubmit = () => {
      const { history, onAuth } = this.props;
      const { data, path } = this.isMemberInfo();
      const validationRes = formValidation(data);

      if (Object.keys(validationRes).length === 0) {
        onAuth(path, data, history);
      } else {
        this.setState({ validationErrors: validationRes });
      }
    };

    isMemberInfo = (info = []) => {
      const {
        userData: {
          username, email, password, passwordConfirmation,
        },
        isMember,
      } = this.state;
      if (isMember) {
        return {
          fildsToRender: info.filter(el => isMember === el.isMember),
          formTitle: 'Login',
          message: 'Dont have an account? Register!',
          path: '/login',
          data: { email, password },
        };
      }
      return {
        fildsToRender: info,
        formTitle: 'Registration',
        message: 'Already have an account? Login!',
        path: '/registration',
        data: {
          username, email, password, passwordConfirmation,
        },
      };
    }

    render() {
      const { userData, validationErrors } = this.state;
      const { fildsToRender, formTitle, message } = this.isMemberInfo(fieldsInfo);
      return (
        <div className="authentication">
          <img
            type="image/svg+xml"
            src={authImage}
            alt="Music band"
            className="authImage"
          />
          <div className="form-container">
            <h1 className="title">{formTitle}</h1>
            <FormComponent
              fieldsToRender={fildsToRender}
              onInputChange={this.onInputChange}
              onFormSubmit={this.onFormSubmit}
              userData={userData}
              validationErrors={validationErrors}
              loading={this.props.loading}
            />
            <input
              type="button"
              onClick={this.onLinkClick}
              className="message"
              value={message}
            />
          </div>
        </div>
      );
    }
}

Authentication.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  onAuth: PropTypes.func,
  loading: PropTypes.bool,
  authFailAction: PropTypes.func,
};

const mapDispatchToProps = {
  onAuth: postUserData,
  authFailAction: authFail,
};

const mapStateToProps = state => ({
  loading: state.authStatus.loading,
  error: state.authStatus.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authentication));
