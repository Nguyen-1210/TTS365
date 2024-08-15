import { useResponsive } from "@app/hooks";
import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer/Footer";
import Sidebar from "@app/components/layouts/Sidebar/Sidebar";

const MainLayout = (): JSX.Element => {
  const location = useLocation();
  const homePage = location.pathname === "/";
  const maxWidth = homePage ? "1440px" : "1280px";

  const { isTablet, isDesktop } = useResponsive();

  return (
    <Layout className="h-screen">
      <Layout className="flex gap-3 m-3" style={{ maxWidth }}>
        {isTablet && <Sidebar />}
        <div className="flex flex-col overflow-hidden w-full">
          <Layout.Content>
            <Outlet />
          </Layout.Content>
        </div>
      </Layout>
      {!isDesktop && <Footer />}
    </Layout>
  );
};

export default MainLayout;
