import { Button } from "antd";
import { styled } from "styled-components";

export const HomeStyle = styled.section`
  border-radius: 10px;
  padding: 12px;
  font-weight: 600;
  height: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    380deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(152, 40, 53, 0.8465511204481793) 100%,
    rgba(149, 92, 104, 1) 100%
  );
  font-size: 1.2rem;
`;

export const HeaderStyle = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 150;
`;

export const ButtonCarousel = styled(Button)`
  border: none;
  box-shadow: none;
  margin-right: 6px;
  padding: 6px 5px;
  border-radius: 100% !important;
  background-color: #000000;
`;

export const ButtonHanle = styled(Button)`
  border: none;
  margin-right: 10px;
  box-shadow: none;
  color: #000000;
  font-weight: 600;
  background-color: #ffffff;
`;
