import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "@app/app/pages/auth/components/Header";
import Footer from "@app/app/pages/auth/components/Footer";

import * as S from "./Form.style";
// import { IUserFormValues } from "@app/types/user.types";

// const schema = yup
//   .object({
//     email: yup
//       .string()
//       .email("Vui lòng nhập đúng định dạng email")
//       .required("Email không được để trống"),
//     password: yup
//       .string()
//       .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
//       .max(12, "Mật khẩu không được quá 12 ký tự")
//       .required("Mật khẩu không được để trống"),
//   })
//   .required();

export default function Login() {
  const navigate = useNavigate();
  // const mutation = useLoginUser();
  // const resolver: Resolver<IUserFormValues> = yupResolver(schema);
  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm<IUserFormValues>({
  //   resolver,
  // });

  // const onSubmit = async (data: IUserFormValues) => {
  //   try {
  //     await mutation.mutateAsync(data, {
  //       onSuccess: () => {
  //         navigate("/");
  //       },
  //     });
  //   } catch (error: any) {
  //     notification.error({
  //       message: "Đăng nhập thất bại",
  //       description: error.response?.data,
  //     });
  //   }
  // };

  const handleLogin = async () => {
    try {
      window.location.href = `${import.meta.env.VITE_AUTH_ENDPOINT}?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_BASE_URL}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}&show_dialog=true`;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Form className="bg-gradient">
      <div className="bg-black rounded-lg flex flex-col items-center w-[634px] pb-10">
        <Header />
        <div className="mt-4 w-[360px]">
          <Button
            size="large"
            block
            className="bg-green text-lg tr text-black font-bold py-6 my-6"
            htmlType="submit"
            type="primary"
            shape="round"
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>
          {/* Form login react hooks form and validate Yup */}
          {/* <S.LoginForm className="mt-4">
            <Form autoComplete="off" onFinish={handleSubmit(onSubmit)}>
              <Form.Item
                validateStatus={errors.email ? "error" : ""}
                help={errors.email?.message}
                className="mb-8"
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Email hoặc tên người dùng"
                      className="py-3"
                      size="large"
                    />
                  )}
                />
              </Form.Item>
              <Form.Item
                validateStatus={errors.password ? "error" : ""}
                help={errors.password?.message}
                className="mb-8"
              >
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input.Password
                      {...field}
                      placeholder="Mật khẩu"
                      className="py-3"
                      size="large"
                    />
                  )}
                />
              </Form.Item>
              <div className="flex h-10 items-center">
                <Switch defaultChecked className="mr-2" />
                <p>Ghi nhớ</p>
              </div>
              <Form.Item className="mb-3">
                <Button
                  size="large"
                  block
                  className="bg-green text-lg tr text-black font-bold py-6 my-6"
                  htmlType="submit"
                  type="primary"
                  shape="round"
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              <div className="flex justify-center">
                <Link to="/" className="text-center underline text-lg">
                  Quên mật khẩu
                </Link>
              </div>
            </Form>
          </S.LoginForm> */}
        </div>
        <Footer />
      </div>
    </S.Form>
  );
}
