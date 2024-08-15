import { IUserFormValues } from "@app/types/user.types";
import apiInstance from "@app/config/apiInstance";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (data: IUserFormValues) => {
      return apiInstance.post<IUserFormValues>(`auth/login`, data);
    },
  });
};

export const useLogoutUser = () => {
  return useMutation({
    mutationFn: () => {
      return apiInstance.post(`auth/logout`);
    },
  });
}
