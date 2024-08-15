import { Button, Form, Input } from "antd";

import * as S from "./Form.style";
import Footer from "@app/app/pages/auth/components/Footer";
import Header from "@app/app/pages/auth/components/Header";

export default function Signup() {
  return (
    <S.Form className="bg-gradient">
      <div className="bg-black rounded-lg flex flex-col items-center w-[634px] pb-10">
        <Header />
        <div className="mt-4 w-[360px]">
          <S.LoginForm className="mt-4">
            <Form autoComplete="off">
              <Form.Item
                name="email"
                // rules={[
                //   { required: true, message: `${t("user.account.login.required")} Email` },
                //   {
                //     type: "email",
                //     message: t("user.account.sign_up.validate.email"),
                //   },
                // ]}
                // validateStatus={errorForm?.email && "error"}
                // help={errorForm?.email && errorForm?.email[0]}
              >
                <Input
                  placeholder="Email hoặc tên người dùng"
                  className="py-3"
                  size="large"
                />
              </Form.Item>
              <Form.Item className="mb-3">
                <Button
                  size="large"
                  block
                  className="bg-green text-lg text-black font-bold py-6 my-6"
                  htmlType="submit"
                  type="primary"
                  shape="round"
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </S.LoginForm>
        </div>
        <Footer />
      </div>
    </S.Form>
  );
}
