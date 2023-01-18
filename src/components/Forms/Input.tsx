import React from 'react';
import styled from 'styled-components';

interface Props {
  placeholder: string;
  icon?: any;
  className?: string;
  label?: string;
  register?: any;
  required?: boolean;
  rest?: any;
  minLength?: number;
  pattern?: any;
}

export const Input = ({
  placeholder,
  icon: Icon,
  className,
  label,
  register,
  required,
  ...rest
}: Props) => {
  return (
    <Container className={className}>
      <input
        className="b3"
        placeholder={placeholder}
        {...register(label, { required, ...rest })}
      />
      {Icon && <Icon size={24} color={'#B8B8B8'} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  input {
    padding: 23px 24px;
    border-radius: 10px;
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  svg {
    margin-right: 23px;
  }
`;
