import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <Result
    style={{
      height: "100vh",
    }}
    className="bg-gradient"
    status="404"
    title="404"
    subTitle="Trang không tồn tại."
    extra={
      <Button type="primary">
        <Link to="/" className="text-black">
          Quay về trang chủ
        </Link>
      </Button>
    }
  />
);

export default NotFound;
