import { ConfigProvider, theme } from "antd";
import AppRouter from "./AppRouter";

function App() {
  const defaultTheme = {
    borderRadius: 5,
    colorPrimary: "#1fdf64",
  };

  return (
    <ConfigProvider
      prefixCls="om"
      iconPrefixCls="om"
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
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
