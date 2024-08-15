import { ISidebarItem } from "@app/types/sidebar.types";
import { Link } from "react-router-dom";

interface ISideHeaderbarItem {
  sidebarItem: ISidebarItem;
}

const SiderBarHeaderItem = ({ sidebarItem }: ISideHeaderbarItem) => {
  const { name, slug, icon } = sidebarItem;
  return (
    <Link
      to={`${slug}`}
      className="hover:opacity-80 hover:ease-in transition-all duration-[30ms] flex py-[7px] px-[10px] items-center cursor-pointer"
    >
      <div className="basis-[32px] height-[32px] me-[8px] line-[0]">{icon}</div>
      <h3 className="text-[14px] font-semibold leading-[150%]">
        {name}
      </h3>
    </Link>
  );
};

export default SiderBarHeaderItem;
