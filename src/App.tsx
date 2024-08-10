import "./App.css";
import { ConfigProvider } from "antd";
import AppRouter from "./AppRouter";

function App() {
  const defaultTheme = {
    borderRadius: 4,
    colorPrimary: "#0a68ff",
  };

  return (
    <ConfigProvider
      prefixCls="om"
      iconPrefixCls="om"
      theme={{
        token: {
          colorBgContainerDisabled: "#f5f5f5",
          colorPrimary: defaultTheme.colorPrimary,
          borderRadius: defaultTheme.borderRadius,
          fontFamily: "Inter,Helvetica,Arial,sans-serif",
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
