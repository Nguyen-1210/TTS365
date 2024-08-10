import React from "react";
import { Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("@app/app/pages/auth/components/Login"));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* <Route element={<AuthLayout />}> */}
      {/* <Route path="auth/verify-otp" element={<CheckOtp />} />
        <Route path="auth/changepass" element={<ChangePass />} />
        <Route path="auth/send-otp" element={<EmailForm />} />
        <Route path="admin/shop/auth/switch" element={<SwitchPageAdmin />} />
        <Route path="admin/shop/auth/signin" element={<SigninAdmin />} />
        <Route path="admin/shop/auth/signup" element={<SignupAdmin />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default AppRouter;
