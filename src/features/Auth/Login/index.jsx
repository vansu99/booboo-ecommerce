import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import ImageLogin from 'assets/images/login.jpg';
import { pathNames } from 'constants/index';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import showToast from 'utils/Toast';
import * as yup from 'yup';
import { loginAsyncAction } from '../userSlice';
import {
  ErrorField,
  ForgotPassword,
  FormControl,
  FormLabel,
  FormSubmit,
  GoogleLogin,
  InputField,
  LineText,
  LinkRegister,
  LoginContainer,
  LoginForm,
  LoginImage,
  LoginLeft,
  LoginRight,
  LoginTitle,
  StyledLogin,
} from './style';

const schema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập email của bạn').email('Email của bạn không hợp lệ'),
  password: yup
    .string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
    .required('Vui lòng nhập mật khẩu của bạn'),
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (value) => {
    const result = await dispatch(loginAsyncAction(value));
    const user = unwrapResult(result);
    if (user._id) {
      history.push('/');
      showToast('Đăng ký thành công.', 'success');
    }
    reset();
  };

  return (
    <StyledLogin>
      <LoginContainer>
        <LoginLeft>
          <LoginImage>
            <img src={ImageLogin} alt="" />
          </LoginImage>
        </LoginLeft>
        <LoginRight>
          <LoginForm>
            <LoginTitle>
              Sign In
            </LoginTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <InputField type="text" placeholder="Email" {...register('email')} />
                {errors.email && <ErrorField>{errors.email?.message}</ErrorField>}
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputField type="password" placeholder="Mật khẩu" {...register('password')} />
                {errors.password && <ErrorField>{errors.password?.message}</ErrorField>}
              </FormControl>
              <FormControl>
                <FormSubmit type="submit">Sign In</FormSubmit>
              </FormControl>
              <ForgotPassword to="/">Quên mật khẩu?</ForgotPassword>
            </form>
            <LineText>
              <span>hoặc</span>
            </LineText>
            <GoogleLogin>
              <FcGoogle /> <span>Login with Google</span>
            </GoogleLogin>
            <LinkRegister>
              Bạn mới biết đến BooBoo? <Link to={pathNames.REGISTER}>Đăng ký</Link>
            </LinkRegister>
          </LoginForm>
        </LoginRight>
      </LoginContainer>
    </StyledLogin>
  );
};

export default Login;
