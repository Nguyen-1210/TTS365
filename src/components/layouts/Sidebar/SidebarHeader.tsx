import SiderBarHeaderItem from "@app/components/layouts/Sidebar/SiderbarHeaderItem";
import * as S from "./Sidebar.styles";
import { ISidebarItem } from "@app/types/sidebar.types";

const SidebarHeader = () => {
  const data: ISidebarItem[] = [
    {
      id: 1,
      name: "Trang chủ",
      slug: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M10 12h4v4h-4z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Tìm kiếm",
      slug: "/search",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      ),
    },
  ];
  return (
    <S.HeaderStyle className="bg-black flex flex-col">
      {data?.map((headerItem: ISidebarItem) => {
        return (
          <SiderBarHeaderItem
            key={headerItem.id}
            sidebarItem={headerItem}
          />
        );
      })}
    </S.HeaderStyle>
  );
};

export default SidebarHeader;
