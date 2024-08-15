export interface IUser {
  id: number;
  full_name: string;
  email: string;
  password: string;
}

export type IUserFormValues = Pick<IUser, "email" | "password">;
