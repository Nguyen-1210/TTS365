import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

export const SidebarStyle = styled(Sider)`
  position: sticky !important;
  top: 16px;
  background-color: transparent !important;
  max-height: 100vh;

  .sidebar {
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const HeaderStyle = styled.div`
  border-radius: 10px;
  padding: 12px;
  font-weight: 600;
  font-size: 1.2rem;
`;