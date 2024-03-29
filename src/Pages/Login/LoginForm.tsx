import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { useAuth } from '../../hooks/auth';
import GreenF from '../../assets/GreenF.svg';
import levia from '../../assets/levia.png';
import { Input } from '../../components/Forms/Input';
import { MdEmail, MdPassword } from 'react-icons/md';
import { device } from '../../styles/BreackPoints';

interface FormData {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().required('O email é obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'A senha deve conter pelo menos uma letra e um número',
    ),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const { signIn } = useAuth();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    signIn(data);
  };

  return (
    <Container>
      <MainContainer>
        <div className="header">
          <a href="/">
            <img src={GreenF} alt="Logo do site" title="GreenF" />
          </a>
          <p className="b3">
            Não tem uma conta?
            <span>
              <Link className="l2" to="/criar">
                Registre-se
              </Link>
            </span>
          </p>
        </div>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h1">Bom dia!</h1>
          <p className="b1 subtext">Entre na sua conta</p>
          <Input
            placeholder="Email"
            icon={MdEmail}
            label="email"
            register={register}
          />
          <p className="cap">{errors.email?.message}</p>

          <Input
            className="second_input"
            placeholder="Senha"
            icon={MdPassword}
            label="password"
            register={register}
          />
          <p className="cap">{errors.password?.message}</p>

          <button className="b1" type="submit">
            ENTRAR
          </button>
        </FormContainer>
      </MainContainer>
      <ImageContainer>
        <img src={levia} alt="main image" />
      </ImageContainer>
    </Container>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.container}
  padding-right:0px;
  display: grid;
  grid-template-columns: minmax(300px, 800px) minmax(100px, 600px);

  @media ${device.md} {
    grid-template-columns: 1fr;
  }
`;

const MainContainer = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;
    margin-right: 22px;

    p {
      color: ${({ theme }) => theme.colors.white};
      a {
        color: ${({ theme }) => theme.colors.LightGreen};
      }
    }
  }
`;

const FormContainer = styled.form`
  margin: 0 auto;
  text-align: center;
  padding-right: 1rem;

  max-width: 400px;
  margin-top: 70px;
  .second_input {
    margin-top: 38px;
  }
  .subtext {
    color: ${({ theme }) => theme.colors.Gray};
    margin-bottom: 40px;
    text-align: center;
  }
  button {
    color: ${({ theme }) => theme.colors.Primary};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.LightGreen};
    border-radius: 10px;
    padding: 12px 20px;
    width: 100%;
    cursor: pointer;
    margin-top: 32px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.LightGreen};
      color: #000;
    }
  }
  p {
    color: red;
    padding-top: 5px;
    text-align: right;
  }
`;

const ImageContainer = styled.div`
  img {
    object-fit: cover;
    transform: scaleX(-1);
    height: 100vh;

    @media ${device.md} {
      display: none;
    }
  }
`;
