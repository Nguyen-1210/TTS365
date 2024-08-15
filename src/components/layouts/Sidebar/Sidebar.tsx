import * as S from "./Sidebar.styles";
import SidebarHeader from "@app/components/layouts/Sidebar/SidebarHeader";
import PlayList from "@app/components/layouts/Sidebar/PlayList";

const Sidebar = () => {
  return (
    <S.SidebarStyle width="30%">
      <div className="sidebar flex flex-col gap-3 h-full">
        <SidebarHeader />
        <PlayList />
      </div>
    </S.SidebarStyle>
  );
};
export default Sidebar;
