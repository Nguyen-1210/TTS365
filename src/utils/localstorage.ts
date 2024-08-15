import Cookies from "js-cookie";

export const getAccessToken = () => {
  return Cookies.get("access_token");
};

export const setAccessToken = (token: string) => {
  Cookies.set("accessToken", token);
};

export const deleteToken = (): void => Cookies.remove("accessToken");
