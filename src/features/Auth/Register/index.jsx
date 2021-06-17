import { yupResolver } from '@hookform/resolvers/yup';
import ImageRegister from 'assets/images/register.png';
import { pathNames } from 'constants/index';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { registerAsyncAction } from '../userSlice';
import {
  ErrorField,
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
import { unwrapResult } from '@reduxjs/toolkit';
import showToast from 'utils/Toast';

const schema = yup.object().shape({
  username: yup.string().required('Vui lòng nhập tên của bạn'),
  email: yup.string().required('Vui lòng nhập email của bạn').email('Email của bạn không hợp lệ'),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
    .required('Vui lòng nhập mật khẩu của bạn'),
  confirmPassword: yup
    .string()
    .required('Vui lòng nhập lại mật khẩu')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = (value) => {
    dispatch(registerAsyncAction(value));
    //const user = unwrapResult(resultAction);
    // do something here
    showToast('Đăng ký thành công.', 'success');
    reset();
  };

  return (
    <StyledLogin>
      <LoginContainer>
        <LoginLeft>
          <LoginImage>
            <img src={ImageRegister} alt="" />
          </LoginImage>
        </LoginLeft>
        <LoginRight>
          <LoginForm>
            <LoginTitle>Sign Up</LoginTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <InputField type="text" placeholder="Username" {...register('username')} />
                {errors.username && <ErrorField>{errors.username?.message}</ErrorField>}
              </FormControl>
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
                <FormLabel>Confirm Password</FormLabel>
                <InputField type="password" placeholder="Nhập lại mật khẩu" {...register('confirmPassword')} />
                {errors.confirmPassword && <ErrorField>{errors.confirmPassword?.message}</ErrorField>}
              </FormControl>
              <FormControl>
                <FormSubmit type="submit" disabled={isSubmitting}>
                  Sign Up
                </FormSubmit>
              </FormControl>
            </form>
            <LineText>
              <span>hoặc</span>
            </LineText>
            <GoogleLogin>
              <FcGoogle /> <span>Login with Google</span>
            </GoogleLogin>
            <LinkRegister>
              Bạn đã có tài khoản của BooBoo? <Link to={pathNames.LOGIN}>Đăng nhập</Link>
            </LinkRegister>
          </LoginForm>
        </LoginRight>
      </LoginContainer>
    </StyledLogin>
  );
};

export default Register;
