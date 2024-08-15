import * as S from "./Home.styles";
import { Button, Dropdown, Menu } from "antd";
import { useLogoutUser } from "@app/services/User.services";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const logout = useLogoutUser();
  const navigate = useNavigate();

  const hanleLogout = async () => {
    try {
      await logout.mutateAsync();
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };
  const menu: React.ReactElement = (
    <Menu>
      <Menu.Item key="0">
        <Button
          onClick={hanleLogout}
          className="border-0 bg-transparent shadow-none p-0"
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <S.HomeStyle className="bg-black">
      <S.HeaderStyle className="sticky top-0 left-0 right-0 z-[150] shadow-inner">
        <div className="flex justify-between items-center">
          <div>
            <S.ButtonCarousel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
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
                <path d="M15 6l-6 6l6 6" />
              </svg>
            </S.ButtonCarousel>
            <S.ButtonCarousel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
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
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </S.ButtonCarousel>
          </div>
          <div>
            <S.ButtonHanle shape="round">Nguyen</S.ButtonHanle>
            <S.ButtonHanle shape="round">Nguyen</S.ButtonHanle>
            <Dropdown menu={menu} trigger={["click"]}>
              <S.ButtonCarousel
                className="ps-3 pe-3"
                shape="round"
                onClick={(e) => e.preventDefault()}
              >
                M
              </S.ButtonCarousel>
            </Dropdown>
          </div>
        </div>
        <div className="flex my-5">
          <S.ButtonHanle shape="round">All</S.ButtonHanle>
          <S.ButtonHanle shape="round">Music</S.ButtonHanle>
        </div>
      </S.HeaderStyle>
    </S.HomeStyle>
  );
};

export default Home;
