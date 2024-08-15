import React from "react";
import * as S from "../Form.style";

const Header = () => {
  const isLogin = true;
  return (
    <React.Fragment>
      <S.ImageUser className="py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-spotify"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
          <path d="M9 15c1.5 -1 4 -1 5 .5" />
          <path d="M7 9c2 -1 6 -2 10 .5" />
        </svg>
      </S.ImageUser>
      <h1 className="text-center">
        {isLogin ? `Đăng nhập để bắt đầu nghe` : `Đăng ký để bắt đầu nghe`}
      </h1>
      <hr className="my-10 w-1/2 border-t-2 border-0 border-gray-500" />
    </React.Fragment>
  );
};

export default Header;
