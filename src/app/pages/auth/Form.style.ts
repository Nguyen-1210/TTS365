import { styled } from "styled-components";

export const ImageUser = styled.div`
  width: 100%;
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.div`
  padding: 32px;
  @media (max-width: 768px) {
    .max-width-form {
      justify-content: center;
    }
  }

  @media (min-width: 414px) {
    display: flex;
    justify-content: center;
  }
`;

export const LoginForm = styled.div`
  @media (min-width: 414px) {
    width: 90%;
    margin: auto !important;
  }
  @media (max-width: 414px) {
    max-width: 75%;
  }

  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }
`;