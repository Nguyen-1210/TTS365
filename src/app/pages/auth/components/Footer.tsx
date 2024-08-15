import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const isLogin = true;

  return (
    <React.Fragment>
      <hr className="my-8 w-1/2 border-t-2 border-0 border-gray-500" />
      <div className="text-center my-4">
        {isLogin ? (
          <>
            <span className="text-[#6a6a6a]">Bạn chưa có tài khoản?</span>
            <Link to="/auth/signup">
              <span className="ml-2">Đăng ký</span>
            </Link>
          </>
        ) : (
          <>
            <span className="text-[#6a6a6a]">Bạn đã có tài khoản?</span>
            <Link to="/auth/login">
              <span className="ml-2">Đăng nhập</span>
            </Link>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Footer;
