import React, { useState } from 'react';
import { api } from '../../services/api';
import { Input } from '../../components/Forms/Input';
import styled from 'styled-components';
import GreenF from '../../assets/GreenF.svg';
import levia from '../../assets/levia.png';
import { MdEmail, MdPassword, MdVerifiedUser } from 'react-icons/md';
import { device } from '../../styles/BreackPoints';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
  name: string;
  cpassword: string;
}

export const LoginCreate = () => {
  const [passworderror, setPassworderror] = useState('');

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.password !== data.cpassword) {
      setPassworderror('As senhas não são iguais.');
      return;
    }
    console.log(data);
  };

  return (
    <Container>
      <ImageContainer>
        <img src={levia} alt="main image" />
      </ImageContainer>
      <MainContainer>
        <div className="header">
          <a href="/">
            <img src={GreenF} alt="Logo do site" title="GreenF" />
          </a>
          <p className="b3">
            Já tem um conta ?
            <span>
              <Link className="l2" to="/">
                Entre
              </Link>
            </span>
          </p>
        </div>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h1">Registre-se</h1>
          <p className="b1 subtext">
            Aproveite tudo o que o GreenF tem a oferecer
          </p>
          <Input
            placeholder="Nome"
            icon={MdVerifiedUser}
            label="name"
            register={register}
            required
          />
          {errors.name?.type === 'required' && (
            <p className="cap">O nome é obrigatório</p>
          )}

          <Input
            placeholder="Email"
            icon={MdEmail}
            label="email"
            register={register}
            required
            pattern={
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            }
          />
          {errors.email?.type === 'required' && (
            <p className="cap">O email é obrigatório</p>
          )}

          {errors.email?.type === 'pattern' && (
            <p className="cap">Email inválido</p>
          )}

          <Input
            placeholder="Senha"
            icon={MdPassword}
            label="password"
            register={register}
            required
            minLength={8}
            pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
          />
          {errors.password?.type === 'required' && (
            <p className="cap">A senha é obrigatória</p>
          )}
          {errors.password?.type === 'pattern' && (
            <p className="cap">
              A senha deve conter pelo menos uma letra e um número
            </p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="cap">A senha deve conter pelo menos 8 caracteres</p>
          )}
          {passworderror && <p className="cap">{passworderror}</p>}

          <Input
            placeholder="Confirme sua senha"
            icon={MdPassword}
            register={register}
            label="cpassword"
            required
            minLength={8}
            pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/}
          />
          {errors.cpassword?.type === 'required' && (
            <p className="cap">A senha é obrigatória</p>
          )}
          {errors.cpassword?.type === 'pattern' && (
            <p className="cap">
              A senha deve conter pelo menos uma letra e um número
            </p>
          )}
          {errors.cpassword?.type === 'minLength' && (
            <p className="cap">A senha deve conter pelo menos 8 caracteres</p>
          )}
          {passworderror && <p className="cap">{passworderror}</p>}

          <button type="submit" className="b1">
            ENTRAR
          </button>
        </FormContainer>
      </MainContainer>
    </Container>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.container}
  padding-left:0px;
  display: grid;
  grid-template-columns: minmax(100px, 600px) minmax(300px, 820px);

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
    margin-left: 22px;

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
  div {
    margin-top: 20px;
  }
  .subtext {
    color: ${({ theme }) => theme.colors.Gray};
    margin-bottom: 20px;
    text-align: center;
  }
  button {
    color: #000;
    background-color: ${({ theme }) => theme.colors.LightGreen};
    border-radius: 10px;
    padding: 12px 20px;
    max-width: 400px;
    width: 100%;
    margin-top: 32px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.Primary};
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